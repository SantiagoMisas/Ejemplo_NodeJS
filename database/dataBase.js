import { Sequelize } from "sequelize";

const dataBase=new Sequelize('crud', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
export {dataBase}