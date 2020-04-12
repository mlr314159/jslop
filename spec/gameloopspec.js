describe("gameloop", function() {
   
    describe("gameloop", function(){
        it("should return 'Game Ended'", function() {
            expect(gameloop(3, 100)).toBe('Game Ended');
        });
    }); 

    describe("gameloop", function(){
        it("should return ' -1 : -1 '", function() {
            expect(gameloop(-1, -1)).toBe(" -1 : -1 ");
        });
    }); 


});