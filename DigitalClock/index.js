const banner = document.querySelector("#clock");

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    banner.innerHTML = date.toLocaleTimeString();
} , 1000);
