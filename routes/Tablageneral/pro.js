var express = require('express');
var router = express.Router();
const pool = require('../../database');



router.get('/libre', async(req, res, next)=> {
    const vistas = await pool.query("SELECT * FROM `PRO_general_libre_c21`");
    const categoria = 'Libre C2021'
    const goleo = {}
    const jornadas = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_a20` ORDER BY `Jornada` DESC");
    const Equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_a20` ORDER BY `Equipo` DESC , `Jornada` DESC ");
  
    res.render('tablas/general.ejs',{vistas,categoria,goleo,jornadas,Equipos})
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
    const resul = await pool.query("SELECT * FROM `pro_jor_sub21_A22` ORDER BY ID DESC LIMIT 30;");
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