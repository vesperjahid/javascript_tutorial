/// function  of js


///  basic function declaration

function helloworld(){
    console.log("Hello world");
}

helloworld();

///// function with perametters

function greetings(name){
    console.log("hello "+name+" , welcome to our site");
}

greetings("vesper");

//// function with default pearmetters

function visitors(user='',site='demo'){
    console.log("welcome "+user+" to "+site);
}
visitors('vesper');