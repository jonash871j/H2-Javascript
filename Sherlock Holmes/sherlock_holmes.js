var balance =10500;
var cameraOn = true;

function steal(balance, amount){
    cameraOn = false; // Når steal funktionen bliver kørt er der så åbenbart ingen kameraer som filmer.
    if(amount < balance){
        balance = balance - amount; // Det havde været pænerer med: balance -= amount;
    }
    return amount; // Retunerer noget før at alt koden er kørt igennem
    cameraOn= true; // Linjen bliver aldrig kørt
}

var amount = steal(balance, 1250);
alert("Du er kriminel og du har lige stjålet " + amount +" og det må manikke!!!!") // Typo: manikke 