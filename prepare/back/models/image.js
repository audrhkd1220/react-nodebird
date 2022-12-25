module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        // id가 기본적으로 들어있다.
        src: {
            type: DataTypes.STRING(200), //URL이므로 넉넉하게 길게 잡는다.
            allowNull: false,
        },
    }, {
        charset: 'utf8', 
        collate: 'utf8_general_ci',
    });
    Image.associate = (db) => {
        db.Image.belongsTo(db.Post); //이미지는 어떤 한 게시글에 속해있다.
    };
    return Image;
}