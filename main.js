function next(){
    window.location="1index.html";
    var o = document.getElementById("player1").value
    var r = document.getElementById("player2").value
    console.log(o+"is player 1")
    console.log(r+"is player 2")
}
function send(){
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4> " + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type = 'text' id='input_check_box'>";
    check_button = "<br><br><button class= 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}