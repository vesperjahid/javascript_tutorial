//date of js

// create object for date

const today = new Date();
let output;

output = new Date('auguest 17 1992');  ///  month day year

output = today.getMonth();
output = today.getDay();  ////0 = sunday, 1 = monday so on
output = today.getFullYear();
output = today.getHours();
output = today.getMinutes();
output = today.getSeconds();
today.setMonth(5);
output = today.getMonth();
today.setFullYear(2000);
output = today.getFullYear();


console.log(output);