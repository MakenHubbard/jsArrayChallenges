//Challenge 3 
var challengeThreeInputA = [ 1, 1, 1, 2, 1, 1 ];  // 2
var challengeThreeInputB = [ 0, 0, 0, 0, 0, 0, 0, 0.55, 0, 0 ];  // 0.55
var list = challengeThreeInputA.join(',');
var input1;
var input2;
var unique;
for (var i = 0; i < challengeThreeInputA.length; i++){
    if (input1 == null){ // Never been set - this is the first run
      input1 = challengeThreeInputA[i];
      continue;
    }
    if (input1 === challengeThreeInputA[i]) //match
        continue;
        
    if (i != 1) { //we have see input1 multiple times, i is the unique one
        unique = challengeThreeInputA[i];
        continue;
    }
    if (i === 1) {//this is the second iteration and they dont match so look forward one element for the tie breaker
        input2 = challengeThreeInputA[i];//save the second digit
        if (input1 === challengeThreeInputA[i+1]) {// if the first and third match then second is unique
            unique = input2;
        }else {// else the first one is unique
            unique = input1;
        }  
        break;
    }
}


document.getElementById("challenge3A").innerHTML = '<h1>' + unique + '</h1>';

 input1 = null; 
 input2 = null;
 unique = null;
for (var i = 0; i < challengeThreeInputB.length; i++){
    if (input1 == null){ // Never been set - this is the first run
      input1 = challengeThreeInputB[i];
      continue;
    }
    if (input1 === challengeThreeInputB[i]) //match
        continue;
        
    if (i != 1) { //we have see input1 multiple times, i is the unique one
        unique = challengeThreeInputB[i];
        continue;
    }
    if (i === 1) {//this is the second iteration and they dont match so look forward one element for the tie breaker
        input2 = challengeThreeInputB[i];//save the second digit
        if (input1 === challengeThreeInputB[i+1]) {// if the first and third match then second is unique
            unique = input2;
        }else {// else the first one is unique
            unique = input1;
        }  
        break;
    }
}


document.getElementById("challenge3B").innerHTML = '<h1>' + unique + '</h1>';




