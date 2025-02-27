function checkEligibility() {

    let passportStatus = document.querySelector('input[name="passport"]:checked');
    let message = document.getElementById("eligibilityMessage");

    if (!passportStatus) {
        message.innerHTML = " Please select an option.";
        message.style.color = "red";
        return;
    
    }

    if (passportStatus.value === "yes") {
        message.innerHTML = " You are eligible to travel!";
        message.style.color = "green";
    }
     else 
     {
        message.innerHTML = " Sorry, you need a passport to travel.";
        message.style.color = "red";
    }

}

function calculateCost() {
    let destination = document.getElementById("destination").value;
    let costMessage = document.getElementById("costMessage");

    let costs = {
        "paris": 1500,
        "london": 1400,
        "california": 1800
    };

    if (destination && costs[destination]) {
        costMessage.style.color = "green";
        costMessage.textContent = `Estimated Cost: $${costs[destination]} per person.`;
    } else {
        costMessage.style.color = "red";
        costMessage.textContent = "Please select a valid destination.";
    }
}




