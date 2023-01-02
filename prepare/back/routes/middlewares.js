exports.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()) {
        next(); //next매개변수에 뭔갈 넣으면 에러처리 아닐경우 다음 미들웨어를 실행
    } else {
        res.status(401).send('로그인이 필요합니다.');
    }
}

exports.isNotLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        next(); //next매개변수에 뭔갈 넣으면 에러처리 아닐경우 다음 미들웨어를 실행
    } else {
        res.status(401).send('로그인하지 않은 사용자만 접근 가능합니다.');
    }
}