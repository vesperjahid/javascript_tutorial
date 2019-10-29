///// try catch
try{
    something();
}catch(error){
    console.log(error);
}
finally{
    console.log("competition start");
}

function go(){
    console.log("starting");
    setTimeout(function reached(){
console.log("Reched...");
    },3000);
}
go();