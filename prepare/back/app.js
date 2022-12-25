const express = require('express');
const postRouter = require('./routes/post');
const db = require('./models');

const app = express();
db.sequelize.sync()
    .then(() => {
        console.log('db 연결 성공');
    })
    .catch(console.error);

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

app.listen(3065, () => {
    console.log('서버 실행 중!!');
});