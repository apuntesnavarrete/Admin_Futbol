var express = require('express');
var router = express.Router();
const pool = require('../../database');


router.get('/', async (req, res, next) => {
    const resul = await pool.query("SELECT * FROM `ed_jor_libre_a22` ORDER BY ID DESC LIMIT 30;");
    console.log(resul)
    res.render('resul/resul', {resul});
});


module.exports = router;