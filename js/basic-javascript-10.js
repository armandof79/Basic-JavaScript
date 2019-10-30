function Function1() {
    var a = 10;
    while (a > 0) {        
        document.getElementById("par1").innerHTML += a + " ";
        a = a - 1;
    }
}


function Function2() {
    var str = document.getElementById("string").value;
    var length = str.length;
    document.getElementById("par2").innerHTML = "Your text: " + str + " is " + length + " characters long."
}

function Function3() {
    for (i = 0; i < 11; i++) {
        counter = i;   
        document.getElementById("par3").innerHTML += counter;
    }
}
function Function4() {
    var array = ["This", " is", " a", " test."];
    document.getElementById("par4").innerHTML = array[3];
}

const obj = { name: "Jon Snow", title: "Night's Watch Recruit", schedule: "9pm to 5am" };
function Function5() {
    document.getElementById("par5").innerHTML = "Name: " + obj.name + " Title: " + obj.title;
}
function Function5_2() {
    obj.second_title = "Dragon Rider";
    obj.title = "Lord Commander of The Night's Watch";
    document.getElementById("par5").innerHTML = "Name: " + obj.name + " Title: " + obj.title + "/" + obj.second_title;
}
//function Function6() {
//    document.getElementById("par6").innerHTML = Function6(); 
//    return "Happy birthday ";
//}
let book = {
    title: "Somehow I Manage",
    author: "Michael Scott",
    category: "Non-fiction",
    price: "$29.99",
}
function Function7() {
    document.getElementById("par7").innerHTML = "Book: " + book.title + " by " + book.author;
}


function Function8() {
    for (i = 0; i < 10; i++) {
        if (i === 3) { par8.innerHTML += "Three" + "<br>"; continue; }
        if (i === 8) { break; }
        par8.innerHTML += i + "<br>";
    }
}