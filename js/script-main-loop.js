// main game loop for LOP

function gameloop(number_players, initial_coins) {
    console.log("Game Started");
    var player = initial_coins;
    while (player > 0) {
        player -= 11;
        console.log(player);
    }
    console.log("Game Ended");
}

//run gameloop
var players = 3; 
var player_coins = 100;

gameloop(players,player_coins);


