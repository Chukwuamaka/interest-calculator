import express from 'express';
import * as Interest from './modules/interest.js';
const server = express();
const port = process.env.PORT || 3000;
const hostname = 'localhost';
server.listen(port, () => console.log(`Server is running on ${hostname}:${port}`));
server.use(express.static('public'));
server.use(express.json({ limit: '1mb' }));
server.get('/simple', (req, res) => {
    let principal = Number(req.query.amount);
    let rate = Number(req.query.rate);
    let rateBasis = req.query.basis.toString();
    let duration = Number(req.query.duration);
    const response = Object.assign({ principal }, Interest.simple(principal, { rate, rateBasis }, duration));
    res.json(response);
});
server.get('/compound', (req, res) => {
    let principal = Number(req.query.amount);
    let rate = Number(req.query.rate);
    let rateBasis = req.query.basis.toString();
    let duration = Number(req.query.duration);
    const response = Object.assign({ principal }, Interest.compound(principal, { rate, rateBasis }, duration));
    res.json(response);
});
