///////////////////////////////////////////////////////////////////////////////
///////////////////////////    BUTTONS       /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

//landing buttons
const startGameBtn = document.getElementById('start-game');
const aboutBtn = document.getElementById('about')

//main game buttons
const feedBtn = document.getElementById('feed');
const playBtn = document.getElementById('play');
const sleepBtn = document.getElementById('sleep')




// Stat meters

let hungerMeter = document.getElementById('hunger');
let boredomMeter = document.getElementById('boredom');
let tirednessMeter = document.getElementById('tiredness');




//This is the monster class that the user's creature will be created from. 
class Monster {
    constructor(name){
        this.name = name;
        this.hungerLevel = 0;
        this.tirednessLevel = 0;
        this.boredomLevel = 0;
    }

    sleep() {
        this.tirednessLevel = 0;
        tirednessMeter.value = 0;
        console.log('tiredness ' + this.tirednessLevel);
   
    }
    play () { 
        this.boredomLevel = this.boredomLevel - 5;
        boredomMeter.value -= 5;
        console.log('boredom ' + this.boredomLevel)

        //trigger play animation
    }
    eat () {
        this.hungerLevel = 0;
        hungerMeter.value = 0;
        console.log('hunger ' + this.hungerLevel)
    }
   
} 



const player = new Monster('eventual input', );





//Game timer
function gameOn ( ){
    const gameTimer = setInterval(function () {
        player.hungerLevel += 6;
        player.tirednessLevel += 5;
        player.boredomLevel += 3;
        hungerMeter.value = player.hungerLevel;
        tirednessMeter.value = player.tirednessLevel;
        boredomMeter.value = player.boredomLevel;
        console.log(player.hungerLevel, player.tirednessLevel, player.boredomLevel)
    }, 3000);
}




gameOn(); 
console.log(player);
 


// EVENT LISTENERS

feedBtn.addEventListener('click', function () { player.eat()});
playBtn.addEventListener('click', function () {player.play()});
sleepBtn.addEventListener('click', function () {player.sleep()})
