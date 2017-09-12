export default (sequelize, DataTypes) => {
    const api = sequelize.define('api', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'api'
    })

    return api
}
