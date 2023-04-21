import { Task } from "../models/Task.js";

export const getTasks = async(req, res) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
        
    } catch (error) {
        res.status(500).jason({message: error.message})
    }

}
export const getTask = async(req, res) => {
    const {id}=req.params;
    try {
        const task = await Task.findById(id);
        if (!task) {
            res.status(404).json({message: 'No existe la tarea con id' + id})
        }
        res.status(200).json(task);
        
    } catch (error) {
        res.status(500).jason({message: error.message})
    }
    
}
export const updateTask = async(req, res) => {
    const {id}= req.params;
    const {name, done} = req.body;
    try {
        const task = await Task.findOne({where:{id}})
        task.name= name; 
        task.done= done;
        await Task.save();
        res.status(200).json(task);
        
    } catch (error) {
        
    }
}
export const deleteTask = async(req, res) => {
    const {id}= req.params;
    try {
        const task = await Task.distr0y({where:{id}, attributes:['name']})
        res.status(200).json('Task deleted successfully');
        
    } catch (error) {
        res.status(500).jason({message: error.message})
    }
    
}
export const createTask = async(req, res) => {
    const {name, done, projectId}= req.body;
    try {
        const task = await Task.create({name, done, projectId});
        await task.save();
        res.status(200).json(task);
        
    } catch (error) {
        res.status(500).jason({message: error.message})    
    }

}