///////////////////////////////////////////////////////////////////////////////
///////////////////////////    BUTTONS and Inputs     /////////////////////////
///////////////////////////////////////////////////////////////////////////////

//start buttons
const startGameBtn = document.getElementById('start-game-button');
const aboutBtn = document.getElementById('about-button')

//main game buttons
const feedBtn = document.getElementById('feed');
const playBtn = document.getElementById('play');
const sleepBtn = document.getElementById('sleep');

//game over button
const tryAgainBtn = document.getElementById('try-again-button');


// Stat meters

let hungerMeter = document.getElementById('hunger');
let boredomMeter = document.getElementById('boredom');
let tirednessMeter = document.getElementById('tiredness');

// Get Player Input for Name
let monsterName = ''
function getMonsterName (){

    monsterName = document.getElementById('user-name').value;

    
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////    Game Objects and Logic     /////////////////////
///////////////////////////////////////////////////////////////////////////////

//This is the monster class that the user's creature will be created from. 
class Monster {
    constructor(name){
        this.name = name;
        this.hungerLevel = 0;
        this.tirednessLevel = 0;
        this.boredomLevel = 0;
        this.age = 1;
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

const player = new Monster(monsterName);


///////////////////////////////////////////////////////////////////////////////
///////////////////////////    Game Start/End and Logic     ///////////////////

function startGame ( ){
    getMonsterName();

    if (monsterName === ''){
        startGameBtn.disabled === true;
        alert('You must enter a name to play.')
        return;
    }
    gameOn();
    $('.start-screen').css('display', 'none')
    $('.game-on').css('display', 'block')
    $('.game-over-screen').css('display', 'none')
    $('.username-display').text(monsterName)
    $('#game-over-name').text(monsterName)
}


//Game timer      if need STOP  look up clearInterval
function gameOn ( ){
    const gameTimer = setInterval(function () {
        player.hungerLevel += 3;
        player.tirednessLevel += 2;
        player.boredomLevel += 3;
        hungerMeter.value = player.hungerLevel;
        tirednessMeter.value = player.tirednessLevel;
        boredomMeter.value = player.boredomLevel;
        if(player.boredomLevel > 51 || player.hungerLevel > 51 || player.tirednessLevel > 51){
            if (player.boredomLevel > 51) {
                $('#cause-of-death').text('boredom');
            } else if (player.hungerLevel > 51) {
                $('#cause-of-death').text('hunger');
            } else if (player.tirednessLevel > 51) {
                $('#cause-of-death').text('tiredness');
            } 
            setInterval(() => {
                $('.body.container').addClass('container-dead');
            }, 3000);
            $('.game-on').css('display', 'none');
            $('.game-over-screen').css('display', 'block');
            clearInterval(gameTimer);  
        }
    }, 1000);
    const aging = setInterval(function (){
        player.age += 1;
        $('#age-display').text(player.age)
    }, 10000)
    
}

function reset () {
    player.tirednessLevel = 0;
    player.boredomLevel = 0;
    player.hungerLevel = 0;
    player.age = 1;
    hungerMeter.value = player.hungerLevel;
    tirednessMeter.value = player.tirednessLevel;
    boredomMeter.value = player.boredomLevel;
    $('#age-display').text(player.age)

    gameOn();
    $('.start-screen').css('display', 'none');
    $('.game-on').css('display', 'block');
    $('.game-over-screen').css('display', 'none');
}


///////////////////////////////////////////////////////////////////////////////
///////////////////////////    Event Listeners    /////////////////////////////
///////////////////////////////////////////////////////////////////////////////

startGameBtn.addEventListener('click', startGame)
aboutBtn.addEventListener('click', () => {alert(`If you have to ask...`); alert(`You'll never know`)})

feedBtn.addEventListener('click', function () {player.eat()});
playBtn.addEventListener('click', function () {player.play()});
sleepBtn.addEventListener('click', function () {player.sleep()})

tryAgainBtn.addEventListener('click', reset)
