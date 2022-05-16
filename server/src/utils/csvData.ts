import { Film } from "../interfaces/film";

export const convertCsvToJSON = (csv: string) => {
    const rows = csv.split('\n');
    const filmObjs: Film[] = [];

    const headers = rows[0].split(',');
    for(let i = 1; i < rows.length; i++) {
        const rowData = rows[i].split(',');
        const film: any = {};
        for(let j = 0; j < rowData.length; j++) {
           film[headers[j].trim()] = rowData[j].trim();
        }
        filmObjs.push(film);
    }
    return filmObjs;
}