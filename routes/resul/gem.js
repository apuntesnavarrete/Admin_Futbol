var express = require('express');
var router = express.Router();
const pool = require('../../database');

router.get('/sub19', async (req, res, next) => {
    const resul = await pool.query("SELECT * FROM `gem_jor_sub19_A22` ORDER BY ID DESC LIMIT 30;");
    console.log(resul)
    let categoria = "Sub-19"
    let Liga = "Liga Gemelas"
    let logo_liga = "logogemelas.png"
    let fondo = 'url("/images/fondogemelas.png")';
    let color = 'rgb(233 202 107)'
    let jornada = "Jornada"
    res.render('resul/resul', {resul,categoria,Liga,logo_liga,fondo,color,jornada});
});


router.get('/sub21', async (req, res, next) => {
    const resul = await pool.query("SELECT * FROM `pro_jor_sub21_A22` ORDER BY ID DESC LIMIT 30;");
    console.log(resul)
    let categoria = "Sub-21"
    let Liga = "Pro Champions League"
    let logo_liga = "logochampions.png"
    let fondo = 'url("/images/fondochampions.jpg")';
    let color = 'rgb(233 202 107)'

    res.render('resul/resul', {resul,categoria,Liga,logo_liga,fondo,color});
});

router.get('/mixto', async (req, res, next) => {
    const resul = await pool.query("SELECT * FROM `pro_jor_mix_A22` ORDER BY ID DESC LIMIT 30;");
    console.log(resul)
    let categoria = "Mixta"
    let Liga = "Pro Champions League"
    let logo_liga = "logochampions.png"
    let fondo = 'url("/images/fondochampions.jpg")';
    let color = 'rgb(213 189 255)'

    res.render('resul/resul', {resul,categoria,Liga,logo_liga,fondo,color});
});

module.exports = router;