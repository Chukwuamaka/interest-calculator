import express from 'express';
import * as Interest from './modules/interest.js';

const server = express();
const port: string | number = process.env.PORT || 3000;
const hostname: string =  'localhost';

server.listen(port, (): void => console.log(`Server is running on ${hostname}:${port}`));

server.use(express.static('public'));
server.use(express.json({limit: '1mb'}));

server.get('/simple', (req, res) => {
    let principal: number = Number(req.query.amount);
    let rate: number = Number(req.query.rate);
    let rateBasis: string = req.query.basis.toString();
    let duration: number = Number(req.query.duration);
    const response = {principal, ...Interest.simple(principal, {rate, rateBasis}, duration)};
    res.json(response);
});

server.get('/compound', (req, res) => {
    let principal: number = Number(req.query.amount);
    let rate: number = Number(req.query.rate);
    let rateBasis: string = req.query.basis.toString();
    let duration: number = Number(req.query.duration);
    const response = {principal, ...Interest.compound(principal, {rate, rateBasis}, duration)};
    res.json(response);
});