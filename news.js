let newsTicker = document.getelementById("newsTicker");

  
let headlines = [
    "🚀 New AI Breakthrough in 2025!",
    "⚽ Football World Cup Highlights!",
    "🌍 Global Summit on Climate Change Begins!"
];

let index = 0;
function updateNewsTicker() {
    document.getElementById("newsTicker").textContent = headlines[index];
    index = (index + 1) % headlines.length;
}

setInterval(updateNewsTicker, 3000); 

function DarkMode() {
    document.body.classList.toggle("dark-mode");
}




