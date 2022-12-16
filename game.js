
const player = document.getElementById("player");
const computer = document.getElementById("computer");


const choices = ["rock","paper","scissors"];

var pc;
function random_choice_computer(){

    let random = Math.round(Math.random()*2);
    let computer_choice = choices[random];

    if(computer_choice == "scissors"){
        pc = 1;
        computer.classList.add("bi-scissors");
    }else{
        computer.classList.remove("bi-scissors");
    }if(computer_choice == "rock"){
        computer.classList.add("bi-circle-fill");
        pc = 2;
    }else{
        computer.classList.remove("bi-circle-fill");
    }if (computer_choice == "paper") {
        computer.classList.add("bi-book");
        pc = 3;
    }else{
        computer.classList.remove("bi-book");
    }
}

var choice;

$(document).ready(function(){

    $(".item1").click(function(){

        choice = 1;
        $(this).addClass("active");
        random_choice_computer();
        checkWin();
        setTimeout(() => {
            window.location.reload(false);
        },500);
    });
    $(".item2").click(function(){

        choice = 2;
        $(this).addClass("active");
        random_choice_computer();
        checkWin();
        setTimeout(() => {
            window.location.reload(false);
        },500);
    });
    $(".item3").click(function(){

        choice = 3;
        $(this).addClass("active");
        random_choice_computer();
        checkWin();
        setTimeout(() => {
            window.location.reload(false);
        },500);
    });
    
  });
var result = document.getElementById("result");
var player_score = document.getElementById("player_score");
var pc_score = document.getElementById("pc_score");

function checkWin(){
    
    if(choice == "1" && pc == "1"){
      result.innerHTML = "berabere";
    }
    if(choice == "2" && pc == "2"){
        result.innerHTML = "berabere";
    }
    if(choice == "3" && pc == "3"){
        result.innerHTML = "berabere";
    }

    if(choice == "1" && pc == "2"){
        result.innerHTML = "computer kazandı";
        sessionStorage.pc_score = Number(sessionStorage.pc_score) + 1;
    }
    if(choice == "1" && pc == "3"){
          result.innerHTML = "player kazandı";
          sessionStorage.player_score = Number(sessionStorage.player_score) + 1;
    }


    if(choice == "2" && pc == "1"){
          result.innerHTML = "player kazandı";
          sessionStorage.player_score = Number(sessionStorage.player_score) + 1;
    }
    if(choice == "2" && pc == "3"){
        result.innerHTML = "computer kazandı";
        sessionStorage.pc_score = Number(sessionStorage.pc_score) + 1;

    }
    if(choice == "3" && pc == "2"){
        result.innerHTML = "player kazandı";
        sessionStorage.player_score = Number(sessionStorage.player_score) + 1;
    }
    if(choice == "3" && pc == "1"){
        result.innerHTML = "computer kazandı";
        sessionStorage.pc_score = Number(sessionStorage.pc_score) + 1;
    }

    player_score.innerHTML = sessionStorage.player_score;
    pc_score.innerHTML = sessionStorage.pc_score;
}





if (typeof (Storage) !== "undefined") {

    if (sessionStorage.player_score) {
       
      } else {
        sessionStorage.player_score = 0;
      }
    if (sessionStorage.pc_score) {
      
    } else {
      sessionStorage.pc_score = 0;
    }
  } else {
    alert("Tarayıcınız Web Storage API desteklemiyor.");
  }

  player_score.innerHTML = sessionStorage.player_score;
  pc_score.innerHTML = sessionStorage.pc_score;