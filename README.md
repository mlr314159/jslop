#Lancashire Oldham Poker

(A simple simulation of Texas Hold em Poker)


##Set-up game

Game loop (while player has chips)
	shuffle()
	cards(1).  //holecards
	Betting loop(players folded or matched highest bet)
		players bet()
    Discard card
	cards(2)  //the flop
	Betting loop(players folded or matched highest bet)
		players bet()
	cards(3)   //the turn
	Betting loop(players folded or matched highest bet)
		players bet()
	cards(4)  //the river
	Betting loop(players folded or matched highest bet)
		players bet()
	Showdown()
ShowResults()

	
Set_up_Game()
	players = 6
	cards  = 52 -  2345678910JQKA -  shcd - array of 52  rearranged randomly.  (2D AS)
	each player 100 chips
	each player has
		name,
		position at table
		number of chips
		a value rating for hand, 
		how he values his hand, 
		how he values his hand and community cards
		how he values other players bets