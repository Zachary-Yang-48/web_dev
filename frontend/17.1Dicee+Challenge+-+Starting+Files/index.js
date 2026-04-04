var random_num1 = Math.random();
random_num1 = random_num1 * 6 + 1;
random_num1 = Math.floor(random_num1);

var img1 = document.getElementsByTagName("img")[0];
img1.setAttribute('src', "./images/dice" + random_num1 + ".png");

var random_num2 = Math.random();
random_num2 = random_num2 * 6 + 1;
random_num2 = Math.floor(random_num2);

var img2 = document.getElementsByTagName("img")[1];
img2.setAttribute('src', "./images/dice" + random_num2 + ".png");

if (random_num1 > random_num2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 wins"
} else if (random_num1 < random_num2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 wins"
} else {
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!"
}

