module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', { //User : 모델이름 mysql에 저장될땐 소문자 복수 users로 저장됨(테이블 생성)
        // id가 기본적으로 들어있다.
        email: {
            type: DataTypes.STRING(30), //STRING, INTEGER, FLOAT, DATETIME, TEXT, BOOLEAN 등 ...
            allowNull: false, //필수
            unique: true, //고유한 값(중복 x)
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false, //필수
        },
        password: {
            type: DataTypes.STRING(100), //암호화때문에 넉넉하게 길게잡는다.
            allowNull: false, //필수
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', //한글 저장
    });
    User.associate = (db) => {
        db.User.hasMany(db.Post); //사람이 여러개의 게시글을 갖을 수 있다.
        db.User.hasMany(db.Comment); //사람이 여러개의 댓글을 갖을 수 있다.
        //hasOne : 1대1관계
        db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked'}); //좋아요는 다대다 관계.
        //두번째 매개변수의 through는 생성되는 중간테이블이름을 지정한것 지정하지않으면 두테이블의 이름이 합쳐짐.
        //as로 별칭을 지정하여 구분 할 수 있다.

        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId' }); // 같은테이블 일때 다대다
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowerId' }); 
        // UserId이름이 같기때문에 foreignKey로 key이름을 바꿔 구분하게 해준다.
    };
    return User;
}