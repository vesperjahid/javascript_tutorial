let intro = "welcome to javascript tutorial";
let name = "Jahid, ";


// length of string  

let output = intro.length;

// concate of 2 string

output= name.concat(intro);

// uppercase

output = intro.toUpperCase();

// lower

output = name.toLowerCase();

// position of keyword using index

output= intro.indexOf("javascript");

//substring  (works from left to right)

output = intro.substring(4); /// output: ome to javascript tutorial
output = intro.substring(0,10); /// output: welcome to

/// slice (works from right to left)

output = intro.slice(-6); /// output: tutorial

/// slice (works from left to right)
output = intro.slice(0,10); /// output: tutorial   


/// split 

output = intro.split(" ");

/* output:   
(4) ["welcome", "to", "javascript", "tutorial"]
0: "welcome"
1: "to"
2: "javascript"
3: "tutorial"
*/


/// Replace 

output = intro.replace("javascript","js");


/// include (check string are avaiable or not, return true or false)

output = intro.includes("javascript");

/// Repeat 

output = name.repeat("6");
console.log(output);