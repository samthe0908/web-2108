import express, { Request, Response } from 'express';
import userRoutes from './routes/userRoutes'


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/users', userRoutes);


const PORT = 4001;
app.listen(4001, () => {
    console.log(`Server listens on port: ${PORT}`);
});