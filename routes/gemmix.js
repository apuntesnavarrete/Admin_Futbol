var express = require('express');
var router = express.Router();
const pool = require('../database');

/* GET users listing. */
/* GET home page. */
router.get('/', async (req, res, next) => {
  const vistas = await pool.query("SELECT * FROM `G_general_mixto_I21`");

console.log(vistas)
let categoria = "gmix";
console.log(categoria)

  res.render('index', {vistas:vistas,categoria});

});

router.post('/', async (req, res, next) => {
  let categoria = "gmix";
  var {equipo} = req.body
  var {equipo_2} = req.body
console.log(equipo)
console.log(equipo_2)
const plantel_1 = await pool.query("SELECT * FROM `G_general_mixto_I21` WHERE Equipo = ?",[equipo]);
const plantel_2 = await pool.query("SELECT * FROM `G_general_mixto_I21` WHERE Equipo = ?",[equipo_2]);

// const plantel_1 = await pool.query("Select * From `ed_planteles_libre_a22` WHERE Nombre_Equipo = ?" , [equipo])
// const plantel_2 = await pool.query("Select * From `ed_planteles_libre_a22` WHERE Nombre_Equipo = ?" , [equipo_2])

 console.log(plantel_1)
 console.log(plantel_2)

  res.render('gpost', {categoria,equipo,equipo_2,plantel_1,plantel_2});
});

router.post('/actgmix' , async (req,res,next)=>{
// let {id,Goles,PJ} = req.body;
// let {id_2,Goles_2,PJ_2} = req.body;
let {Equipo,Equipo_2,GF,GC,Jornada,Fecha,Puntos,Puntos_2} = req.body;

//Construccion de Resultados

let Resul_1 ={Jornada,Equipo:Equipo,GF,GC,Puntos:Puntos,Rival:Equipo_2,Fecha}
let Resul_2 ={Jornada,Equipo:Equipo_2,GF:GC,GC:GF,Puntos:Puntos_2,Rival:Equipo,Fecha}

/*
let Resul_2 ={Jornada,Equipo:Equipo_2,GF:GC,GC:GF,Puntos:Puntos_2,Rival:Equipo,Fecha}
*/
//Construccion de jugadores
//Primer Equipo

// let  jugador_0 = {Jornada,Equipo,Rival:Equipo_2 ,Fecha,id : id[0],Goles : Goles[0],PJ : PJ[0]}
// let  jugador_1 = {Jornada,Equipo,Rival:Equipo_2 ,Fecha,id : id[1],Goles : Goles[1],PJ : PJ[1]}
// let  jugador_2 = {Jornada,Equipo,Rival:Equipo_2 ,Fecha,id : id[2],Goles : Goles[2],PJ : PJ[2]}
// let  jugador_3 = {Jornada,Equipo,Rival:Equipo_2 ,Fecha,id : id[3],Goles : Goles[3],PJ : PJ[3]}
// let  jugador_4 = {Jornada,Equipo,Rival:Equipo_2 ,Fecha,id : id[4],Goles : Goles[4],PJ : PJ[4]}
// let  jugador_5 = {Jornada,Equipo,Rival:Equipo_2 ,Fecha,id : id[5],Goles : Goles[5],PJ : PJ[5]}
// let  jugador_6 = {Jornada,Equipo,Rival:Equipo_2 ,Fecha,id : id[6],Goles : Goles[6],PJ : PJ[6]}
// let  jugador_7 = {Jornada,Equipo,Rival:Equipo_2 ,Fecha,id : id[7],Goles : Goles[7],PJ : PJ[7]}
// let  jugador_8 = {Jornada,Equipo,Rival:Equipo_2 ,Fecha,id : id[8],Goles : Goles[8],PJ : PJ[8]}
// let  jugador_9 = {Jornada,Equipo,Rival:Equipo_2 ,Fecha,id : id[9],Goles : Goles[9],PJ : PJ[9]}
// let  jugador_10 = {Jornada,Equipo,Rival:Equipo_2 ,Fecha,id : id[10],Goles : Goles[10],PJ : PJ[10]}
// let  jugador_11 = {Jornada,Equipo,Rival:Equipo_2 ,Fecha,id : id[11],Goles : Goles[11],PJ : PJ[11]}
// let  jugador_12 = {Jornada,Equipo,Rival:Equipo_2 ,Fecha,id : id[12],Goles : Goles[12],PJ : PJ[12]}
// let  jugador_13 = {Jornada,Equipo,Rival:Equipo_2 ,Fecha,id : id[13],Goles : Goles[13],PJ : PJ[13]}
// let  jugador_14 = {Jornada,Equipo,Rival:Equipo_2 ,Fecha,id : id[14],Goles : Goles[14],PJ : PJ[14]}

//Construccion de jugadores
//Segundo Equipo

// let jugador2_0 = {Jornada,Equipo:Equipo_2,Rival:Equipo,Fecha,id:id_2[0],Goles:Goles_2[0],PJ:PJ_2[0]}
// let jugador2_1 = {Jornada,Equipo:Equipo_2,Rival:Equipo,Fecha,id:id_2[1],Goles:Goles_2[1],PJ:PJ_2[1]}
// let jugador2_2 = {Jornada,Equipo:Equipo_2,Rival:Equipo,Fecha,id:id_2[2],Goles:Goles_2[2],PJ:PJ_2[2]}
// let jugador2_3 = {Jornada,Equipo:Equipo_2,Rival:Equipo,Fecha,id:id_2[3],Goles:Goles_2[3],PJ:PJ_2[3]}
// let jugador2_4 = {Jornada,Equipo:Equipo_2,Rival:Equipo,Fecha,id:id_2[4],Goles:Goles_2[4],PJ:PJ_2[4]}
// let jugador2_5 = {Jornada,Equipo:Equipo_2,Rival:Equipo,Fecha,id:id_2[5],Goles:Goles_2[5],PJ:PJ_2[5]}
// let jugador2_6 = {Jornada,Equipo:Equipo_2,Rival:Equipo,Fecha,id:id_2[6],Goles:Goles_2[6],PJ:PJ_2[6]}
// let jugador2_7 = {Jornada,Equipo:Equipo_2,Rival:Equipo,Fecha,id:id_2[7],Goles:Goles_2[7],PJ:PJ_2[7]}
// let jugador2_8 = {Jornada,Equipo:Equipo_2,Rival:Equipo,Fecha,id:id_2[8],Goles:Goles_2[8],PJ:PJ_2[8]}
// let jugador2_9 = {Jornada,Equipo:Equipo_2,Rival:Equipo,Fecha,id:id_2[9],Goles:Goles_2[9],PJ:PJ_2[9]}
// let jugador2_10 = {Jornada,Equipo:Equipo_2,Rival:Equipo,Fecha,id:id_2[10],Goles:Goles_2[10],PJ:PJ_2[10]}
// let jugador2_11 = {Jornada,Equipo:Equipo_2,Rival:Equipo,Fecha,id:id_2[11],Goles:Goles_2[11],PJ:PJ_2[11]}
// let jugador2_12 = {Jornada,Equipo:Equipo_2,Rival:Equipo,Fecha,id:id_2[12],Goles:Goles_2[12],PJ:PJ_2[12]}
// let jugador2_13 = {Jornada,Equipo:Equipo_2,Rival:Equipo,Fecha,id:id_2[13],Goles:Goles_2[13],PJ:PJ_2[13]}
// let jugador2_14 = {Jornada,Equipo:Equipo_2,Rival:Equipo,Fecha,id:id_2[14],Goles:Goles_2[14],PJ:PJ_2[14]}




console.log(Resul_1)






//Insertar goles y partidos de jugadores
//Primer Equipo

// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador_0])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador_1])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador_2])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador_3])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador_4])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador_5])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador_6])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador_7])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador_8])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador_9])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador_10])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador_11])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador_12])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador_13])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador_14])
//Segundo Equipo
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador2_0])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador2_1])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador2_2])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador2_3])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador2_4])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador2_5])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador2_6])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador2_7])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador2_8])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador2_9])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador2_10])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador2_11])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador2_12])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador2_13])
// await pool.query("INSERT INTO Goleo_ED_feme_c21 set ?",[jugador2_14])
//Termina Insertar goles y partidos de jugadores
await pool.query("INSERT INTO G_mixto_c21 set ?",[Resul_1])
await pool.query("INSERT INTO G_mixto_c21 set ?",[Resul_2])



//Insertar tabla general


res.redirect('/')
})

module.exports = router;


