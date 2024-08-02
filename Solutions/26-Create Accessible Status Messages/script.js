// alertScript.js
document.getElementById('alertButton').addEventListener('click', function() {
    var alertMessage = document.getElementById('alertMessage');
    
    if (alertMessage.textContent === "Could not connect to the server") {
        alertMessage.textContent = "Connected to the server";
        alertMessage.classList.remove('alert');
        alertMessage.classList.add('success');
    } else {
        alertMessage.textContent = "Could not connect to the server";
        alertMessage.classList.remove('success');
        alertMessage.classList.add('alert');
    }
});

// statusScript.js
document.getElementById('statusButton').addEventListener('click', function() {
    var statusMessage = document.getElementById('statusMessage');
    
    if (statusMessage.textContent.includes("Checking server connection")) {
        statusMessage.textContent = "Status: Connected to the server";
    } else {
        statusMessage.textContent = "Status: Checking server connection...";
    }
});
