// Challenge 5
var array1 = [1,2];
var array2 = [1];
//display = [2] Given two arrays remove all values from array1 that are present in array2. Display the final results of array1
for (i = 0; i < array2.length; i++) {
    for (z = 0; z < array1.length; z++) {
        if (array2[i] == array1[z])
        array1.splice(z,1);
    }
    }

console.log(array1.join(','));
document.getElementById('challenge5ex1').innerHTML = '<h1>' + array1.join(",") + '</h1>';

var array1 = [1,2, 4, 7, 5, 9];
var array2 = [5, 9, 2];
//display = [1, 4, 7]
for (i = 0; i < array2.length; i++) {
    for (z = 0; z < array1.length; z++) {
        if (array2[i] == array1[z])
        array1.splice(z,1);
    }
    }

console.log(array1.join(','));
document.getElementById('challenge5ex2').innerHTML = '<h1>' + array1.join(",") + '</h1>';
