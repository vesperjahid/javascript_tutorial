/// control sytstement

//// For loop

for(let i=0;i<=10;i++){
    if(i==2)
    continue;
    console.log(i);
}

for(let i=0;i<=10;i++){
    if(i==2)
    break;
    console.log(i);
}


//// while loop

const product = ['book','pen','dairy'];

let i=0
while(i<product.length){
    console.log(product[i]);
    i++;

}

/// for each

product.forEach(function(assingnment, index){
    console.log(`${index}:${assingnment}`);
});

/// data retrive from object

const emp = {
    name:"jahid",
    age : 25,
    job : "web development",
    skill : ['html','css','js','php'],
    nationality: "Bangladesh"
}

for(let key in emp){
    console.log(emp[key]);
}