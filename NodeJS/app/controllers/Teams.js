/**
 * Created by Quentin on 27/02/2017.
 */
var NBA = require("nba");
var data = {};
var data2 = {};
var Teams = {
    oneTeam: function (req, res) {
        var curry = NBA.findPlayer('Stephen Curry');
        var curryInfos = NBA.stats.playerInfo({PlayerID : curry.playerId});

        curryInfos.then(function (result) {
            data = result;
            var teamInfos = NBA.stats.teamInfoCommon({TeamID : data['commonPlayerInfo'][0].teamId});
            teamInfos.then(function (result) {
                data2 = result;
                data2 = result;
                var name = data2['teamInfoCommon'][0].teamCity +" "+ data2['teamInfoCommon'][0].teamName;
                console.log(name);
                //console.log(result);
                res.render('teams', {teams : name});
                console.log(result);
            });
        });

    }
}
module.exports = Teams;