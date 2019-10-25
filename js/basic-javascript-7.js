// JavaScript source code
function Local_Var() {
    var x = "x is a local variable";
    document.write(x);
}

var y = "y is a global variable"
function Global_Var() {
    document.write(y);
}

function Inproper_Use() {
    console.log(x);
}

function Conditional_1() {
    var a = new Date().getHours();
    if (a < 17) {
    document.getElementById("cond_par").innerHTML = "It's 5:00 some somewhere. Party time!";
    }
    else {
        document.getElementById("cond_par").innerHTML = "Party time!";
    }
}
function Append_Text() {
    if (document.getElementById("text-field").value == null) {
        document.getElementById("par").innerHTML = "You have to type something";
    }
    else {
        var textEntered = document.getElementById("text-field").value;
        document.getElementById("par").innerHTML += textEntered;
        document.getElementById("text-field").value = '';
        delete textEntered;
    }
}

function Time_Function() {
    var Time = new Date().getHours;
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It's morning time.";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It's evening time";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}