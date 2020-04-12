// main game loop for LOP

function gameloop(number_players, initial_coins) {
    console.log("Game Started");
    var player = initial_coins;
    while (player > 0) {
        player -= 11;
        console.log(player);
    }
    console.log("Game Ended");
    if (number_players === -1 && initial_coins === -1 ) {
        return " -1 : -1 ";
    }
    return "Game Ended";
}

//run gameloop
var players = 2; 
var player_coins = 9;

gameloop(players,player_coins);