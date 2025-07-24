document.getElementById("login").addEventListener("click", function() {
    var indexNumber = document.getElementById("index number").value;
    var password = document.getElementById("password").value;

    if (indexNumber === "" || password === "") {
        alert("Please enter both index number and password.");
    } else if ((indexNumber === "2425130003" && password === "Koliko2025") ||
               (indexNumber === "67890" && password === "mypassword")) {
        // Redirect to the next page only if credentials are correct
        window.location.href = "home.html";
    } else {
        alert("Invalid index number or password.");
    }
});