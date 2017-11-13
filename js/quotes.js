/* Author: Richard Myatt
   Date: 17 October 2017
*/

var quotations;
var blq = document.querySelector('blockquote');
var btn = document.querySelector('button');
var cite = document.querySelector('cite');
btn.addEventListener('click', changeTxt);

var requestURL = 'json/quotations.json';
var request = new XMLHttpRequest();

function makeRequest() {
  request.onreadystatechange = getJson;
  request.open('GET', requestURL);
  request.response = 'json';
  request.send();

  getJson();
}

function getJson() {
  if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        quotations = JSON.parse(request.response);
      } else {
        alert('There was a problem with the request.');
      }
    }
}

function rnd() {
  return Math.floor(Math.random() * 50);
}

function changeTxt() {
  var r = rnd();
  blq.innerText = quotations[r].quote;
  cite.innerText = quotations[r].attribution;
}

window.onload = makeRequest();
