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
        super("Stringed")
        this.numberOfStrings = numberOfStrings;
    }
}

class Harp extends Stringed{
    constructor(height){
        super(47);
        this.height = height;
    }
    play()
    {
        super.play("Sound/Harp.wav");
    }
}

class Guitar extends Stringed{
    constructor(material){
        super(6);
        this.material = material;
    }
    play()
    {
        super.play("Sound/Guitar.wav");
    }
}

class Saxophone extends Instrument{
    constructor(material){
        super("Saxophone");
        this.material = material;
    }
    play()
    {
        super.play("Sound/Saxophone.wav");
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

var instruments = [
    new Harp('1.5 m'),
    new Guitar('Wood'),
    new Saxophone('Brass'),
    new Flute(8, 'Wood'),
];

function getAllPropertiesOfInstruments() {
    document.getElementById("propertiesTag").innerHTML = JSON.stringify(instruments);
    
}