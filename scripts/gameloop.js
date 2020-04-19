// main game loop for LOP
var carddeck = [];
var sorteddeck = [];
var numplayers = 4;
var tokensperplayer = 60;
var discardcard = "";

var players = [
    {playernum: "1", playerName="ME", pot:tokensperplaye, card1="", card2="" , card2="", plusrating ="10", otherrating="20"},
    {playernum: "2", playerName="Fred", pot:tokensperplaye, card1="", card2="" , card2="", plusrating ="15", otherrating="17"},
    {playernum: "3", playerName="John", pot:tokensperplaye, card1="", card2="" , card2="", plusrating ="20", otherrating="14"},
    {playernum: "4", playerName="Robert", pot:tokensperplaye, card1="", card2="" , card2="", plusrating ="25", otherrating="11"},
    {playernum: "5", playerName="Liz", pot:tokensperplaye, card1="", card2="" , card2="", plusrating ="30", otherrating="18"},
    {playernum: "6", playerName="Nat", pot:tokensperplaye, card1="", card2="" , card2="", plusrating ="40", otherrating="5"}
]
var dealer = 2;
var playernames  = ["Me", "Jack", "Fred", "Joe", "Steve", "Willie"];
//change var's to game object
//player object
//players array

var randNumArr=[24, 40, 45, 51, 16, 4, 16, 47, 37, 50, 32, 26, 29, 36, 2, 21, 7, 3, 1, 23, 4, 32, 42, 4, 25, 46, 50, 2, 31, 45, 34, 42, 22, 5, 46, 50, 10, 5, 51, 18, 49, 9, 51, 4, 5, 34, 4, 40, 50, 34, 31, 11, 13, 4, 41, 19, 17, 48, 35, 21, 47, 14, 14, 39, 30, 8, 4, 4, 25, 13, 49, 18, 15, 27, 44, 33, 45, 18, 31, 47, 45, 14, 35, 6, 28, 45, 34, 12, 9, 33, 33, 23, 48, 20, 4, 23, 4, 25, 14, 4, 32, 33, 29, 34, 1, 0, 1, 6, 20, 44, 33, 34, 36, 41, 2, 8, 1, 47, 15, 41, 4, 18, 45, 8 ];
var randNumCount = -1;
var randRange = -1;

function getRndInteger(x) {
    if (x <= 0) {
        if (randNumCount >= 121) {
            randNumCount = -1;
        }
        randNumCount += 1;
        return randNumArr[randNumCount];
    }
    var min = 0;
    var max = 51;
    return Math.floor(Math.random() * (max - min)) + min;
}


function makecards() {
    if (carddeck.length > 0) {return "new deck";}
    console.log("makecards()")
    var s = "";
    for (var i = 0; i < 4; i++) {
        s = "";
        switch (i) {
            case 0:
                s = "s";
                break;
            case 1:
                s = "h";
                break;
            case 2:
                s = "c";
                break;
            case 3:
                s = "d";
                break;
        }
        for (var j = 0; j < 13; j++) {
            var s1 = ""
            switch (j) {
                case 0:
                    s1 = s + "A";
                    break;
                case 1:
                    s1 = s + "2";
                    break;
                case 2:
                    s1 = s + "3";
                    break;
                case 3:
                    s1 = s + "4";
                    break;
                case 4:
                    s1 = s + "5";
                    break;
                case 5:
                    s1 = s + "6";
                    break;
                case 6:
                    s1 = s + "7";
                    break;
                case 7:
                    s1 = s + "8";
                    break;
                case 8:
                    s1 = s + "9";
                    break;
                case 9:
                    s1 = s + "10";
                    break;
                case 10:
                    s1 = s + "J";
                    break;
                case 11:
                    s1 = s + "Q";
                    break;
                case 12:
                    s1 = s + "K";
                    break;
            }
            carddeck.push(s1);
        }
    }
    console.log ("nd: ",carddeck);
    return "new deck";
}


function sortcards() {
    if (sorteddeck.length > 0) {return "cards sorted";}
    console.log("sortcards()")
    for (var k = 0; k< 52; k++){
        var temp = carddeck[k];
        sorteddeck.push(temp);
    }
    var numarray=[];
    var i = getRndInteger(randRange);
    var j = 0;

    var tempcardf = "";
    var tempcardt = "";
    tempcardf = sorteddeck[0];
    tempcardt = sorteddeck[i];
    sorteddeck[i] = tempcardf;
    sorteddeck[0] = tempcardt;

    i = getRndInteger(randRange);
    tempcardf = sorteddeck[51];
    tempcardt = sorteddeck[i];
    sorteddeck[i] = tempcardf;
    sorteddeck[51] = tempcardt;
    
    for (c = 0; c < 400; c++) {
        i = getRndInteger(randRange);
        j = getRndInteger(randRange);

        tempcardf = sorteddeck[j];
        tempcardt = sorteddeck[i];
        
        sorteddeck[i] = tempcardf;
        sorteddeck[j] = tempcardt;
    }
    console.log ("sd: ",sorteddeck);
    return "cards sorted";
}

function showcard(num) {
    return carddeck[num];
}


function showsortedcard(num) {
    return sorteddeck[num];
}

function carddescknotsame(deck1,deck2){
   if(deck1 == deck2){
       return true;
   } else {
       return false;
   }
    
}

function tablesetup(number_players, initial_coins){
    $(".playerboard").hide;
  
    return true;
}

function gameloop(number_players, initial_coins) {
    var player = initial_coins;
    while (player > 0) {
        player -= 11;
    }
    if (number_players === -1 && initial_coins === -1) {
        return " -1 : -1 ";
    }
    return "Game Ended";
}

//run gameloop
var players = 2;
var player_coins = 9;
var mc = makecards();
var sc = sortcards();
var ts = tablesetup();
var gl = gameloop(players, player_coins);