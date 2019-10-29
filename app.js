////   array create

/// index array

const number = [1,2,3,4,5];

console.log(number);  /// indexing

/*
Output: (5) [1, 2, 3, 4, 5]
0: 1
1: 2
2: 3
3: 4
4: 5
length: 5
*/

// another methord to create array

const months = new Array('jan','feb','mar','april','may','june');

console.log(months);

////  length of array

console.log(months.length) // output : 6


////// More useful function for array

// find data in array

console.log(months.indexOf('mar')); /// output: 2

// add new data in array at last possition

months.push('july');
console.log(months); 
/* output:
["jan", "feb", "mar", "april", "may", "june", "july"]
0: "jan"
1: "feb"
2: "mar"
3: "april"
4: "may"
5: "june"
6: "july"
*/

// add new data in array at fast possition

months.unshift('Months:');
console.log(months);
/* output:
 0: "Months:"
1: "jan"
2: "feb"
3: "mar"
4: "april"
5: "may"
6: "june"
7: "july"
*/

// add new data in array at middle or any possition

months.splice(2, 0, "aug","Sep");
console.log(months);
/* output:
0: "Months:"
1: "jan"
2: "aug"
3: "Sep"
4: "feb"
5: "mar"
6: "april"
7: "may"
8: "june"
9: "july"
*/

/// remove data from array last

months.pop();
console.log(months);

/// remove data from array fast

months.shift();
console.log(months);

/// remove data from array any position

months.splice(3,2); /// 3 where to cut, 2 how much cut
console.log(months);

