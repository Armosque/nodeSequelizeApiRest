import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";
import { Task } from "./Task.js";

export const Project = sequelize.define('proyects',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name:{
        type: DataTypes.STRING
    },

    priority:{
        type: DataTypes.INTEGER
    },

    description:{
        type: DataTypes.STRING
    }
}, {timeStamp:true})

Project.hasMany(Task,{
    foreignKey:'projectId',
    sourceKey:'id'
})

Task.belongsTo(Project,{
    foreignKey:'projectId',
    targetId:'id'
})

