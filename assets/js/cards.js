
function addCards(data) {
    const cardContainer = document.getElementById("#vista .card-container");
    cardContainer.innerHTML = ""; // limpiar el contenedor
    
    data.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");
      
      const title = document.createElement("h2");
      title.innerText = item.title;
      card.appendChild(title);
      
      const image = document.createElement("img");
      image.src = item.image;
      card.appendChild(image);
      
      const description = document.createElement("p");
      description.innerText = item.description;
      card.appendChild(description);
      
      cardContainer.appendChild(card);
    });
  }
  