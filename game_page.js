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
button_check="<button  onclick='checkanswer()'>Check</button>"
answer_textbox="<input id='answeroftheday'class='form-control'>"
document.getElementById("output").innerHTML=printonscreen+answer_textbox+button_check;
correct_answer=firstnumber*secondnumber;
console.log(correct_answer);
}
function checkanswer(){
    get_answer=document.getElementById("answeroftheday").value;
    if (get_answer==correct_answer) {
    if (answer_player==player1_name) {
    player1score=player1score+1;
    document.getElementById("player1score").innerHTML=player1score
    question_player=player1_name;
    answer_player=player2_name;
    document.getElementById("questionturn").innerHTML=question_player;
    document.getElementById("answerturn").innerHTML=answer_player;
    }
    else if (answer_player==player2_name) {
    player2score=player1score+1;
    document.getElementById("player2score").innerHTML=player2score
    question_player=player2_name;
    answer_player=player1_name;
    document.getElementById("questionturn").innerHTML=question_player;
    document.getElementById("answerturn").innerHTML=answer_player;    
    }
    }
    else if (get_answer!=correct_answer) {
    if (answer_player==player1_name) {
        question_player=player1_name;
        answer_player=player2_name;
        document.getElementById("questionturn").innerHTML=question_player;
        document.getElementById("answerturn").innerHTML=answer_player;    
    }
    else if (answer_player==player2_name) {
    question_player=player2_name;
    answer_player=player1_name;
    document.getElementById("questionturn").innerHTML=question_player;
    document.getElementById("answerturn").innerHTML=answer_player;       
    }   
    }
    document.getElementById("output").innerHTML="";
    answertoproblem=("The answer was "+correct_answer);
    document.getElementById("output").innerHTML=answertoproblem;
    }