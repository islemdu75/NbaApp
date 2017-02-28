var express = require('express');
var router = express.Router();
var players = require('../controllers/Players');
var teams = require('../controllers/Teams');

if(players){console.log("Controller 'players' OK !");}
if(teams){console.log("Controller 'teams' OK !");}
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

/* GET home page : Retourne une équipe */
router.get('/teams', teams.allTeams);

/* GET home page : Retourne une équipe */
router.get('/team', teams.oneTeam);

module.exports = router;
