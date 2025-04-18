document.addEventListener("DOMContentLoaded", function() {
    fetch('json/players.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(player => {
        //unique ID for the players carousel converting their names to lowercase and removing spaces
          const carouselId = 'carousel-' + player.name.toLowerCase().replace(/\s+/g, '-');
          const playerSection = document.getElementById(carouselId);
          
          createCarousel(playerSection, player.images);
        });
      })
      .catch(error => console.log("Error loading player data: ", error));
  
    function createCarousel(carouselElement, images) {
      let currentIndex = 0;
  
      const imgElement = document.createElement("img");
      imgElement.src = images[currentIndex];
      carouselElement.appendChild(imgElement);
  
      const nextButton = document.createElement("button");
      nextButton.innerHTML = "Next";
      nextButton.onclick = function() {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
      };
      carouselElement.appendChild(nextButton);
    }
  });
  
  
  