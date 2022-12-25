module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        // id가 기본적으로 들어있다.
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        //밑에처럼 적어주진 않지만 belonsTo를 사용하면 테이블에 저렇게 데이터가 생성된다.
        //UserId: {}
        //PostId: {}
    }, {
        charset: 'utf8mb4', 
        collate: 'utf8mb4_general_ci', //mb4를 넣어야 이모티콘도 저장됨
    });
    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User); //댓글은 어떤 한 작성자에 속해있다.
        db.Comment.belongsTo(db.Post); //댓글은 어떤 한 게시글에 속해있다.
    };
    return Comment;
}