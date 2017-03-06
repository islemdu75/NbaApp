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
/* GET home page : Retourne tous les joueurs de la nba */
router.get('/players', players.allPlayers);
/* GET home page : Retourne toutes les stars de chaque équipe */
router.get('/franchisePlayers', players.allFranchisePlayers);
/* GET home page : Retourne un joueur d'une équipe */
router.get('/player/:id', players.onePlayer);
/* GET home page : Retourne toutes les équipes */
router.get('/teams', teams.allTeams);
/* GET home page : Retourne une équipe */
router.get('/team/:id', teams.oneTeam);

module.exports = router;
