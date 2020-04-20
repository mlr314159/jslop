describe("gameloop", function () {

    describe("gameloop", function () {
        it("should return 'Game Ended'", function () {
            expect(gameloop(3, 100)).toBe('Game Ended');
        });
    });

    describe("gameloop", function () {
        it("should return ' -1 : -1 '", function () {
            expect(gameloop(-1, -1)).toBe(" -1 : -1 ");
        });
    });


    describe("makecards()", function () {
        it("should return 'new deck'", function () {
            expect(makecards()).toBe("new deck");
        });
    });


    describe("sortcards()", function () {
        it("should return 'cards sorted'", function () {
            expect(sortcards()).toBe("cards sorted");
        });
    });

    describe("showcard(0)", function () {
        it("should return 'sA'", function () {
            expect(showcard(0)).toBe("sA");
        });
    });


    describe("showcard(51)", function () {
        it("should return 'dK'", function () {
            expect(showcard(51)).toBe("dK");
        });
    });


    describe("showsortedcard(0)", function () {
        it("should return 's7'", function () {
            expect(showsortedcard(0)).toBe("s7");
        });
    });


    describe("showsortedcard(51)", function () {
        it("should return 's9'", function () {
            expect(showsortedcard(51)).toBe("s9");
        });
    });


    describe("getplayerCards(1)", function () {
        it("should return 's10,h2'", function () {
            expect(getplayerOneCards(4)).toBe("s10,h2");
        });
    });
    
    describe("getplayerCards(2)", function () {
        it("should return 's10,h2'", function () {
            expect(getplayerOneCards(4)).toBe("s10,h2");
        });
    });
    
    describe("getplayerCards(3)", function () {
        it("should return 's10,h2'", function () {
            expect(getplayerOneCards(4)).toBe("s10,h2");
        });
    });
    

    describe("getplayerCards(4)", function () {
        it("should return 's10,h2'", function () {
            expect(getplayerOneCards(4)).toBe("s10,h2");
        });
    });
    


});