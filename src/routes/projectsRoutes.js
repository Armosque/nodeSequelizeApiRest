import { Router } from "express";
import {getProjects, createProject, updateProject, deleteProject, getProject, getProjectTask} from '../controllers/projectsController.js';

const router=Router();

router.get('/projects', getProjects)
router.post('/projects', createProject)
router.put('/projects/:id', updateProject)
router.delete('/projects/:id', deleteProject)
router.get('/projects/:id', getProject)
router.get('/projects/:id/task', getProjectTask)


export default router;