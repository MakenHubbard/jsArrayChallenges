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