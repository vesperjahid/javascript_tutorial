/// convert number

let number1 = '50',
    number2 = 10,
    number3 = 'nine';

    console.log(number1+number2);  /// output : 5010 bcz 50 is string
    console.log(Number(number1) + number2); //// output : 60  Number () funtion is covert string to number
    console.log(Number(number3)); /// Output: NaN bcz nine is not a number string

//// convert int, float using pharse

console.log(parseInt(100));  ///output : 100
console.log(parseInt(1200.222));  /// output : 1200

//// float 

console.log(parseFloat(22.33));  /// output : 22.33


/// to fixed function is fixed how much number after the point
let num = 100029.43434343;
console.log(num.toFixed(2));// output : 100029.43


/////convert string

console.log(typeof num); //// output: number
console.log(num.length) /// undefined bcz length methord work only string

let output;

output = String(num);
console.log(typeof output);  //// output : string
console.log(output.length); //// length is 15