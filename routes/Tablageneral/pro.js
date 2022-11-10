var express = require('express');
var router = express.Router();
const pool = require('../../database');



router.get('/libre', async(req, res, next)=> {
    const vistas = await pool.query("SELECT * FROM `pro_general_libre_A22`");
    const categoria = 'Libre A2022'
  
    res.render('tablas/general.ejs',{vistas,categoria})
  });


  router.get('/femenil', async(req, res, next)=> {
    const vistas = await pool.query("SELECT * FROM `pro_general_femenil_c22`");
    const categoria = 'Femenil C2022'
    const css = 'generalpro'
    const Liga = 'Pro Champions'

    
    const result = await pool.query("SELECT * FROM `pro_jor_femenil_c22`");

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
    
    
        
    
      
        
        res.render('tablas/pruebageneral.ejs',{vistas,categoria,result,vistas_ganados,vistas_Perdidos,vistas_Perdidospenales,vistas_ganadospenales,css,Liga})
      });

  router.get('/Sub21', async(req, res, next)=> {
    const vistas = await pool.query("SELECT * FROM `pro_general_sub22_c22`");
    const categoria = 'Sub-22 A2022'
  
    res.render('tablas/general.ejs',{vistas,categoria})
  });

  router.get('/mix', async(req, res, next)=> {
    const vistas = await pool.query("SELECT * FROM `pro_general_mix_c22`");
    const categoria = 'Mixto C2022'
    const css = 'generalpro'
    const Liga = 'Pro Champions'

    
    const result = await pool.query("SELECT * FROM `pro_libre_c22_jor_c2022`");

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
    
    
        
    
      
        
        res.render('tablas/pruebageneral.ejs',{vistas,categoria,result,vistas_ganados,vistas_Perdidos,vistas_Perdidospenales,vistas_ganadospenales,css,Liga})
      });

  router.get('/libre', async(req, res, next)=> {
    const vistas = await pool.query("SELECT * FROM `pro_general_libre_A22`");
    const categoria = 'Libre A2022'
  
    res.render('tablas/general.ejs',{vistas,categoria})
  });


  router.get('/sub18', async(req, res, next)=> {
    const vistas = await pool.query("SELECT * FROM `pro_general_sub18_c22`");
    const categoria = 'Sub-18 C2022'
    const css = 'generalpro'
    const Liga = 'Pro Champions'

    
    const result = await pool.query("SELECT * FROM `pro_jor_sub18_c22`");

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
    
    
        res.render('tablas/pruebageneral.ejs',{vistas,categoria,result,vistas_ganados,vistas_Perdidos,vistas_Perdidospenales,vistas_ganadospenales,css,Liga})
      });


module.exports = router;