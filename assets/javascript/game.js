
var word = [
    "THEPURGE",
    "IT",
    "THEEXORCIST",
    "HALLOWEEN",
    "SINISTER",
    "IT FOLLOWS",
    "JAWS",
    "THE RING",
    "SCREAM",
    "THECONJURING",
    "PARANORMALACTIVITY",
    "ALIEN",
    "GETOUT",
    "INSIDIOUS",
    "POLTERGEIST",
    "THE WITCH",
    "CHUCKY",]


var randNum = Math.floor(Math.random() * word.length);
var choosenWord = word[randNum]; 
var underScore = []; 
var rightWord = []; 
var wrongWord = []; 


var docUnderScore = document.getElementsByClassName('underscore'); 
var docRightGuess = document.getElementsByClassName('rightguess'); 
var docWrongGuess = document.getElementsByClassName('wrongguess'); 


var generateUnderscore = () => {
for (var i = 0; i < choosenWord.length; i++) {
    underScore.push('_'); 
}
return underScore; 
}
docUnderScore[0].innerHTML = generateUnderscore().join(' '); 

document.addEventListener('keypress', (event) =>{ 
var keyword = String.fromCharCode(event.keyCode); 
var capShift = keyword.toUpperCase(); 


if(choosenWord.indexOf(capShift) > -1) { 


    rightWord.push(capShift); 

for( i = 0; i < choosenWord.length; i++) { 
    underScore[choosenWord.indexOf(capShift)] = capShift;
    docUnderScore[0].innerHTML = underScore.join(' ');
    docRightGuess[0].innerHTML = rightWord;
}
}else{
    wrongWord.push(capShift); 
    docWrongGuess[0].innerHTML = wrongWord; 
}
});



console.log(choosenWord);
console.log(generateUnderscore());