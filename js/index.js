document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('yellowButton').onclick = switchYellow;


function switchGray() {
document.getElementsByTagName('body')[0].style.backgroundImage = "url('galaxy_images/galaxy test.001.jpeg')";
document.getElementsByTagName('body')[0].style.backgroundColor = 'purple'; }

/* was able change the tagging style here, need to figure out how to make image cover entire BG */

function switchWhite() {
  document.getElementsByTagName('body')[0].style.backgroundImage = "url('galaxy_images/galaxy test.002.jpeg')";
  document.getElementsByTagName('body')[0].style.color = 'white'; 
}

function switchBlue() {
  document.getElementsByTagName('body')[0].style.backgroundImage = "url('galaxy_images/galaxy test.003.jpeg')";
  document.getElementsByTagName('body')[0].style.color = 'white'; 
}

function switchYellow() {
  document.getElementsByTagName('body')[0].style.backgroundImage = "url('galaxy_images/galaxy test.004.jpeg')";
  document.getElementsByTagName('body')[0].style.color = 'black'; 
}