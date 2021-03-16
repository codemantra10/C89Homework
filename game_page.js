var player1_name=localStorage.getItem("firstname");
var player2_name=localStorage.getItem("secondname");
document.getElementById("player1id").innerHTML=player1_name;
document.getElementById("player2id").innerHTML=player2_name;
var player1score=0;
var player2score=0;
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
var question_player=player1_name;
var answer_player=player2_name;
document.getElementById("questionturn").innerHTML=question_player;
document.getElementById("answerturn").innerHTML=answer_player;
function send(){
firstnumber=document.getElementById("number1").value;
secondnumber=document.getElementById("number2").value;
printonscreen=(firstnumber+"x"+secondnumber+"=")
document.getElementById("output").innerHTML=printonscreen;
button_check="<button  onclick='check()'>Check</button>"
answer_textbox="<input id='answeroftheday'class='form-control'>"
document.getElementById("output").innerHTML=printonscreen+answer_textbox+button_check;
correct_answer=firstnumber*secondnumber;
console.log(correct_answer);

}