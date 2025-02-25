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




