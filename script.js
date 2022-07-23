
//about section code //

let tablinks = document.getElementsByClassName("tab-links");
let tabContent= document.getElementsByClassName("tab-content");

function opentab(tabName) {

   for(tablink of tablinks){
      tablink.classList.remove("active-link");
   }

   for(tabcontent of tabContent){
      tabcontent.classList.remove("active-tab");
   }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabName).classList.add("active-tab");

}
// about section code//
// var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// );
// menu code
sidemenu = document.getElementById("sidemenu");
function openMenu(){
   sidemenu.style.right = '0px';
   
}
function closeMenu(){
   sidemenu.style.right = '-200px';

}
