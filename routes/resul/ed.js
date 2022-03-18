var express = require('express');
var router = express.Router();
const pool = require('../../database');


router.get('/libre', async (req, res, next) => {
    const resul = await pool.query("SELECT * FROM `ed_jor_libre_a22` ORDER BY ID DESC LIMIT 30;");
    console.log(resul)
    let categoria = "Libre"
    let Liga = "Liga ED"
    let logo_liga = "logochampions.png"
    let fondo = 'url("/images/fondoligaed.png")';
    let color = 'rgb(76, 175, 80)'
    res.render('resul/resul', {resul,categoria,Liga,logo_liga,fondo,color});
});

router.get('/femenil', async (req, res, next) => {
    const resul = await pool.query("SELECT * FROM `ed_jor_feme_c21` ORDER BY ID DESC LIMIT 30;");
    console.log(resul)
    let categoria = "femenil"
    let Liga = "Liga ED"
    let logo_liga = "logochampions.png"
    res.render('resul/resul', {resul,categoria,Liga,logo_liga});
});
router.get('/Mixta', async (req, res, next) => {
    const resul = await pool.query("SELECT * FROM `ed_jor_mix_c21` ORDER BY ID DESC LIMIT 30;");
    console.log(resul)
    let categoria = "Mixto"
    let Liga = "Liga ED"
    let logo_liga = "logochampions.png"
    res.render('resul/resul', {resul,categoria,Liga,logo_liga});
});


module.exports = router;