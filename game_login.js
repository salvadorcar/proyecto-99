// Crea la función addUser()



function addUser() {
  player1_name = document.getElementById("player1_name_input").valuew;  // Obtén el valor del usuario con id player1_name_input y player2_name_input
  player2_name = document.getElementById("player2_name_input").valuew;  // Obtén el valor del usuario con id player1_name_input y player2_name_input

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);

    window.location = "game_page.html";   // Almacena los valores en el almacenamiento local
//Asigna "game_page.html" a window.location
}

function send() {} 
    

 function send() {}
    number1 = document.getElementById("numbre1").value;
    number2 = document.getElementById("numbre2").value;


 function send() {}
     number1 = document.getElementById("numbre1").value;
     number2 = document.getElementById("numbre2").value;
     actual_answer = parseInt(number1) * parseeInt(number2);

guestion_number = "<h4>" + number1 + "x"+ number2 +"</h4>";
input_box = "<br>respuesta : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclink='check()'>comprobar</button>";
row = question_numbre + check_button ;

document.getElementById("output").innerHTML = row;

document.getElementById("number1").value = "";
document.getElementById("number2").value = "";

