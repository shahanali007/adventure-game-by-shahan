
import inquirer from "inquirer";
import chalk from "chalk";

// my player class start
class Player {
name: string;
fuel: number = 100;

constructor(myPlayerName: string){
    this.name = myPlayerName
}

fuelDecrease(){
    this.fuel = this.fuel- 25;
}

fuelIncrease(){
    this.fuel = this.fuel +25;
}
}

//  opponent class start
class Opponent{
    name: string;
    fuel: number = 100;

    constructor(opponentName: string){
        this.name = opponentName


    }  fuelDecrease(){
              this.fuel=this.fuel- 25;
}
}

// ask usrname and opponent name
let userInput = await inquirer.prompt([
    {
          type: 'input',
          name: 'myName',
          message: 'Enter your Name:'
    },

    {
        type: 'list',   
        name: 'opponentName',                 
        message: 'Select your opponent',
        choices:['Skeleton', 'Alien', 'Zombie']
    },

]);


let {myName , opponentName} = userInput;
console.log(`${chalk.bold.green(myName)} VS ${chalk.bold.red(opponentName)}`);

let myPlayer = new Player(myName);
let myOpponent = new Opponent(opponentName);

while(true){
    let startMatch = await inquirer.prompt({
        type: 'list',
        name: 'options',
        message: 'select your option',
        choices :["Attack", "increase Health", "Run for life..."]
  })

  let {options} = startMatch;
    if (options==='Attack')attackFun();
       if(options==="Increase Health")increaseHealthFun();
      if(options=== "Run for Life..") runForLifeFun();

    function attackFun(){
        // generate random Number 0 and 1
        let number = Math.floor(Math.random()  *2);
         
        if(number=== 0){
            myPlayer.fuelDecrease();
            console.log(`${myPlayer.name} s fuel is ${chalk.bold.red(myPlayer.fuel)}`);
            console.log(`${myOpponent.name} s fuel is${chalk.bold.green(myOpponent.fuel)}\n`)
        }
        if(myPlayer.fuel===0){
            console.log(`${chalk.bold.red(myPlayer.name)} you lost! better luck next time`);
            process.exit();
        }
        if(number===1){
            myOpponent.fuelDecrease();
            console.log(`${myPlayer.name} s fuel is ${chalk.bold.green(myPlayer.fuel)}`);
            console.log(`${myOpponent.name} s fuel is ${chalk.bold.red(myOpponent.fuel)}`);
        }
            if(myOpponent.fuel===0){
                console.log(`congratulations!${chalk.bold.green(myPlayer.name)}! yoy won the game.`)
                process.exit();
            
            }
        
    }

// attact function
 function increaseHealthFun(){
myPlayer.fuelIncrease();
console.log(`${myPlayer.name} s fuel is increased to ${chalk.bold.green(myPlayer.fuel)}`);
 
 }
//  end increase healthfunc
function runForLifeFun(){
 console.log(`${myPlayer.name} Lost!Better luck next time.`)
 
     process.exit();
     
}

}




