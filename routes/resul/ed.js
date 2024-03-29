var express = require('express');
var router = express.Router();
const pool = require('../../database');

router.get('/Mixta', async (req, res, next) => {
    const resul = await pool.query("SELECT * FROM `ed_jor_mix_A22` ORDER BY ID DESC LIMIT 30;");
    console.log(resul)
    let categoria = "Mixta"
    let Liga = "Liga ED"
    let logo_liga = "logoed.png"
    let fondo = 'url("/images/fondoligaed.png")';
    let color = 'rgb(223 114 199)'
    let jornada = "Jornada"
    res.render('resul/resul', {resul,categoria,Liga,logo_liga,fondo,color,jornada});
});


router.get('/Libre', async (req, res, next) => {
    const resul = await pool.query("SELECT * FROM `ed_jor_libre_c2022` ORDER BY ID DESC LIMIT 30;");
    console.log(resul)
    let categoria = "Libre"
    let Liga = "Liga ED"
    let logo_liga = "logoed.png"
    let fondo = 'url("/images/fondoligaed.jpg")';
    let color = 'rgb(197 245 141)'
    let jornada = "Jornada"

    res.render('resul/resul', {resul,categoria,Liga,logo_liga,fondo,color,jornada});
});

router.get('/Femenil', async (req, res, next) => {
    const resul = await pool.query("SELECT * FROM `ed_jor_fem_c22` ORDER BY ID DESC LIMIT 30;");
    console.log(resul)
    let categoria = "Femenil"
    let Liga = "Liga ED"
    let logo_liga = "logoed.png"
    let fondo = 'url("/images/fondoligaed.png")';
    let color = 'rgb(223 114 199)'
    let jornada = "Jornada"

    res.render('resul/resul', {resul,categoria,Liga,logo_liga,fondo,color,jornada});
});

module.exports = router;