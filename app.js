/// control sytstement

//// if else

const age = 16;
const nationality= "Bangladesh";

if((age>=18) && (nationality =="Bangladesh")){
    console.log("you can vote");
}else{
    console.log("you are under 18");
}

///// if else using ternary operator

console.log(age>=18?"you are adult":`you are only ${age}`);



///////////// Switch case

const paymentMethord = "card";

switch(paymentMethord){
    case 'cash': 
        console.log(`${paymentMethord} is selected`);
        break;
    case 'check':
        console.log("we will check & infrom");
        break;
    case 'card':
        console.log(`${paymentMethord} is selected,  Payment proccessing`);
        break;
    default:
        console.log(" Please select  valid payment methord");
}


/// another example

const cars = ['Hybrid','toyota','lamvorgini','Oddi'];

let selectcar = String(1);
let car;

switch(selectcar){
    case '0':
        car = cars[0];
        break;
    case '1':
        car = cars[1];
            break;
    case '2':
        car = cars[2];
            break;
     case '3':
        car = cars[2];
            break;
    default:
        car = "Please, select a valid car";
}

console.log(car);