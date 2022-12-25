module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        // id가 기본적으로 들어있다.
        content: {
            type: DataTypes.TEXT, //실제 트위터에서는 140글자이지만 TEXT를 써보려고 제한이없는 TEXT로 설정한것.
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4', 
        collate: 'utf8mb4_general_ci', //mb4를 넣어야 이모티콘도 저장됨
    });
    Post.associate = (db) => {
        db.Post.belongsTo(db.User); //게시글은 어떤 한 작성자에게 속해있다.
        db.Post.hasMany(db.Comment); //게시글은 여러개의 댓글을 갖을 수 있다.
        db.Post.hasMany(db.Image); //게시글은 여러개의 이미지를 갖을 수 있다.
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag'}); //다대다 관계.
        db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }); //좋아요는 다대다 관계.
        db.Post.belongsTo(db.Post, { as: 'Retweet' }); //어떤 게시글의 리트윗 게시글
    }
    return Post;
}