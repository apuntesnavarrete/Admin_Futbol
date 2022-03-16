var express = require('express');
var router = express.Router();
const pool = require('../../database');


router.get('/', async (req, res, next) => {
    const resul = await pool.query("SELECT * FROM `ed_jor_libre_a22` ORDER BY ID DESC LIMIT 30;");
    console.log(resul)
    let categoria = "Femenil"
    let Liga = "Pro Champions League"
    let logo_liga = "logochampions.png"
    res.render('resul/resul', {resul,categoria,Liga,logo_liga});
});


module.exports = router;