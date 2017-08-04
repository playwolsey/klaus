import sequelize from './sequelize'
import Sequelize from 'sequelize' 

const Project = sequelize.define('project', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// Project.sync()

export default Project
