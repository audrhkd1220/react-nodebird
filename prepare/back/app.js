const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const passportConfig = require('./passport');

dotenv.config();
const app = express();
db.sequelize.sync()
    .then(() => {
        console.log('db 연결 성공');
    })
    .catch(console.error);

passportConfig();

app.use(cors({
    origin: '*',
    //credentials: true,
})); //cors해결방법 2 라이브러리사용

//아래 두개의 문장(req.body에 값을 넣는)의 위치는 꼭 여기!
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('hellow express');
});

app.get('/api', (req, res) => {
    res.send('hellow api');
});

app.get('/posts', (req, res) => {
    res.json([
        { id: 1, content: 'hellow' },
        { id: 2, content: 'hellow2' },
        { id: 3, content: 'hellow3' }
    ]);
});

app.use('/post', postRouter);
app.use('/user', userRouter);

//여기서 기본적인 에러처리를 미들웨어를 변경 할 수 있다.
/*
app.use((err, req, res, next) => {

});
*/

app.listen(3065, () => {
    console.log('서버 실행 중!!');
});