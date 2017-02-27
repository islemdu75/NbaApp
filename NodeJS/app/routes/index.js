var express = require('express');
var router = express.Router();
var players = require('../controllers/Players');

if(players){console.log("Controller OK !");}
/* GET home page : Retourne la liste des équipes */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page : Retourne la liste des joueurs par équipe */
router.get('/teamID/players', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
/* GET home page : Retourne la liste des joueurs par équipe */
router.get('/teamID/players', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


/* GET home page : Retourne un joueur d'une équipe */
router.get('/player', players.onePlayer);

module.exports = router;
