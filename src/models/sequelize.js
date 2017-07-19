import Sequelize from 'sequelize' 
import dbConfig from '../config/db'

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
        ssl: dbConfig.ssl
    }
});

export default sequelize
