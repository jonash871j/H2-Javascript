class TreasureChest{
    constructor(treasuremap){
        this.isShown = false;

        // Picks random coordiante for treasure chest
        this.x = Math.floor(Math.random() * treasuremap.width);
        this.y = Math.floor(Math.random() * treasuremap.height);
    }

    // Used to get hint message based on coordinate
    getHintMessage = function(x, y)
    {
        var dx = this.x - x;
        var dy = this.y - y;

        if (dx == 0 || dy == 0){
            return "You are hitting one of the axes straight on";
        }
        else if (dy < 0 && dx > 0){
            return "Go up and to the right";
        }
        else if (dy < 0 && dx < 0){
            return "Go up and to the left";
        }
        else if (dy > 0 && dx > 0){
            return "Go down and to the right";
        }
        else{
            return "Go down and to the left";
        }
    }

    // Used to get distance from treasure chest
    getDistance = function(x, y)
    {
        return Math.abs(Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2));
    }
}
class GameManager{
    constructor(){
        var self = this;

        // Creates fireworks
        this.fireworks = new FireworkManager();

        // Initialize game canvas
        this.canvas = document.getElementById("gameCanvas");
        this.canvas.addEventListener("click", function(event){self.onCanvasClick(event);});
        this.ctx = this.canvas.getContext("2d");

        // Initalize game map
        this.treasuremap = new Image();
        this.treasuremap.src = "Image/treasuremap.png";
        this.treasuremap.onload = function() {
            self.newGame(); 
            self.canvas.width = self.treasuremap.width;
            self.canvas.height = self.treasuremap.height;
            self.updateCanvas();
        }
    }

    // Used to update game rendering on canvas
    updateCanvas(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
        // Draws treasuremap image
        this.ctx.drawImage(this.treasuremap, 0, 0);
    
        // Draws treasure chest cross when found
        if (this.treasureChest.isShown == true){
            this.ctx.beginPath();
            this.ctx.moveTo(this.treasureChest.x - 32, this.treasureChest.y - 32);
            this.ctx.lineTo(this.treasureChest.x + 32, this.treasureChest.y + 32);
            this.ctx.moveTo(this.treasureChest.x + 32, this.treasureChest.y - 32);
            this.ctx.lineTo(this.treasureChest.x - 32, this.treasureChest.y + 32);
            this.ctx.strokeStyle = '#ff0000';
            this.ctx.lineWidth = 4;
            this.ctx.stroke();
        }
    }

    // Used to start a new game
    newGame() {
        this.fireworks.newFireworks();
        this.treasureChest = new TreasureChest(this.treasuremap);
        this.life = 5;

        this.updateUi("Find the treasure chest!");
    }

    // Event: Is called every time a user has clicked on the map
    // Used to update the game state
    onCanvasClick(event) {
        var x = event.pageX - this.canvas.offsetLeft - this.canvas.clientLeft;
        var y = event.pageY - this.canvas.offsetTop - this.canvas.clientTop;
    
        // When treasure chest is shown make new game
        if (this.treasureChest.isShown){
            this.newGame();
        }
        // Win the game when mouse click is close to treasure
        else if (this.treasureChest.getDistance(x, y) <= 48){
            this.updateUi("You won");
            this.treasureChest.isShown = true;
            this.fireworks.isEnabled = true;
        }
        // Lose the game when no life is left
        else if (this.life == 0){
            this.updateUi("You lost");
            this.treasureChest.isShown = true;
        }
        // Update life counter on wrong guess
        else{
            this.life--;
            this.updateUi(this.treasureChest.getHintMessage(x, y));
        }
        
        this.updateCanvas();
    }

    // Used to update game ui
    updateUi(msg)
    {
        document.getElementById("uiInfoId").innerHTML = msg;
        document.getElementById("uiLifeId").innerHTML = "Life: " + this.life;
    }
}

var gGame;

window.onload = function() {
    gGame = new GameManager();
}