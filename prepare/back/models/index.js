const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development'; //
const config = require('../config/config')[env]; //config/config.json의 development를 가져옴 배포했을경우는 아마 프로덕션
const db = {};

const sequelize = new Sequelize(config.database, config.usename, config.password, config); //시퀄라이즈가 노드랑 mysql을 연결해줌.

db.Comment = require('./comment')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
db.Image = require('./image')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
