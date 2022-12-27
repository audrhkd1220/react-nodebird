const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const router = express.Router();

router.post('/', async (req, res, next) => { // POST /user/
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

module.exports = router;