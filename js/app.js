'use strict';

console.log('HelloWorld');

/*
&& - is the logical and
one of false with an and and it will not run

|| - is the logical or
one true and it will run

! - is the logical not
it reverses the value
*/

let username = prompt('What is your name?');
alert('Hi ' + username + '!');

alert('Take this quiz to see if you really know me!');

let game = prompt('Do I play video games?').toLowerCase();

if (game === 'yes' || game === 'y') {
  /*console.log*/alert('That\'s right! I do enjoy some games.');
} else if (game === 'no' || game === 'n') {
  /*console.log*/alert('Wrong! A true friend would know that :(');
} else {
  /*console.log*/alert('You need to answer with a \'yes\' or a \'no\'');
}

let zodiac = prompt('Am I a Pisces?').toLowerCase();

if (zodiac === 'yes' || zodiac === 'y') {
  /*console.log*/alert('You thought I was a Pisces??? I\'m an aquarius baby. You should know this!');
} else if (zodiac === 'no' || zodiac === 'n') {
  /*console.log*/alert('Correct! I\'m an Aquarius babyyy!');
} else {
  /*console.log*/alert('You need to answer with a \'yes\' or a \'no\'');
}

let weights = prompt('Am I an anime fan?').toLowerCase();

if (weights === 'yes' || weights === 'y') {
  /*console.log*/alert('Duh! uWu where\'s my waifu');
} else if (weights === 'no' || weights === 'n') {
  /*console.log*/alert('Dude WHAT! I love the waifus');
} else {
  /*console.log*/alert('You need to answer with a \'yes\' or a \'no\'');
}

let height = prompt('Am I tall?').toLowerCase();

if (height === 'yes' || height === 'y') {
  /*console.log*/alert('Dang right I am tall. Thank you for the compliment!');
} else if (height === 'no' || height === 'n') {
  /*console.log*/alert('Not tall relative to what???');
} else {
  /*console.log*/alert('You need to answer with a \'yes\' or a \'no\'');
}

let home = prompt('Am I from San Diego, CA?').toLowerCase();

if (home === 'yes' || home === 'y') {
  /*console.log*/alert('Nope! But it was my home for 4 years and we miss it. :(');
} else if (home === 'no' || home === 'n') {
  /*console.log*/alert('Correct! I\'m from Wichita, Kansas. The air capital of the world!');
} else {
  /*console.log*/alert('You need to answer with a \'yes\' or a \'no\'');
}

alert('You did pretty good ' + username + '! ' + 'Maybe you are a good friend!');
