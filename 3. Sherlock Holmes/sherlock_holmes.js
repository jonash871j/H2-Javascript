var balance =10500;
var cameraOn = true;

function steal(balance, amount){
    cameraOn = false; // Når steal funktionen bliver kørt er der så åbenbart ingen kameraer som filmer.
    if(amount < balance){
        balance = balance - amount; // Det havde været pænerer med: balance -= amount;
    }
    return amount;  // Det havde måske været smarter at retunere balance som bliver ændret lokalt i stedet for amount som ikke ændres
                    // Retunerer noget før at alt koden er kørt igennem
                    // Tyven bliver også snydt, da han stjæler fra et lokalt variabel og ikke fra det globale balance variabel
    cameraOn= true; // Linjen bliver aldrig kørt
}

var amount = steal(balance, 1250);
alert("Du er kriminel og du har lige stjålet " + amount +" og det må manikke!!!!") // Der kommer til at stå 1250 i beskeden i stedet for det forventede 9250