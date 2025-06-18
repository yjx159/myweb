
var h2=document.getElementsByClassName('h2');
var sloganText="Welcome to our website!";
h2[0].addEventListener('mouseover',function1);
function function1() {
  alert(sloganText);
}
 var more=document.getElementById('more-info');
 more.addEventListener('click',function2);
 function function2(){
  window.location.href="window.html";
  alert("You will be redirected to the window page.");
 }
