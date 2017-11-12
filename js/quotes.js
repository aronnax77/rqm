/* Author: Richard Myatt
   Date: 17 October 2017
*/


// function to reveal and hide an element using the w3.css classes
function reveal_hide(elem) {
  var el =document.getElementById(elem);
  if(el.className.indexOf("w3-show") == -1) {
    el.className += " w3-show";
  } else {
    el.className = el.className.replace(" w3-show", "");
  }
}
