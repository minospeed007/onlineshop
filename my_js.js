function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
//slide show left
var index1 = 0;
function leftShow(){
  setTimeout(leftShow,2000);
var i;
var slide= document.getElementsByClassName("myslides1");
for(i=0; i< slide.length; i++){
slide[i].style.display = "none";
}
index1++;
if(index1 > slide.length){index1=1}
slide[index1 -1].style.display ="block";
}
leftShow();