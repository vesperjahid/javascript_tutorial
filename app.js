////   array object

let Employee = {
    name: 'Jahidul islam',
    age: 27,
    job: 'Web developer',
    email: 'vesper@muslim.com',
    favoriteMusic: ['bangla','english','hindi'],
    living:{
        City:'Dhaka',
        Country:"Bangladesh"
    },
    bornYear: function(){
        return new Date().getFullYear() - this.age;
    },
    getJob: function(){
        return this.job;
    }
 
}

console.log(Employee.name);
console.log(Employee.age);
console.log(Employee.job);
console.log(Employee.email);
console.log(Employee.favoriteMusic);
console.log(Employee.favoriteMusic[2]);
console.log(Employee.living);
console.log(Employee.living.City);
console.log(Employee.bornYear());
console.log(Employee.getJob());



//// another way to create array

let car = [
    {model:"Toyota", speed:'300cc'},
    {model:"Xcorola", speed:'250cc'},
    {model:"oddi", speed: '380cc'}
];

for(let i=0;i<car.length;i++){
    console.log(car[i]);
    console.log(car[i].model);
    console.log(car[i].speed);
}