// alert("Hi, there!");

// footer auto update copyright year
var d = new Date();
var n = d.getFullYear();
document.getElementById("year").innerHTML = n;

// for the quote preferences
var endpoint = 'https://type.fit/api/quotes';

function getQuote() {
  // fetch the json url data
  fetch(endpoint)
    .then(response => response.json())  
    // random generated quote
    .then(data => JSON.stringify(data[Math.floor(Math.random(data) * data.length)]))
    // generated quote
    .then(data2 => displayQuote(`"${JSON.parse(data2).text}" 
    - ${JSON.parse(data2).author}`))
    // if generated error result occur
    .catch = () => {
      console.log("An error occurred");
    };
}

// random quote when refresh 
function displayQuote(quote) {
  var quoteText = document.querySelector('.quote-text');
  quoteText.textContent = quote;
document.querySelector('.copyQuote').innerHTML = "Copy quote ";
}
var newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);
getQuote();

// target button class  new-quote
var newQuoteButton = document.querySelector('.new-quote');
// this is the event listener for next button
newQuoteButton.addEventListener('click', getQuote);

// copying the quote item
function copyElementText() {
  // get the text element value
  var text = document.querySelector('.quote-text').innerText;
  // create an element for copying text
  var elem = document.createElement("textarea");
  // add the created element just for the mean time
  document.body.appendChild(elem);
  // get the data from the variable text
  elem.value = text;
  // select all the text quote
  elem.select();
  // copying the selected quote
  document.execCommand("copy");
  // removing the recently created text container
  document.body.removeChild(elem);
  // changing the copy text into copied text
  document.querySelector('.copyQuote').innerHTML = "Quote copied! ";
}
