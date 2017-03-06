/**
 * Created by Quentin on 27/02/2017.
 */
/*Récupérer : firstname, lastname, jersey, position, (teamCity+teamCode), pts, ast, reb, pie*/
var NBA = require("nba");
var data = {};

var Players = {
    allPlayers: function (req, res) {
        var playersTab = [];
        NBA.stats.playerStats({LeagueID: "00", PlayerOrTeam: "Team", GameScope: "Yesterday", StatType: "Traditional", PlayerScope: "All Players"}).then(function (result) {
            for (var i=0; i < result['leagueDashPlayerStats'].length; i++){
                //console.log(result['leagueDashPlayerStats'][i].playerName);
                playersTab[i] = result['leagueDashPlayerStats'][i].playerName;
                //console.log(playersTab);
                console.log(result['leagueDashPlayerStats'][i]);
            }
            //console.log("New tab: "+playersTab);
            res.render('players', {players:  playersTab});
        }).catch(function (error) {
            console.log(error);
        });
    },
    allFranchisePlayers: function (req, res) {
        var playersTab = [];
        var jsonPlayers = {};
        var id = 0;
        var franchisePlayersTab = ['Paul Millsap', 'Isaiah Thomas', 'Brook Lopez',
            'Nicolas Batum', 'Dwyane Wade', 'Lebron James', 'Dirk Nowitzki',
            'Nikola Jokic', 'Andre Drummond', 'Klay Thompson', 'James Harden',
            'Paul George', 'Chris Paul', 'Jordan Clarkson', 'Mike Conley',
            'Hassan Whiteside', 'Giannis Antetokounmpo', 'Karl-Anthony Towns', 'Anthony Davis',
            'Carmelo Anthony', 'Russell Westbrook', 'Aaron Gordon', 'Joel Embiid',
            'Tyson Chandler', 'Damian Lillard', 'Tyreke Evans', 'Kawhi Leonard',
            'DeMar DeRozan', 'Rudy Gobert', 'John Wall'];

        for (var i=0; i < franchisePlayersTab.length; i++){
            playersTab[i] = franchisePlayersTab[i];
            //jsonPlayers = {"index" : i, "player" : franchisePlayersTab[i]};
            //console.log(jsonPlayers);
            //console.log(playersTab);
            id = i;
        }
        for (var j=0; j < playersTab.length; j++){
            jsonPlayers = {"id" : j, "name" : playersTab[j]};
        }
        //console.log(JSON.stringify(playersTab));
        console.log(jsonPlayers);
        //res.send('{"players":'+JSON.stringify(playersTab)+'}');
        res.send('{"players": ['+JSON.stringify(jsonPlayers)+']}');
        //res.render('franchisePlayers', {franchisePlayers: playersTab});
    },
    onePlayer: function (req, res) {
        var player = {};
        var playerInfos = {};
        var franchisePlayersTab = ['Paul Millsap', 'Isaiah Thomas', 'Brook Lopez',
            'Nicolas Batum', 'Dwyane Wade', 'Lebron James', 'Dirk Nowitzki',
            'Nikola Jokic', 'Andre Drummond', 'Klay Thompson', 'James Harden',
            'Paul George', 'Chris Paul', 'Jordan Clarkson', 'Mike Conley',
            'Hassan Whiteside', 'Giannis Antetokounmpo', 'Karl-Anthony Towns', 'Anthony Davis',
            'Carmelo Anthony', 'Russell Westbrook', 'Aaron Gordon', 'Joel Embiid',
            'Tyson Chandler', 'Damian Lillard', 'Tyreke Evans', 'Kawhi Leonard',
            'DeMar DeRozan', 'Rudy Gobert', 'John Wall'];
        var jsonPlayers = {};

        for (var i=0; i < franchisePlayersTab.length; i++){
            player = NBA.findPlayer(franchisePlayersTab[i]);
            playerInfos = NBA.stats.playerInfo({PlayerID : player.playerId});
            req.params.id = i;
            jsonPlayers = {"index" : i, "player" : franchisePlayersTab[i]};
            console.log(jsonPlayers);
        }

        playerInfos.then(function (result) {
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
            /*res.render('player'+ req.params.id, {player : player.fullName, name : name, firstname : firstname, lastname : lastname, jersey : jersey, position : position,
                pts : pts, assists : assists, rebounds : rebounds, pie : pie});*/
            res.send();
        });
    }
}
module.exports = Players;