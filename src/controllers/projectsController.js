
import {Project} from '../models/Project.js';

export const getProjects= async (req, res)=>{
    try {
        const projects = await Project.findAll();
        res.status(200).json(projects)
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    

}
export const getProject= async (req, res)=>{
    const {id} = req.params;
    try {
        const project= await Project.findOne({where:{id}})
        
        if(!project){
            res.status(404).json('No existe project with id ' + id)
        }
        res.status(200).json({project});
    } catch (error) {
        res.status(500).json({message: error.message});
    }

}

export const createProject= async(req, res)=>{
    const {name, priority, description} = req.body;
    try {
        const newProject = await Project.create({name, priority, description})
        res.status(200).json(newProject);
    } catch (error) {
        res.status(400).json({message: error.message});
    }

}

export const updateProject= async (req, res)=>{
    const {id} = req.params;
    const {name, priority, description} = req.body;
    try {
        const project = await Project.findByPk(id);
        project.name = name,
        project.priority = priority,
        project.description = description

        await Project.save();
        res.status(200).send(project);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
    

}

export const deleteProject= async (req, res)=>{
    const {id} = req.params;
    try {
        const project = await Project.destroy({
            where:{id}
        })
        res.status(200).json('Project elimando exitosamente')
    } catch (error) {
        res.status(500).json({message: error.message});
    }


}
