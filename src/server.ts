import express from 'express';
import cors  from 'cors';
import * as Interest from './modules/interest.js';

const server = express();
const port: string | number = process.env.PORT || 3000;
const hostname: string =  'localhost';

server.listen(port, (): void => console.log(`Server is running on ${hostname}:${port}`));

server.use(express.static('public'));
server.use(express.json({limit: '1mb'}));

const corsOptions = {
    methods: ['GET', 'POST', 'PUT'],
    optionsSuccessStatus: 200
};

server.all('/simple', cors(corsOptions), (req, res) => {
    let principal: number = Number(req.query.amount) || 0;
    let rate: number = Number(req.query.rate) || 0;
    let rateBasis: string = req.query.basis === undefined ? '' : req.query.basis.toString();
    let duration: number = Number(req.query.duration) || 0;
    const response = {principal, ...Interest.simple(principal, {rate, rateBasis}, duration)};
    res.json(response);
});

server.all('/compound', cors(corsOptions), (req, res) => {
    let principal: number = Number(req.query.amount) || 0;
    let rate: number = Number(req.query.rate) || 0;
    let rateBasis: string = req.query.basis === undefined ? '' : req.query.basis.toString();
    let duration: number = Number(req.query.duration) || 0;
    const response = {principal, ...Interest.compound(principal, {rate, rateBasis}, duration)};
    res.json(response);
});