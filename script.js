let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#date");

let currentYear = new Date().getFullYear();
let year = document.querySelector("#year");

date.textContent = currentDate
year.textContent = currentYear



const colors = ["#b3c88fff", "#e0bcb9ff", "#c8bcefff", "#d8bda8ff","#92beabff", "#d5c9b4ff", "#a9cdccff", "#aac2c9ff","#a5cfd8ff","#c0a6c5ff" ,"#c491baff","#d6ccc9ff","#c5c5a5ff ","#ded8a4ff","#fefefeff", "#cbcbcbff", "#7a7a7aff", 
];

  
/**
 * Applies a random gradient to the body background.
 */
function setRandomGradient() {
    const color1 =  colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    const color3 = colors[Math.floor(Math.random() * colors.length)];
    const color4 = colors[Math.floor(Math.random() * colors.length)];
    const color5 = colors[Math.floor(Math.random() * colors.length)];
    const angle = Math.floor(Math.random() * 360); // Random angle for variety
    const finalcolor = `linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3}, ${color4}, ${color5})`;
    document.body.style.background = finalcolor;

    const cardFronts = document.querySelectorAll(".card-front");
    cardFronts.forEach(card => {
        card.style.background = finalcolor;
    });
}



