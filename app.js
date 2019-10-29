/// array sort

/// reverse array item


const months = new Array('jan','feb','mar','april','may','june');

months.reverse();

// concatenate 2 aray

let num = [1,2,3],
    num2 = [4,5,6,7];

console.log(num.concat(num2)); /// output: 1,2,3,4,5,6,7

////// order array item

console.log(months.sort()); /// sort by assending order

///// sort by desending order. this is tricky part. if we reverse the assendenting item . it will desending order

console.log(months.sort().reverse());


///// number order by lower to grather

let arrayNumber= [1,12,112,2,23,34,56,64,21,456,787,98];

console.log(arrayNumber.sort(function(number1,number2){
    return number1 - number2;
}));


///// number order by grather to lower

console.log(arrayNumber.sort(function(number1,number2){
    return number2 - number1;
}));

