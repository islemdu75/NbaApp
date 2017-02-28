/**
 * Created by Quentin on 27/02/2017.
 */
/*Récupérer : firstname, lastname, jersey, position, (teamCity+teamCode), pts, ast, reb, pie*/
var NBA = require("nba");
var data = {};

var Players = {
    allPlayers: function (req, res) {

    },
    onePlayer: function (req, res) {
        var curry = NBA.findPlayer('DeMar DeRozan');
        var curryInfos = NBA.stats.playerInfo({PlayerID : curry.playerId});

        curryInfos.then(function (result) {
            data = result;
            var city = data['commonPlayerInfo'][0].teamCity;
            var code = data['commonPlayerInfo'][0].teamCode;
            var name = city+" "+code;
            var firstname = data['commonPlayerInfo'][0].firstName;
            var lastname = data['commonPlayerInfo'][0].lastName;
            var jersey = data['commonPlayerInfo'][0].jersey;
            var position = data['commonPlayerInfo'][0].position;
            var pts = data['playerHeadlineStats'][0].pts;
            var assists = data['playerHeadlineStats'][0].ast;
            var rebounds = data['playerHeadlineStats'][0].reb;
            var pie = data['playerHeadlineStats'][0].pie;

            console.log(result);
            console.log(data['playerHeadlineStats'][0]);
            console.log("Team name: "+name);
            console.log("Firstname: "+firstname);
            console.log("lastname: "+lastname);
            console.log("jersey: "+jersey);
            console.log("position: "+position);
            console.log("pts: "+pts);
            console.log("assists: "+assists);
            console.log("rebounds: "+rebounds);
            console.log("pie: "+pie);
            res.render('player', {player : curry.fullName, name : name, firstname : firstname, lastname : lastname, jersey : jersey, position : position,
                pts : pts, assists : assists, rebounds : rebounds, pie : pie});
        });
    }
}
module.exports = Players;