var random1= Math.floor(Math.random()*6)+1;
var randomImage = "images/dice"+random1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage);
var random2=Math.floor(Math.random()*6)+1;
var randomImage2= "images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);
if(random1>random2){
    document.querySelector("h1").textContent="player 1 wins";
}
else if(random2>random1){
    document.querySelector("h1").textContent="player 2 wins";
}
else{
    document.querySelector("h1").textContent="There is a tie";
}