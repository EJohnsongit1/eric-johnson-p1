var user = 'Eric';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Welcome to our virtual recipe book.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

var price = 50;
    websiteDiscount = '.50';
    websitePrice = price - (price * websiteDiscount);
    priceEl = document.getElementById('price');
    websitePriceEl = document.getElementById('website-price');

priceEl.textContent = price.toFixed(2);
websitePriceEl.textContent = websitePrice.toFixed(2);