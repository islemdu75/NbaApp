/**
 * Created by Quentin on 27/02/2017.
 */
/*Récupérer : teamName, w, l, confRank, teamConference*/
var NBA = require("nba");
var data = {};
var data2 = {};

var Teams = {
    allTeams: function (req, res) {
        var teamsTab = [];
        /*NBA.stats.playerStats({LeagueID: "00", PlayerOrTeam: "Team", GameScope: "Yesterday", StatType: "Traditional", PlayerScope: "All Players", Conference: "West"}).then(function (result) {
            for (var i=0; i < result['leagueDashPlayerStats'].length; i++){
                //console.log(result['leagueDashPlayerStats'][i].playerName);
                teamsTab[i] = result['leagueDashPlayerStats'][i].teamAbbreviation;
                //console.log(playersTab);
                console.log(result['leagueDashPlayerStats'][i].teamAbbreviation);
            }
            //console.log("New tab: "+playersTab);
            res.render('teams', {teams:  teamsTab})*/
        NBA.stats.homepageV2({SeasonType: "Regular Season", LeagueID: "00", PlayerOrTeam: "Team", GameScope: "Yesterday", StatType: "Traditional", PlayerScope: "All Players"}).then(function (result) {
            console.log(result['homePageStat1']);
        }).catch(function (error) {
            console.log(error);
        });

    },
    oneTeam: function (req, res) {
        var player = '';
        var curent_player = {};
        var current_player_infos = {};

        switch(player) {

            case 'Paul Millsap' :
                curent_player = NBA.findPlayer('Paul Millsap');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Isaiah Thomas' :
                curent_player = NBA.findPlayer('Isaiah Thomas');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Brook Lopez' :
                curent_player = NBA.findPlayer('Brook Lopez');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Nicolas Batum' :
                curent_player = NBA.findPlayer('Nicolas Batum');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Dwyane Wade' :
                curent_player = NBA.findPlayer('Dwayne Wade');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Lebron James' :
                curent_player = NBA.findPlayer('Lebron James');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Dirk Nowitzki' :
                curent_player = NBA.findPlayer('Dirk Nowitzki');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Nikola Jokic' :
                curent_player = NBA.findPlayer('Nikola Jokic');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Andre Drummond' :
                curent_player = NBA.findPlayer('Andre Drummond');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Klay Thompson' :
                curent_player = NBA.findPlayer('Klay Thompson');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'James Harden' :
                curent_player = NBA.findPlayer('James Harden');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Paul George' :
                curent_player = NBA.findPlayer('Paul George');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Chris Paul' :
                curent_player = NBA.findPlayer('Chris Paul');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Jordan Clarkson' :
                curent_player = NBA.findPlayer('Jordan Clarkson');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Mike Conley' :
                curent_player = NBA.findPlayer('Mike Conley');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Hassan Whiteside' :
                curent_player = NBA.findPlayer('Hassan Whiteside');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Giannis Antetokounmpo' :
                curent_player = NBA.findPlayer('Giannis Antetokounmpo');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Karl-Anthony Towns' :
                curent_player = NBA.findPlayer('Karl-Anthony Towns');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Anthony Davis' :
                curent_player = NBA.findPlayer('Anthony Davis');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Carmelo Anthony' :
                curent_player = NBA.findPlayer('Carmelo Anthony');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Russell Westbrook' :
                curent_player = NBA.findPlayer('Russell Westbrook');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Aaron Gordon' :
                curent_player = NBA.findPlayer('Aaron Gordon');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Joel Embiid' :
                curent_player = NBA.findPlayer('Joel Embiid');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Tyson Chandler' :
                curent_player = NBA.findPlayer('Tyson Chandler');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Damian Lillard' :
                curent_player = NBA.findPlayer('Damian Lillard');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Tyreke Evans' :
                curent_player = NBA.findPlayer('Tyreke Evans');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Kawhi Leonard' :
                curent_player = NBA.findPlayer('Kawhi Leonard');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'DeMar DeRozan' :
                curent_player = NBA.findPlayer('DeMar DeRozan');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'Rudy Gobert' :
                curent_player = NBA.findPlayer('Rudy Gobert');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            case 'John Wall' :
                curent_player = NBA.findPlayer('John Wall');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
                break;

            default:
                curent_player = NBA.findPlayer('Klay Thompson');
                current_player_infos = NBA.stats.playerInfo({PlayerID : curent_player.playerId});
        }
        current_player_infos.then(function (result) {
            data = result;
            var firstname = data['commonPlayerInfo'][0].firstName;
            var lastname = data['commonPlayerInfo'][0].lastName;
            var jersey = data['commonPlayerInfo'][0].jersey;
            var position = data['commonPlayerInfo'][0].position;
            var pts = data['playerHeadlineStats'][0].pts;
            var assists = data['playerHeadlineStats'][0].ast;
            var rebounds = data['playerHeadlineStats'][0].reb;
            var pie = data['playerHeadlineStats'][0].pie;

            var teamInfos = NBA.stats.teamInfoCommon({TeamID : data['commonPlayerInfo'][0].teamId});
            teamInfos.then(function (result2) {
                data2 = result2;
                console.log(result2);
                var teamName = data2['teamInfoCommon'][0].teamCity +" "+ data2['teamInfoCommon'][0].teamName;
                var wins = data2['teamInfoCommon'][0].w;
                var losses = data2['teamInfoCommon'][0].l;
                var confRank = data2['teamInfoCommon'][0].confRank;
                var teamConference = data2['teamInfoCommon'][0].teamConference;


                //console.log(result2);
                console.log(teamName);
                console.log("Wins: "+wins);
                console.log("Losses: "+losses);
                console.log("Conference rank: "+confRank);
                console.log("Team conference: "+teamConference);
                //res.render('team', {team : teamName, wins : wins, losses : losses, confRank : confRank, teamConference : teamConference});
                var jsonData = {
                    "playerStats": {
                        "firstname": firstname,
                        "lastname": lastname,
                        "jersey": jersey,
                        "position": position,
                        "pts": pts,
                        "assists": assists,
                        "rebounds": rebounds,
                        "pie": pie
                    },
                    "teamStats": {
                        "teamName": teamName,
                        "teamConference": teamConference,
                        "confRank": confRank,
                        "wins": wins,
                        "losses": losses

                    }
                }
                res.send(jsonData);

            });
        });

    }
}
module.exports = Teams;