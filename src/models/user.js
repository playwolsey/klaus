export default (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            primaryKey: true
        },
        user_type: {
            type: DataTypes.CHAR(1),
            allowNull: true
        },
        real_name: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        user_stat: {
            type: DataTypes.CHAR(1),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(19),
            allowNull: true
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        mobile: {
            type: DataTypes.STRING(11),
            allowNull: false,
            primaryKey: true
        },
        telphone: {
            type: DataTypes.STRING(14),
            allowNull: true
        },
        sex: {
            type: DataTypes.CHAR(1),
            allowNull: true
        },
        last_login_time: {
            type: DataTypes.STRING(11),
            allowNull: true
        }
    }, {
        tableName: 'user'
    })

    user.sync()

    return user
}
