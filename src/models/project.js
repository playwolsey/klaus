export default (sequelize, DataTypes) => {
    const project = sequelize.define('project', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'projects'
    })

    return project
}
