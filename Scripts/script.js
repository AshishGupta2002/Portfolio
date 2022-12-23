// All Constant variable

const menuBtnElement = document.getElementById('menu-btn');
const navbarElement = document.getElementById('navbar');
const menuitemElement=document.getElementById('menuitem');
const iBtn=document.getElementById('ibtn');
var loadingElement=document.getElementById('loading');



// All Event Listners

menuBtnElement.addEventListener('click', slideMenuBar);
menuitemElement.addEventListener('click',slideMenuBar);
// All Functions


function myFunction(){
  loadingElement.style.display='none';

}
function slideMenuBar() {
  navbarElement.classList.toggle('active');
  iBtn.classList.toggle('active');

}






