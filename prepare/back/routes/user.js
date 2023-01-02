const express = require('express');
const bcrypt = require('bcrypt');
const passport =require('passport');

const { User, Post } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const router = express.Router();

router.post('/login', isNotLoggedIn, (req, res, next) => { // POST /user/login
    passport.authenticate('local', (err, user, info) => {  
        if(err) { //서버쪽 에러
            console.error(err);
            return next(err);
        }
        if(info) {
            return res.status(401).send(info.reason); //401은 허가되지 않음을 뜻함 보통 로그인에서 많이 사용함
        }
        return req.login(user, async (loginErr) => {
            if(loginErr) { //passport 로그인 에러
                console.error(loginErr);
                return next(loginErr);
            }
            const fullUserWithoutPassword = await User.findOne({ //비밀번호를 제외한 모든 정보들을 다 집어넣은 유저
                where: { id: user.id },
                attributes: { //원하는것만 제외해서 추출할때
                    exclude: ['password']
                },//['id', 'nickname', 'email'], 원하는 부분만 추출할때
                include: [{
                    model: Post,
                }, {
                    model: User,
                    as: 'Followings',
                }, {
                    model: User,
                    as: 'Followers',
                }]
            })
            return res.status(200).json(fullUserWithoutPassword);
        });
    })(req, res, next); //미들웨어 확장방법! 찾아보자..
});

router.post('/', isNotLoggedIn, async (req, res, next) => { // POST /user/
    try {
        const exUser = await User.findOne({
            where: { //찾을때 조건
                email: req.body.email,
            }
        });
        if(exUser) {
            return res.status(403).send('이미 사용중인 아이디입니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });
        //res.setHeader('Access-Control-Allow-Origin', '*'); //CROS에러 해결 방법 1
        res.status(201).send('ok'); //status는 생략이 가능하나 웬만하면 생략하지 않는 것을 추천
    } catch(error) {
        console.error(error);
        next(error); //에러들이 한방에 처리된다..? status 500
    }
});


router.post('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
});


module.exports = router;