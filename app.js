/// function  of js


///  basic function expression

// addition

function addition(num1='0',num2='0'){
    return Number(num1) + Number(num2);
}

console.log(addition(12,10));
console.log(addition(1,15));
console.log(addition(2,1));


/// modulus 

function checkNumber(Number=0){
    return Number%2
}
if(checkNumber(8)==0){
    console.log("enen");
}else{
    console.log("Odd");
}


/// imvoked function

(function(name){
    console.log("hello "+name);
})("vesper")


///// function with methord

const musicplayer = {
    play: function(id){
        console.log(`Music play with id ${id}`);
    },
    pause: function(){
        console.log('pause');
    }
}

musicplayer.play(20);

musicplayer.pause();

//// can be create methord out side the function

musicplayer.remove = function(id){
    console.log(`${id} is removed from playlist`);
}

musicplayer.remove(20);