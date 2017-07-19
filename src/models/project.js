import sequelize from './sequelize'
import Sequelize from 'sequelize' 

const Project = sequelize.define('project', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Project.sync()

export default Project
