// JavaScript source code
function Yoda_Quote() {
    var part1 = "\"Do or do not, ";
    var part2 = "there is no try\"";
    var fullQuote = part1.concat(part2);
    document.getElementById("Yoda").innerHTML = fullQuote;
}
function Yoda_Quote2() {
    var quote2 = "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.";
    var section = quote2.slice(77);
    document.getElementById("Yoda2").innerHTML = section ;
}
function toUpper_Search() {
    var sentence1 = "Bears, Beets, Battlestar Galactica.";
    document.getElementById("uppersearch").innerHTML = sentence1.toUpperCase() + " Beets is at position " + sentence1.search("Beets");
}
function Convert_Number() {
    var x = new Date().getHours();
    document.getElementById("tostring").innerHTML = "This is hour number " + x.toString() + " of the day.";
}
function Convert_Number2() {
    var y = Math.PI;
    document.getElementById("topre").innerHTML = y.toPrecision(5);
}
function Convert_Number3() {
    var a = Math.PI;
    var b = "PI"
    document.getElementById("fixedvalueof").innerHTML = b.valueOf() + ": " + a.toFixed(2);
}