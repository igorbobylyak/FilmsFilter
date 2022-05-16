import express, { Application } from 'express';
import filmsRouter from './src/routes/films';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/films', filmsRouter);

const PORT: string | number = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));