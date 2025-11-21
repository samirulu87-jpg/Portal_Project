let cardsList = document.querySelector(".cards");
let cards = [];
cards.push({title: "Project 1", url: "https://samirulu87-jpg.github.io/Marioclub-Toadetteclub/", description: "Toadettclub"});
cards.push({title: "Project 2", url: "https://samirulu87-jpg.github.io/updated-weather-news-app/weather_report.html", description: "Weather/News App"});
cards.push({title: "Project 3", url: "https://samirulu87-jpg.github.io/CuteCateCoffeeCafe/", description: "Cat Coffee App"});
cards.push({title: "Project 4", url: "https://samirulu87-jpg.github.io/Javascript-Memory-Game/", description: "Cute Duck Memory game"});

cards.forEach((item) => {
    cardsList.innerHTML += `
    <div class="card">
                <div class="card-inner">
                    <div class="card-front">
                        <h2>${item.title}</h2>
                    </div>
                    <div class="card-back">
                        <a href="${item.url}" target="_blank">${item.description}</a>
                    </div>
                </div>
            </div>
            `;
});

let navList = document.querySelector("nav ul");

cards.forEach((item) => {
    navList.innerHTML+= `
    <li><a href="${item.url}"target="_blank">${item.title}</a></li>`;
});


// Run when page loads
setRandomGradient();
