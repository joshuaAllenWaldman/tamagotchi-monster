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
    constructor(name, hungerLevel, tirednessLevel, boredomLevel){
        this.name = name;
        this.hungerLevel = hungerLevel;
        this.tirednessLevel = tirednessLevel;
        this.boredomLevel = boredomLevel;
    }

    sleep() {
        this.tirednessLevel = 0;
        tirednessMeter.value = 0;
        console.log(`sleep was used ${player.tirednessLevel}`)
    }
    play () { 
        this.boredomLevel -= 5;
        boredomMeter.value -= 5;

        //trigger play animation
    }
    eat () {
        this.hungerLevel = 0;
        hungerMeter.value = 0;
    }
    age () {
        
    }
} 






//Game timer
function gameOn ( ){
    const gameTimer = setInterval(function () {
        player.hungerLevel += 6;
        player.tirednessLevel += 5;
        player.boredomLevel += 3;
        hungerMeter.value = player.hungerLevel;
        tirednessMeter.value += player.tirednessLevel;
        boredomMeter.value += player.boredomLevel;
        console.log(player)
    }, 3000);
}



const player = new Monster('inputer', 0, 0, 0);

gameOn(); 
console.log(player);
 


// EVENT LISTENERS

feedBtn.addEventListener('click', player.eat);
playBtn.addEventListener('click', player.play);
sleepBtn.addEventListener('click', player.sleep)
