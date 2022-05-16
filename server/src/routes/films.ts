import express, { Request, Response, NextFunction, Router } from 'express';
import { convertCsvToJSON } from '../utils/csvData';
import { Film } from '../interfaces/film';
import path from 'path';
import fs from 'fs';

const router: Router = express.Router();

const csvFileData = fs.readFileSync(path.resolve(__dirname, '../../films.csv'), { encoding: 'utf8' });
const csvJSONData = convertCsvToJSON(csvFileData);

const getFilms = (req: Request, res: Response, next: NextFunction) => {
    const { filter } = req.query;
    try {
        if (filter) {
            return res.json(csvJSONData.filter((film: Film) => {
                return film.genre1.toLowerCase().startsWith((filter as string).toLowerCase()) || 
                    film.genre2.toLowerCase().startsWith((filter as string).toLowerCase()) || 
                    film.year.toLowerCase().startsWith((filter as string).toLowerCase());
            }));
        }

        return res.json(csvJSONData);
    } catch (err) {
        return next(err);
    }
}

router.get('/', getFilms);

export default router;