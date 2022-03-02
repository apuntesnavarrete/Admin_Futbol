var express = require('express');
var router = express.Router();

router.get('/', async (req, res, next) => {
  res.send("Hacer el menu aqui")
});

module.exports = router;
