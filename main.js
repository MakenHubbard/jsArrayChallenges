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

