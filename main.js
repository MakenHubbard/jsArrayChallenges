

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







