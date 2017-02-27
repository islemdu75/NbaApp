/**
 * Created by Quentin on 27/02/2017.
 */
var NBA = require("nba");


var Players = {
    onePlayer: function (req, res) {
        var curry = NBA.findPlayer('Stephen Curry');
        var curryInfos = NBA.stats.playerInfo({PlayerID : curry.playerId});
        console.log(NBA.stats.playerInfo({PlayerID : curry.playerId}).then(console.log));

        res.render('player', {player : curry.fullName});

    }
}
module.exports = Players;