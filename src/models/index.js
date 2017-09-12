import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize' 
import dbConfig from '../config/db'

const basename = path.basename(module.filename)

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    protocol: dbConfig.dialect,
    port: dbConfig.port,
    underscored: true, // 字段以下划线（_）来分割（默认是驼峰命名风格）
    timezone: dbConfig.timezone,//东八区
    pool: {
        max: dbConfig.max,
        min: 0,
        idle: dbConfig.idleTimeoutMillis
    },
    dialectOptions: {
        ssl: dbConfig.ssl,
        charset: dbConfig.charset
    }
})

let db = {}

fs
    .readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
    })
    .forEach((file) => {
        let model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
