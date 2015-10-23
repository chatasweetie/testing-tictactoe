/* Tests for Tic-Tac Javascript */


describe("Tic Tac JS", function () {

    it("should detect a full board as full", function () {
        board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
        expect(isBoardFull()).toBeTruthy();
    });

    // STEP 2: Uncomment this out.

    it("should detect a non-full board as not full", function () {
       board = ["X", "X", null, "X", "X", "X", "X", "X", "X"];
       expect(isBoardFull()).toBeFalsy();
    });
    
    it("should convert x, y to cell #", function () {
       var cellNumber1 = xyToCell(1, 1);
       var cellNumber2 = xyToCell(0, 0);
       // Add 2 matchers for this test, one for cellNumber1 and one for cellNumber2.
       expect(cellNumber1).toEqual(4);
       expect(cellNumber2).toEqual(0);
    });
    
    it("should make computer moves", function () {
       board = ["X", null, null, null, null, null, null, null, null];
       computerMove();
       var newBoardPiece = board[1];
       // Add a matcher for this test.
       expect(newBoardPiece).toEqual("O");
    });

    // END STEP 2

    // Add the following tests, or think of some of your own.
    // it should update the board correctly based on the board
    it("should update the board correctly", function() {
       board = [null, null, null, null, null, null, null, null, null];
       makeHumanMove(4);
       expect(board[4]).toEqual("X");
    });

    // it should not fill in board slots that are already occupied
    it("should not fill in occupied slots", function() {
       board = ["O", "X", "X", null, null, null, null, null, null];
       computerMove();
       expect(board).toEqual(["O", "X", "X", "O", null, null, null, null, null]);
    });

    // it should be able to determine a winner
    it("should determine a winner", function() {
        board = ["X", null, "O", "O", "X", null, "O", null, "X"];
        winner = findWinner();
        expect(winner).toEqual("X");
    });

    // it should not determine a winner when there is a tie
    it("should not determine a winner if it's a tie", function() {
        board = ["O", "O", "X", "X", "X", "O", "O", "X", "X"];
        checkGameOver();
        text = $("h1").html();
        expect(text).toEqual("Tie!");
    });

    // it should be able to deduce the correct cell number
    it("should place clicked item in correct cell", function() {
        cells = $("#game-board td");
        indexes = [];
        for (var i=0; i < cells.length; i++) {
            cell = cells[i];
            index = parseInt(cell.id[5]);
            console.log(index);
            indexes.push(index);
        }
        expect(indexes).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });

    // it should be able to declare a tie and end the game

});
