'use strict';

console.log('HelloWorld');

// /*
// && - is the logical and
// one of false with an and and it will not run

// || - is the logical or
// one true and it will run

// ! - is the logical not
// it reverses the value
// */

let username = prompt('What is your name?');
alert('Hi ' + username + '! ' + 'Welcome to my site!');

alert('Take this quiz to see if you really know me! Please answer with \'yes\' or \'no\'');

let score = 0;

function questionOne(){


  let game = prompt('Do I play video games?').toLowerCase();

  if (game === 'yes' || game === 'y') {
  /*console.log*/alert('That\'s right! I do enjoy some games.');
    score++;
  } else if (game === 'no' || game === 'n') {
  /*console.log*/alert('Wrong! A true friend would know that :(');
  } else {
  /*console.log*/alert('You need to answer with a \'yes\' or a \'no\'');
  }
}

questionOne();

function questionTwo(){


  let zodiac = prompt('Am I a Pisces?').toLowerCase();

  if (zodiac === 'yes' || zodiac === 'y') {
  /*console.log*/alert('You thought I was a Pisces??? I\'m an aquarius baby. You should know this!');
  } else if (zodiac === 'no' || zodiac === 'n') {
  /*console.log*/alert('Correct! I\'m an Aquarius babyyy!');
    score++;
  } else {
  /*console.log*/alert('You need to answer with a \'yes\' or a \'no\'');
  }
}
questionTwo();

function questionThree(){

  let anime = prompt('Am I an anime fan?').toLowerCase();

  if (anime === 'yes' || anime === 'y') {
  /*console.log*/alert('Duh! uWu where\'s my waifu');
    score++;
  } else if (anime === 'no' || anime === 'n') {
  /*console.log*/alert('Dude WHAT! I love the waifus');
  } else {
  /*console.log*/alert('You need to answer with a \'yes\' or a \'no\'');
  }
}

questionThree();

function questionFour(){

  let pet = prompt('Do I have dogs?').toLowerCase();

  if (pet === 'yes' || pet === 'y') {
  /*console.log*/alert('Correct! I have two girls, Nala and Betty.');
    score++;
  } else if (pet === 'no' || pet === 'n') {
  /*console.log*/alert('Wrong again. Dude you should know I\'m a dog person.');
  } else {
  /*console.log*/alert('You need to answer with a \'yes\' or a \'no\'');
  }
}

questionFour();

function questionFive(){


  let home = prompt('Am I from San Diego, CA?').toLowerCase();

  if (home === 'yes' || home === 'y') {
  /*console.log*/alert('Nope! But it was my home for 4 years and we miss it. :(');
  } else if (home === 'no' || home === 'n') {
  /*console.log*/alert('Correct! I\'m from Wichita, Kansas. The air capital of the world!');
    score++;
  } else {
  /*console.log*/alert('You need to answer with a \'yes\' or a \'no\'');
  }
}
questionFive();

function questionSix(){
  let attempts = 3;

  for (let i = 0; i < 4; i++) {
    let number = parseInt(prompt('guess a number from 1-10'));
    if (number === 7) {
    /*console.log*/alert('That is right!');
      score++;
      break;
    } if (number < 7) {
    /*console.log*/alert(`too low, try again! You have ${attempts--} attempts remaining`);
    } if (number > 7) {
    /*console.log*/alert(`too high, try again! You have ${attempts--} attempts remaining`);
    }
  } /*console.log*/alert('the number was 7');
}
questionSix();


function questionSeven(){

  let favorite = ['pizza', 'taco', 'cheeseburger', 'lasagna', 'baconeggncheese', 'burrito', 'chickenparm', 'padthai', 'friedchicken', 'pho'];
  let moreAttempts = 6;
  let answeredCorrectly = false;

  for (let i = 0; i < 6; i++) {
    let userResponse = prompt(`guess one of my top 10 favorite foods! You have ${moreAttempts - i} attempts!`).toLowerCase();
    for (let j = 0; j < favorite.length; j++) {
      if (userResponse === favorite[j]) {
        console.log('That is correct!');
        answeredCorrectly = true;
        score++;
        break;
      }
    } if (answeredCorrectly === false) {
      console.log('That is incorrect!');
    } else if (answeredCorrectly) {
      break;
    }
  }
}

questionSeven();

alert('You did pretty good ' + username + '! ' + 'Maybe you are a good friend!');
alert('Nice Job, you got ' + score + ' out of 7');


// if else {
//   console.log('That is incorrect!');
//   break;


// for (let i = 0; i < 6; i++) {
//   let userResponse = prompt(`guess one of my top 10 favorite foods! You have ${moreAttempts - i} attempts!`).toLowerCase();
//   for (let j = 0; j < favorite.length; j++) {
//     if (userResponse === favorite[j]) {
//       console.log('That is correct!');
//       answeredCorrectly = true;
//       score++;
//       break;
//     } if (answeredCorrectly) {
//       break;
//     }
//   }
// }
