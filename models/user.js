module.exports = function (sequelize, Sequelize) {
    var User = sequelize.define('user', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        user_name: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        user_pass: {
            type: Sequelize.STRING,
            notEmpty: true
        },
    });
    return User;
}