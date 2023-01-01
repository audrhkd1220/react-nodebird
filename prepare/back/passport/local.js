const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = () => {
    passport.use(new LocalStrategy({ //req.body에 대한 설정
        usernameField: 'email',
        passwordField: 'password',
    }, async (email, password, done) => {
        try { //(await)비동기 요청을하면 항상 서버에러가 발생할 수 있어 try로 감싸준다!
            const user = await User.findOne({ //기존등록된 사용자가 있는지 확인
                where: { email }
            });
            if(!user) {
                return done(null, false, { reason: '존재하지 않는 이메일입니다!' }); //서버에러, 성공, 클라이언트에러
            }
            const result = await bcrypt.compare(password, user.password) //사용자가 입력한 비밀번호, DB에 등록된 비밀번호 비교
            if(result) { //비밀번호가 맞을경우
                return done(null, user);
            }
            return done(null, false, { reason: '비밀번호가 틀렸습니다.' });
        } catch(error) {
            console.error(error);
            return done(error);
        }
    }));
}