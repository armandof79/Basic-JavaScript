// JavaScript source code
function numbertypes() {
    document.write(isNaN("abc"));

    document.write( isNaN(7));
    document.write(0 / 0);
    document.write(-3e308);
    document.write(1 > 2, 2 > 1);
    console.log(5 / 2);
    document.write("3" + 3);
    console.log(3 > 6); 
    document.write(5 == 5, 4 == 5);
    document.write(5 === 5, "5" === 6, "5" === 5, "5" === "6");
    document.write(2 > 1 && 5 == 5, 1 > 1 && 3 < 5);
    document.write(2 == 2 || 5 == 3, 7 == 5 || "pepsi" == "coke");
    document.write(!("red" == "blue"), !("yellow" == "yellow"));
}
