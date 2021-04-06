class Instrument{
    constructor(name){
        this.name = name;
    }

    play(sound) {
        var audio = new Audio(sound);
        audio.play();
    }
}
class Stringed extends Instrument {
    constructor(numberOfStrings){
        super("Stringed");
        this.numberOfStrings = numberOfStrings;
    }
}

class Harp extends Instrument{
    constructor(height){
        super(47);
        this.height = height;
    }
}

class Guitar extends Instrument{
    constructor(material){
        super(6);
        this.material = material;
    }
}

class Saxophone extends Instrument{
    constructor(material){
        super("Saxophone");
        this.material = material;
    }
}

class Flute extends Instrument {
    constructor(holes, material){
        super("Flute");
        this.holes = holes;
        this.material = material;
    }
    play()
    {
        super.play("Sound/Flute.wav");
    }
}


var flute = new Flute(78, 'Wood');

function playFlute() {
    flute.play();
}