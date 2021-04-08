class Coord{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

class Particle{
    constructor(angle, color, x, y){
        this.length = 64;
        this.buffer = [];
        this.angle = angle;
        this.color = Math.floor(color / 1.0);
        console.log(this.color.toString(16));
        this.x = x;
        this.y = y;
        this.xPre = this.x;
        this.yPre = this.y;
        this.fallingSpeed = 0.0;

        for (var i = 0; i < this.length; i++){
            this.buffer[i] = new Coord(x, y);
        }
    }

    update(){
        this.xPre = this.x;
        this.yPre = this.y;
        this.x += Math.sin(this.angle * (Math.PI / 180.0));
        this.y += Math.cos(this.angle * (Math.PI / 180.0));
        this.y += this.fallingSpeed;
        this.fallingSpeed += 0.01;

        for (var i = 0; i < this.length; i++){
            var xStore = this.buffer[i].x;
            var yStore = this.buffer[i].y;
            this.buffer[i].x = this.xPre;
            this.buffer[i].y = this.yPre;
            this.xPre = xStore;
            this.yPre = yStore;
        }
    }
}
class Firework{
    constructor(x, y)
    {
        this.particles = [];

        var color = Math.floor(Math.random() * 0xAAAAAA) + 0x444444;
        console.log(color);
        for (var i = 0; i < 15; i++){
            this.particles[i] = new Particle(Math.random() * 360, color, x, y);
        }
    }
}
class FireworkManager{
    constructor(){
        this.isEnabled = false;
        this.fireworks = [];
        this.canvas = document.getElementById("fireworkCanvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        var self = this;
		setInterval(function(){self.updateCanvas();}, 25);
    }

    updateCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.isEnabled){
            this.ctx.beginPath();
        
            for (var i = 0; i < this.fireworks.length; i++){
                var firework = this.fireworks[i];
        
                for (var j = 0; j < firework.particles.length; j++){
                    var particle = firework.particles[j];
                    particle.update();
            
                    for (var k = 0; k < particle.length; k++){
                        this.ctx.fillStyle = "#" + (Math.floor(particle.color)).toString(16);;
                        this.ctx.fillRect(particle.buffer[k].x, particle.buffer[k].y, 2, 2);  
                    }
                }
            }
            this.ctx.fill();
        }
    }

    newFireworks() {
        for (var i = 0; i < 25; i++){
            this.fireworks[i] = new Firework(Math.random() * this.canvas.width, Math.random() * this.canvas.height);
        }
        this.isEnabled = false;
    }
}