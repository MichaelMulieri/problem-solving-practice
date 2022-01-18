// Print all even numbers from 0 – 100

for (i = 0; i < 101; i++) {
    if(i % 2==0)
    console.log(i);
}

// Print the 5 times table up to 30

for (var i = 1; i < 31; i++) { 
    var product = i * 5;
    console.log(product);
}

// Calculate the sum of numbers within an array

var arr = [5, 7, 9, 12];
var sum = 0;
    for ( var i = 0; i < arr.length; i++){
        sum += arr[i];
}

    console.log(sum);
    
// write a function that calculates the sum of numbers within an array


function sumArray(arr){
    var sum = 0;
    for ( var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
}

sumArray([5, 7, 9, 12]);

sumArray([10, 10, 10]);

sumArray([100, 490, -7, 1000, 756]);

// Calculate the sum of every other number in an array

var arr = [23, 80, 77, 15, 78, 49, 99, 57];
var sum = 0;
    for( var i = 0; i < arr.length; i++){
        if( i % 2 == 0){
            sum += arr[i];
        }
    }
    console.log(sum);











    

    