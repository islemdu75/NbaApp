/**
 * Created by Quentin on 27/02/2017.
 */
var NBA = require("nba");
var data = {};

var Players = {
    onePlayer: function (req, res) {
        var curry = NBA.findPlayer('Stephen Curry');
        var curryInfos = NBA.stats.playerInfo({PlayerID : curry.playerId});

        curryInfos.then(function (result) {
            data = result;
            var city = data['commonPlayerInfo'][0].teamCity;
            var code = data['commonPlayerInfo'][0].teamCode;
            console.log(city+" "+code);
            res.render('player', {player : curry.fullName, city : city, code : code});
        });
    }
}
module.exports = Players;