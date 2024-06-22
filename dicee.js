var randomNumber1 =Math.floor(Math.random()*6)+1;// random 1 - 6
var randomDiceImageName="dice"+randomNumber1+".png";// lấy tên của dice cho bước tt
var randomDiceImageSource="images/"+randomDiceImageName;// lấy source để hiện ảnh dice
var image1=document.querySelectorAll("img")[0]; // image1 là biến chứa ảnh 1
image1.setAttribute("src", randomDiceImageSource);// set src cho ảnh 1

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImageName2="dice"+randomNumber2+".png";
var randomDiceImageSource2="images/"+randomDiceImageName2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImageSource2);
// chọn ng chiến thắng
if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="Người chơi 1 thắng";
} else if(randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="Người chơi 2 thắng";
} else {
    document.querySelector("h1").innerHTML="Hòa";
}