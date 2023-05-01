Parse.initialize("APP_ID", "KEY"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "URL";

var currentUser = Parse.User.current();
if (currentUser) {
    
} else {
    Parse.User.logOut();
    //location.href = 'index.html'
}

function login() {
    console.log("test")
    // Create a new instance of the user class
    console.log(document.getElementById("username").value)
    console.log(document.getElementById("password").value)
    var user = Parse.User
        .logIn(document.getElementById("username").value, document.getElementById("password").value).then(function(user) {
        location.href = 'index.html';
    }).catch(function(error){
        console.log("Error: " + error.code + " " + error.message);
        document.getElementById("errorOutput").innerHTML = "Error: " + error.message
    });
}

document.getElementById("login").addEventListener("click", async function () {
  login();
});