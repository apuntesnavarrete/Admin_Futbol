var express = require('express');
var router = express.Router();
const pool = require('../../database');



router.get('/mixta', async(req, res, next)=> {
  
  const plantel = await pool.query("SELECT * FROM `futbolce_zon58`.`pro_planteles_mix_a22_v` ORDER BY `Equipo` DESC");

  res.render('planteles/registro',{plantel});
    });



module.exports = router;