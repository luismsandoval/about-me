'use strict';

console.log('helloWorld');

let username = prompt('What is your name?');
alert('Hi ' + username + '! ' + 'Welcome to my site!');

alert('Take this quiz to see if you really know me! Please answer with \'yes\' or \'no\'');

let score = 0;

function questionOne(){


  let game = prompt('Do I play video games?').toLowerCase();

  if (game === 'yes' || game === 'y') {
    alert('That\'s right! I do enjoy some games.');
    score++;
  } else if (game === 'no' || game === 'n') {
    alert('Wrong! A true friend would know that :(');
  } else {
    alert('You need to answer with a \'yes\' or a \'no\'');
  }
}

questionOne();

function questionTwo(){


  let zodiac = prompt('Am I a Pisces?').toLowerCase();

  if (zodiac === 'yes' || zodiac === 'y') {
    alert('You thought I was a Pisces??? I\'m an aquarius baby. You should know this!');
  } else if (zodiac === 'no' || zodiac === 'n') {
    alert('Correct! I\'m an Aquarius babyyy!');
    score++;
  } else {
    alert('You need to answer with a \'yes\' or a \'no\'');
  }
}
questionTwo();

function questionThree(){

  let anime = prompt('Am I an anime fan?').toLowerCase();

  if (anime === 'yes' || anime === 'y') {
    alert('Duh! uWu where\'s my waifu');
    score++;
  } else if (anime === 'no' || anime === 'n') {
    alert('Dude WHAT! I love the waifus');
  } else {
    alert('You need to answer with a \'yes\' or a \'no\'');
  }
}

questionThree();

function questionFour(){

  let pet = prompt('Do I have dogs?').toLowerCase();

  if (pet === 'yes' || pet === 'y') {
    alert('Correct! I have two girls, Nala and Betty.');
    score++;
  } else if (pet === 'no' || pet === 'n') {
    alert('Wrong again. Dude you should know I\'m a dog person.');
  } else {
    alert('You need to answer with a \'yes\' or a \'no\'');
  }
}

questionFour();

function questionFive(){


  let home = prompt('Am I from San Diego, CA?').toLowerCase();

  if (home === 'yes' || home === 'y') {
    alert('Nope! But it was my home for 4 years and we miss it. :(');
  } else if (home === 'no' || home === 'n') {
    alert('Correct! I\'m from Wichita, Kansas. The air capital of the world!');
    score++;
  } else {
    alert('You need to answer with a \'yes\' or a \'no\'');
  }
}
questionFive();

function questionSix(){
  let attempts = 3;

  for (let i = 0; i < 4; i++) {
    let number = parseInt(prompt('guess a number from 1-10'));
    if (number === 7) {
      alert('That is right!');
      score++;
      break;
    } if (number < 7) {
      alert(`too low, try again! You have ${attempts--} attempts remaining`);
    } if (number > 7) {
      alert(`too high, try again! You have ${attempts--} attempts remaining`);
    }
  } alert('the number was 7');
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
        alert('That is correct!');
        answeredCorrectly = true;
        score++;
        break;
      }
    } if (answeredCorrectly === false) {
      alert('That is incorrect!');
    } else if (answeredCorrectly) {
      break;
    }
  }
}

questionSeven();

alert('You did pretty good ' + username + '! ' + 'Maybe you are a good friend!');
alert('Nice Job, you got ' + score + ' out of 7');
