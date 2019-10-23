// JavaScript source code
function clientInfo() {
    var clients = {
        name: "John",
        dob: 05 / 15 / 1975,
        occupation: "plumber"
    };
    delete clients.occupation;
    document.getElementById("Dictionary").innerHTML = clients.occupation;
}