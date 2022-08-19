var express = require('express');
var router = express.Router();
const pool = require('../../database');


router.get('/libre', async (req, res, next) => {
    const resul = await pool.query("SELECT * FROM `pro_jor_libre_a22` ORDER BY ID DESC LIMIT 30;");
    console.log(resul)
    let categoria = "Libre"
    let Liga = "Pro Champions League"
    let logo_liga = "logochampions.png"
    let fondo = 'url("/images/fondochampions.jpg")';
    let color = 'rgb(197 245 141)'
    let jornada = "Semana"

    res.render('resul/resul', {resul,categoria,Liga,logo_liga,fondo,color,jornada});
});

router.get('/femenil', async (req, res, next) => {
    const resul = await pool.query("SELECT * FROM `pro_jor_femenil_A22` ORDER BY ID DESC LIMIT 30;");
    console.log(resul)
    let categoria = "femenil"
    let Liga = "Pro Champions League"
    let logo_liga = "logochampions.png"
    let fondo = 'url("/images/fondochampions.jpg")';
    let color = 'rgb(223 114 199)'
    let jornada = "Semana"

    res.render('resul/resul', {resul,categoria,Liga,logo_liga,fondo,color,jornada});
});
router.get('/sub21', async (req, res, next) => {
    const resul = await pool.query("SELECT * FROM `pro_jor_sub22_c22` ORDER BY ID DESC LIMIT 30;");
    console.log(resul)
    let categoria = "Sub-21"
    let Liga = "Pro Champions League"
    let logo_liga = "logochampions.png"
    let fondo = 'url("/images/fondochampions.jpg")';
    let color = 'rgb(233 202 107)'
    let jornada = "Semana"

    res.render('resul/resul', {resul,categoria,Liga,logo_liga,fondo,color,jornada});
});

router.get('/mixto', async (req, res, next) => {
    const resul = await pool.query("SELECT * FROM `pro_jor_mix_A22` ORDER BY ID DESC LIMIT 30;");
    console.log(resul)
    let categoria = "Mixta"
    let Liga = "Pro Champions League"
    let logo_liga = "logochampions.png"
    let fondo = 'url("/images/fondochampions.jpg")';
    let color = 'rgb(213 189 255)'
    let jornada = "Semana"

    res.render('resul/resul', {resul,categoria,Liga,logo_liga,fondo,color,jornada});
});

module.exports = router;