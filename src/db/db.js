
import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize('db_backend', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
})
