class GameManager{
    constructor(cardAmount)
    {
        if (cardAmount % 2 != 0)
        {
            console.error("uneven card amount " + cardAmount);
        }

        this.cardAmount = cardAmount;
        this.board = [];

        for (var i = 0; i < cardAmount; i++)
        {
            this.board[i] = -1;
        }

        for (var i = 0; i < cardAmount; i += 2)
        {
            var randomNumber = Math.floor(Math.random() * 1000);

            this.board[i] = randomNumber;
            this.board[i + 1] = randomNumber;
        }
    }
}

var game;

function initGame(cardAmount) {
    game = new GameManager(cardAmount)
    
    var boardElement = document.getElementById("boardId");

    for (var i = 0; i < game.cardAmount; i++)
    {
        boardElement.innerHTML += "<div class=\"cell\">" +  this.game.board[i] + "</div>";
    }

}