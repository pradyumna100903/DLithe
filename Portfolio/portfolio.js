
function displayGreeting() {
    let greeting;
    let currentHour = new Date().getHours(); 

    if (currentHour < 12) {
        greeting = "Good Morning! ☀️";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon! ☀️";
    } else {
        greeting = "Good Evening! 🌙";
    }

    
    let greetingElement = document.createElement("h2");
    greetingElement.textContent = greeting;
    greetingElement.style.textAlign = "center"; 
    greetingElement.style.color = "#333"; 

    
    document.body.insertBefore(greetingElement, document.body.firstChild);
}


window.onload = displayGreeting;
