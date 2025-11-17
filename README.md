This includes a page that displays the accurate date the site was altered, a card display and a workking like to a outside project. 
Link to working site: 



     Script
     let currentDate = new Date().toLocaleDateString(); /*grabes the current date*/
     let date = document.querySelector("#date");   /*sets the varable for the date*/
     
     let currentYear = new Date().getFullYear(); /*grabes the current year*/
     let year = document.querySelector("#year"); /*sets the varable for the year*/
     
     date.textContent = currentDate /*Displays the date*/
     year.textContent = currentYear /*displays the current year*/ 
     
     
     
      Html
      /*Example of card display*/
      <div class="cards">
                 <div class="card">
                     <div class="card-inner">
                         <div class="card-front">
                             <h2>Toadette Club</h2>
                         </div>
                         <div class="card-back">
                             <a href="https://samirulu87-jpg.github.io/Marioclub-Toadetteclub/">styledmarioclub</a>
                         </div>
                     </div>
                 </div>
         </div>
     
     
      Css
      /*Example of card styles*/
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
     position: absolute;
     width: 100%;
     height: 100%;
     backface-visibility: hidden;
     text-align: center;
     }
     
     .card-front {
     background-color: #ffabbd;
     color: #333333;
     display: flex;
     align-items: center;
     justify-content: center;
     }
     
     .card-back {
     background-color:  #8c173a;
     color: #fff;
    transform: rotateY(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
    }
