var express = require('express');
var router = express.Router();
const pool = require('../../database');



router.get('/libre', async(req, res, next)=> {
    const vistas = await pool.query("SELECT * FROM `PRO_general_libre_c21`");
    const categoria = 'Libre C2021'
  
    res.render('tablas/general.ejs',{vistas,categoria})
  });


  router.get('/femenil', async(req, res, next)=> {
    const vistas = await pool.query("SELECT * FROM `PRO_general_feme_a22`");
    const categoria = 'Femenil A2022'
  
    res.render('tablas/general.ejs',{vistas,categoria})
  });
  router.get('/Sub21', async(req, res, next)=> {
    const vistas = await pool.query("SELECT * FROM `pro_general_sub21_a22`");
    const categoria = 'Sub-21 A2022'
  
    res.render('tablas/general.ejs',{vistas,categoria})
  });

  router.get('/mixta', async(req, res, next)=> {
    const vistas = await pool.query("SELECT * FROM `Pro_general_mixto_a22`");
    const categoria = 'Mixta A2022'
  
    res.render('tablas/general.ejs',{vistas,categoria})
  });

module.exports = router;