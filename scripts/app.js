///////////////////////////////////////////////////////////////////////////////
///////////////////////////    BUTTONS       /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

//landing buttons
const startGameBtn = document.getElementById('start-game');
const aboutBtn = document.getElementById('about')




// Stat meters

const hungerMeter = document.getElementById('hunger');
const boredomMeter = document.getElementById('boredom');
const tirednessMeter = document.getElementById('tiredness');




//This is the monster class that the user's creature will be created from. 




class Monster {
    constructor(name, hungerLevel, tirednessLevel, boredomLevel){
        this.name = name;
        this.hungerLevel = hungerLevel;
        this.tirednessLevel = tirednessLevel;
        this.boredomLevel = boredomLevel;
        this.age = age;
    }

    rest() {
        this.tirednessLevel = 0;
        //trigger sleep animation
    }
    play () { 
        this.boredomLevel -= 5;
        //trigger play animation
    }
    eat () {
        hungerLevel = 0;
    }
    age () {
        
    }
} 



