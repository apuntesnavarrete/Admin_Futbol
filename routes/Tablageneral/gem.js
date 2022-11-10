var express = require('express');
var router = express.Router();
const pool = require('../../database');


  router.get('/mix', async(req, res, next)=> {
    const vistas = await pool.query("SELECT * FROM `g_general_mix_c22`");
    const categoria = 'Mixta C2022'
    const css = 'generalgem'
    const Liga = 'Liga Gemelas'

    
    const result = await pool.query("SELECT * FROM `g_jor_mix_c2022`");

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
        const vistas = await pool.query("SELECT * FROM `g_general_libre_c22`");
        const categoria = 'Libre C2022'
        const css = 'generalgem'
        const Liga = 'Liga Gemelas'
    
        
        const result = await pool.query("SELECT * FROM `g_jor_libre_c2022`");
    
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