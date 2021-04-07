var game;
var board;
var boardElement;
var cards;
var gameMoves = 0;
var flippedCards = [];
const cardAmount = 32;


class Card{
    constructor(value)
    {
        this.value = value;
        this.isFlipped = false;
        this.isFound = false;
        this.el = document.createElement("div");
        this.el.className = "card";
        this.onFlippedCard = new Event('onFlippedCard');

        var self = this;
        this.el.onclick = function(){
            if (flippedCards.length >= 2){
                checkCards();
            }
            else{
                self.flipCard();
            }
        }
        boardElement.appendChild(this.el);
        this.update();
    }
    flipCard()
    {
        if (!this.isFound && !this.isFlipped){
            this.isFlipped = true;
            gameMoves++;
            flippedCards.push(this);
            document.getElementById("uiMoves").innerHTML ="Moves: " + gameMoves;
        }
        this.update();
    }
    update(){
        if (this.isFlipped || this.isFound){
            this.el.innerHTML = this.value;
        }
        else{
            this.el.innerHTML = "?";
        }
    }
}


window.onload = function() {
    boardElement = document.getElementById("boardId");
    cards = [];

    resetBoard();
}

function checkCards(){
    if (flippedCards.length == 2){
        if (flippedCards[0].value == flippedCards[1].value){
            flippedCards[0].isFound = true;
            flippedCards[1].isFound = true;
        }
        else{
            flippedCards[0].isFlipped = false;
            flippedCards[1].isFlipped = false;
        }
        cardAmountFlipped = 0;
        flippedCards[0].update();
        flippedCards[1].update();
        flippedCards = [];
    }
    for (var i = 0; i < cards.length; i++){
        if (!cards[i].isFound){
            return;
        }
    }
    document.getElementById("uiInfo").innerHTML = "You won";
}

function resetBoard(){
    function placeCardRandomAvailableCell(value){
        while(true){
            var index = Math.floor(Math.random() * cardAmount);
            if (cards[index].value == -1){
                cards[index].value = value;
                cards[index].update();
                return;
            }
        }
    }

    for (var i = 0; i < cardAmount; i++){
        cards[i] = new Card(-1);
    }

    for (var i = 0; i < cardAmount; i += 2){
        var randomNumber = Math.floor(Math.random() * 1000);

        placeCardRandomAvailableCell(randomNumber);
        placeCardRandomAvailableCell(randomNumber);
    }
}
