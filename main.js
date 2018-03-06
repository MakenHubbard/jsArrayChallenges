// Challange 1
var alphabet = [];
var allValueArry = [];
var comparisonArry =[];

//creating 26 alphabet letters
for(var i = 97; i < 123; i++)
{
   alphabet.push(String.fromCharCode(i));
}

var value = 0;
var userInput = 'cba abc f';
var userInputArry = userInput.split(' ');

for(var j = 0; j<userInputArry.length;j++)
{
   //split the userInput into individual word and loop through each letter for its value
   var stringArry = userInputArry[j].split('');
   for(var k = 0; k<stringArry.length; k++)
   {
       //find the total value of all letters for one word
       value += alphabet.indexOf(stringArry[k])+1;
   }

   //add total value of each word to array for sorting
   allValueArry.push(value);
   comparisonArry[userInputArry[j]] = value;
   
   // reset the value after loop through each word
   value = 0; 
}

//sort the value from lowest to highest then find the highest one
allValueArry.sort(function(a,b){return a - b});
var largestNumber = allValueArry[allValueArry.length-1];

//find the highest value among all words, if they have same value, will pick first occurence
for(var key in comparisonArry)
{
   if(largestNumber === comparisonArry[key])
       {
       var domString = '<h1>' + key + '</h1>';
       document.getElementById('challenge-1').innerHTML = domString;
       break;
       }
   
}

//Challenge 2 
var challengeTwoInputA = [1,2,3,4,5,6,7,8,9]; //[1,2,7,4,5,6,3,8,9];
var list = challengeTwoInputA.join(',').replace(7,3).replace(3,7);
console.log(list);

var challengeTwoInputB = [12,13,14]; //[12,17,14];
var list2 = challengeTwoInputB.join(',').replace(3,7);
console.log(list2);

var challengeTwoInputC = [9,2,4,7,3];  //[9,2,4,3,7];
var list3 = challengeTwoInputC.join(',').replace(3,7).replace(7,3);
console.log(list3);

var domString = '<h1>' + (list) + '</h1>';
    domString += '<h1>' + list2 + '</h1>';
    domString += '<h1>' + list3 + '</h1>';
document.getElementById('challenge2').innerHTML = domString;


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




//challenge 4
var challengeFourInputA = [ 1, 2, 3 ];  // [2, 4, 6]
var challengeFourInputB = [ 3, 8, 1, 2, 4, 12 ];  // [ 6, 16, 2, 4, 8, 24 ]

for (var i = 0; i < challengeFourInputA.length; i++) {
    challengeFourInputA[i] = challengeFourInputA[i]*2;
}
for (var i = 0; i < challengeFourInputB.length; i++) {
    challengeFourInputB[i] = challengeFourInputB[i]*2;
}

document.getElementById('challenge4A').innerHTML = '<h1>' + challengeFourInputA.join(',') + '</h1>';
document.getElementById('challenge4B').innerHTML = '<h1>' + challengeFourInputB.join(','); + '</h1>';









/*You're working in a number zoo, and it seems that one of the numbers has gone missing! Given an array of numbers. The numbers will be unsorted values between 1 and one more than the length of the array. No values will be repeated within the array. display the number that is missing.

// Challenge 6

Examples:*/

var test1 = [1,3]; // 2
var array1 = [1,2,3];
var result = 0;
var result2 = 0;



for (i = 0 ; i < test1.length; i++){
    result += test1[i];
}
for (j = 0 ; j < array1.length; j++){
    result2 += array1[j];
}

var last = result2 - result;
console.log(result);
console.log(result2);
document.getElementById("challenge6pt1").innerHTML = '<h1>' + last + '</h1>';




var test2 = [2,3,4]; // 1
var array2 = [1,2,3,4] 
var result3 = 0;
var result4 = 0;

for (i = 0; i < test2.length; i++){
    result3 += test2[i];
}
for (i = 0; i < array2.length; i++){
    result4 += array2[i];
}

var last2 = result4 - result3;
console.log(result3);
console.log(result4);
document.getElementById("challenge6pt2").innerHTML = '<h1>' + last2 + '</h1>';

var test3 = [13,11,10,3,2,1,4,5,6,9,7,8]; // 12
var array3 = [13,12,11,10,3,2,1,4,5,6,9,7,8];
var result5 = 0;
var result6 = 0;

for (i = 0; i < test3.length; i++){
    result5 += test3[i];
}
for (i = 0; i < array3.length; i++){
    result6 += array3[i];
}

var last3 = result6 - result5;
console.log(result5);
console.log(result6);
document.getElementById("challenge6pt3").innerHTML = '<h1>' + last3 + '</h1>';







