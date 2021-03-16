var name1="";
var name2="";
function nextpage(){
name1=document.getElementById("number1_name").value;
name2=document.getElementById("number2_name").value;
localStorage.setItem("firstname",name1);
localStorage.setItem("secondname",name2);
window.location="game_page.html"
}