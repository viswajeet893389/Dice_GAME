var rand1 = Math.floor(Math.random()*6) + 1;
var rand2 = Math.floor(Math.random()*6) + 1;

console.log(rand1 + "and" + rand2);

switch (rand1) {
  case 1:
    document.getElementById('myImg1').src="image/dice1.png";
    break;
  case 2:
    document.getElementById('myImg1').src="image/dice2.png";
    break;
  case 3:
    document.getElementById('myImg1').src="image/dice3.png";
    break;
  case 4:
    document.getElementById('myImg1').src="image/dice4.png";
    break;
  case 5:
    document.getElementById('myImg1').src="image/dice5.png";
    break;
  case 6:
    document.getElementById('myImg1').src="image/dice6.png";
}

switch (rand2) {
  case 1:
    document.getElementById('myImg2').src="image/dice1.png";
    break;
  case 2:
    document.getElementById('myImg2').src="image/dice2.png";
    break;
  case 3:
    document.getElementById('myImg2').src="image/dice3.png";
    break;
  case 4:
    document.getElementById('myImg2').src="image/dice4.png";
    break;
  case 5:
    document.getElementById('myImg2').src="image/dice5.png";
    break;
  case 6:
    document.getElementById('myImg2').src="image/dice6.png";
}

if(rand1>rand2)
document.querySelector(".status").innerHTML = "<span class='flag'>🚩</span>You win!";
else if(rand1<rand2)
document.querySelector(".status").innerHTML = "Computer wins!<span class='flag'>🚩</span>";
else if(rand1===rand2)
document.querySelector(".status").innerHTML = "Draw!";
