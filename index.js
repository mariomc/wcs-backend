const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res, next) => {
    const rawFile = fs.readFileSync('./example.json');
    const file = JSON.parse(rawFile);
    res.json(file);
});

app.get('/inserir-aluno/:nome', (req, res, next) => {
    const rawFile = fs.readFileSync('./example.json');
    const file = JSON.parse(rawFile);
    file.alunosPresentes.push("Mário");
    fs.writeFileSync('./example.json', JSON.stringify(file));
    const rawFile2 = fs.readFileSync('./example.json');
    console.log(rawFile2);
    const file2 = JSON.parse(rawFile2);

    res.json(file2);
});

app.listen(3001);