var express = require('express');
var router = express.Router();
const pool = require('../../database');


router.get('/libre', async (req, res, next) => {
    const resul = await pool.query("SELECT * FROM `pro_jor_libre_c21` ORDER BY ID DESC LIMIT 30;");
    console.log(resul)
    let categoria = "Libre"
    let Liga = "Pro Champions League"
    let logo_liga = "logochampions.png"
    res.render('resul/resul', {resul,categoria,Liga,logo_liga});
});

router.get('/femenil', async (req, res, next) => {
    const resul = await pool.query("SELECT * FROM `pro_jor_femenil_A22` ORDER BY ID DESC LIMIT 30;");
    console.log(resul)
    let categoria = "femenil"
    let Liga = "Pro Champions League"
    let logo_liga = "logochampions.png"
    res.render('resul/resul', {resul,categoria,Liga,logo_liga});
});
router.get('/sub21', async (req, res, next) => {
    const resul = await pool.query("SELECT * FROM `pro_jor_sub21_A22` ORDER BY ID DESC LIMIT 30;");
    console.log(resul)
    let categoria = "Sub-21"
    let Liga = "Pro Champions League"
    let logo_liga = "logochampions.png"
    res.render('resul/resul', {resul,categoria,Liga,logo_liga});
});


module.exports = router;