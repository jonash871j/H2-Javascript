class Card{
    constructor(value)
    {
        this.value = value;
        this.isSelected = false;
        this.isFound = false;
    }
    selectCard()
    {
        if (!this.isFound){
            this.isSelected = true;
        }
    }
}

class Board
{
    constructor(cardAmount)
    {
        this.cardAmount = cardAmount;

        if (cardAmount % 2 != 0)
        {
            console.error("uneven card amount " + cardAmount);
        }

        this.cards = [];
        this.reset();
    }

    reset(){
        for (var i = 0; i < this.cardAmount; i++){
            this.cards[i] = new Card(-1);
        }

        for (var i = 0; i < this.cardAmount; i += 2){
            var randomNumber = Math.floor(Math.random() * 1000);

            this.placeCardRandonAvailableCell(randomNumber);
            this.placeCardRandonAvailableCell(randomNumber);
        }
    }
    placeCardRandonAvailableCell(value){
        while(true){
            var index = Math.floor(Math.random() * this.cardAmount);
            if (this.cards[index].value == -1){
                this.cards[index].value = value;
                return;
            }
        }
    }
}

class GameManager{
    constructor(cardAmount){
        this.cardAmount = cardAmount;
        this.board = new Board(cardAmount);
    }

    logic(){
        var card1 = null;
        var card2 = null;
        
        for (var i = 0; i < this.board.cards.length; i++){
            var card = this.board.cards;
            console.log(card);
            if (card.isSelected == true){
      
                if (card1 == null){
                    card1 = card;
                    

                }
                else{
                    card2 = card;
                    break;
                }
            }
        }
        if (card1 != null && (card2 != null))
        {
            if (card1.value == card2.value){
                card1.isFound = true;
                card2.isFound = true;
            }
            card1.isSelected = false;
            card2.isSelected = false;
        }
    }
}

var game;
var cellElements;

function initGame(cardAmount) {
    game = new GameManager(cardAmount)

    updateGame();


}

function handleClick(e) {
    var card = game.board.cards[e.target.value];
    card.selectCard();
    game.logic();
    updateGame();
}

function updateGame() {

    var boardElement = document.getElementById("boardId");
    boardElement.innerHTML = "";

    for (var i = 0; i < game.cardAmount; i++){
        var card = game.board.cards[i];
        var cardText = "";

        if (card.isFound || card.isSelected){
            cardText = card.value;
        }
        else{
            cardText = "?";
        }

        boardElement.innerHTML += "<div class=\"cell\" data-cell>" + cardText + "</div>";
    }

    var cardIndex = 0;
    cellElements = document.querySelectorAll('[data-cell]');
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, {once: false});
        cell.value = cardIndex;
        cardIndex++;
    })
}