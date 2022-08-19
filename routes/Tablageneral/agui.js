var express = require('express');
var router = express.Router();
const pool = require('../../database');



router.get('/libre', async(req, res, next)=> {
    const vistas = await pool.query("SELECT * FROM `Agui_general_sub22_c22`");
    const categoria = 'Sub-22 C2022'
  
    res.render('tablas/generalagui.ejs',{vistas,categoria})
  });

  router.get('/practice', async(req, res, next)=> {
    const vistas = await pool.query("SELECT * FROM `Agui_general_sub22_c22`");

    const result = await pool.query("SELECT * FROM `agui_jor_sub22_c22`");

//Inicializamos variables
    vistas_ganados = []
    vistas_Perdidos = []
    vistas_ganadospenales = []
    vistas_Perdidospenales = []

  //Aislamos los ids de equipos
const Equipos = vistas.map((item) =>{
  return item.ID
})
 console.log(Equipos)

Equipos.forEach(index => {
  
  console.log("Index de la tabla general")
  console.log(vistas[0])


  console.log(index)
 //Filtramo el equipo  

 const filteritems = result.filter((item)=>{
  return item.Equipo == index
})

 //Filtramos

 const filterpg = filteritems.filter((item)=>{
  return item.Puntos == 3
})

const filterppp = filteritems.filter((item)=>{
  return item.Puntos == 1
})

const filterpgp = filteritems.filter((item)=>{
  return item.Puntos == 2
})
const filterpp = filteritems.filter((item)=>{
  return item.Puntos == 0
})

//contamos   

pg = filterpg.length
pgp = filterpgp.length
ppp = filterppp.length
pp = filterpp.length

//Creamos un array para ganados perdimos etc

vistas_ganados.splice(0 , 0 , pg); 
vistas_Perdidos.splice(0 , 0 , pp); 
vistas_Perdidospenales.splice(0 , 0 , ppp); 
vistas_ganadospenales.splice(0 , 0 , pgp); 



});

vistas_ganados = vistas_ganados.reverse()
vistas_Perdidos = vistas_Perdidos.reverse()
vistas_Perdidospenales = vistas_Perdidospenales.reverse()
vistas_ganadospenales = vistas_ganadospenales.reverse()


    

    const categoria = 'Practice'
  
    
    res.render('tablas/pruebageneral.ejs',{vistas,categoria,result,vistas_ganados,vistas_Perdidos,vistas_Perdidospenales,vistas_ganadospenales})
  });



  router.get('/femenil', async(req, res, next)=> {
    const vistas = await pool.query("SELECT * FROM `PRO_general_feme_a22`");
    const categoria = 'Femenil A2022'
  
    res.render('tablas/generalagui.ejs',{vistas,categoria})
  });
  router.get('/Sub21', async(req, res, next)=> {
    const vistas = await pool.query("SELECT * FROM `pro_general_sub22_c22`");
    const categoria = 'Sub-22 A2022'
  
    res.render('tablas/generalagui.ejs',{vistas,categoria})
  });


 


  router.get('/mixta', async(req, res, next)=> {
    const vistas = await pool.query("SELECT * FROM `Pro_general_mixto_a22`");
    const categoria = 'Mixta A2022'
  
    res.render('tablas/generalagui.ejs',{vistas,categoria})
  });

module.exports = router;