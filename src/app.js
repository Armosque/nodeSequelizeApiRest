import express from 'express';
import projectsRoutes from './routes/projectsRoutes.js'
import taskRoutes from './routes/tasksRoutes.js';
import morgan from 'morgan';



const app = express();
app.use(express.json());
app.use(morgan());
app.use(projectsRoutes)
app.use(taskRoutes);





export default app;