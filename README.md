This includes a page that displays the accurate date the site was altered, a card display and a workking like to a outside project. 
Link to working site: https://samirulu87-jpg.github.io/Portal_Project/ 



     Script
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
                   document.body.style.backgroundRepeat = "no-repeat";
                   document.body.style.backgroundSize = "100% 100%"; // Stretch exactly
                   document.body.style.height = "100%"; // Ensure full viewport
                   document.documentElement.style.height = "100%"; // Ensure html is full height
                   document.body.style.margin = "0";
               
                   
                   const cardFronts = document.querySelectorAll(".card-front");
                   cardFronts.forEach(card => {
                       card.style.background = finalcolor;
                   });
               }
               
------------------------------------------------------------------
      Html
      /*Example of card display*/
                     <!DOCTYPE html>
               <html lang="en">
               <head>
                   <link rel="stylesheet" href="style.css">
                   <meta charset="UTF-8">
                   <meta name="viewport" content="width=device-width, initial-scale=1.0">
                   <title>My Project Portal</title>
               </head>
               <body>
                       <nav id="nav">
                           <ul>
                           </ul>
                       </nav>
               
                   <!-- Cards container -->
                   <div class="cards"></div>
                   
               
                  <!-- footer -->
                       <footer class="bg-dark" id="foot">
                           &copy; <span id="year"></span> | Samantha Anderson | Utah |
                           <a
                           id="ttechLink"
                           target="_blank"
                           rel="noopener noreferrer"
                           href="https://tooeletech.edu/"
                           >Tooele Techinal College</a>
                           <br />
                           Last updated: <span id="date">Fri Sep 05</span>
                       </footer>
                       <script src="script.js"></script>
                       <script src="cards.js"></script>
               
                   </body>
               </html>
-----------------------------------------------------
     
      Css
      /*Example of card styles*/
     
          a {
            color: white;
          }
          .cards {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 1rem;
          flex-wrap: wrap;
          padding: 1rem;
          }
          
          .card {
          width: 250px;
          height: 350px;
          perspective: 800px;
          border-style: none;
          }
          
          .card-inner {
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          }
          
          .card:hover .card-inner {
          transform: rotateY(180deg);
          }
          
          .card-front,
          .card-back {
            border-radius: 20px;
            border: 4px solid black;
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          text-align: center;
          }
          
          .card-front {
          background-color: #ffffff;
          color: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          }
          
          .card-back {
          background-color:  #000000;
          color: #000000;
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
          }
          
          /* footer */
           a {
              font-size:1.5rem;
           }
           header,
          footer {
            border-top: 2px solid #323232;
            background-color: #404040;
            color: white;
            text-align: center;
            padding: 1.25rem;
          }
          footer {
            position: fixed;
            bottom: 0;
            width: 100%;
          }
          #ttechLink {
            color: white;
          }
          @media screen and (max-width: 820px) {
            .cards {
              justify-content: center;
            }
          }
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          } /* Nav */
          nav {
             border-bottom: 2px solid #323232;
            display: flex; /* 1 */
            justify-content: space-between; /* 2 */
            padding: 1rem 2rem; /* 3 */
            background-color:  #404040;; /* 4 */
          }
          nav ul {
            display: flex; /* 5 */
            list-style: none; /* 6 */
          }
          nav li {
            padding-left: 1rem; /* 7! */
          }
          nav a {
            text-decoration: none;
            color: #fff;
          }
          nav h2 {
            color: #fff;
          }
          
          
          .body {
             transition: background-color 1.5s ease;
          }
----------------------------------------------------------------
                    cards.js
                         let cardsList = document.querySelector(".cards");
          let cards = [];
          cards.push({title: "Project 1", url: "https://samirulu87-jpg.github.io/Marioclub-Toadetteclub/", description: "Toadettclub"});
          cards.push({title: "Project 2", url: "https://samirulu87-jpg.github.io/updated-weather-news-app/weather_report.html", description: "Weather/News App"});
          cards.push({title: "Project 3", url: "https://samirulu87-jpg.github.io/CuteCateCoffeeCafe/", description: "Cat Coffee App"});
          cards.push({title: "Project 4", url: "https://samirulu87-jpg.github.io/Javascript-Memory-Game/", description: "Cute Duck Memory game"}); //creates all the titles, links and describtion for each card
          
          cards.forEach((item) => { //grabs all the cards 
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
          }); //adds all of this to html to creat the card format, repkacing each new card with the relivent information created above 
          
          let navList = document.querySelector("nav ul"); 
          
          cards.forEach((item) => { //selects all the nav bar eliments 
              navList.innerHTML+= `
              <li><a href="${item.url}"target="_blank">${item.title}</a></li>`; //the link and title for each project 
          });
          
          
          // Run when page loads
          setRandomGradient(); //this is the gradient for each card
