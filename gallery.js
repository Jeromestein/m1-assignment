const pets = {
    dogs: [
        {
            src: "images/dog1.jpg",
            alt: "Max - Golden Retriever",
            caption: "Looking for a forever home. These sweet pups are waiting for someone to give them love and care. Could that be you?",
            description: "Max is friendly～",
            infoTitle: "About Max",
            infoText: "They are so used to approaching people. They are just like happy kids!"
        },
        {
            src: "images/dog2.webp",
            alt: "Luna - German Shepherd",
            caption: "Puppy of the Month: Karl",
            description: "Karl is COOOOOl~",
            infoTitle: "About Karl",
            infoText: "Karl sometimes easily gets lonely, but when he is with you, he is always happy!"
        }
    ],
    cats: [
        {
            src: "images/cat1.jpg",
            alt: "Whiskers - Persian",
            caption: "Curious and cuddly companions in search of a family. Meet Whiskers and friends—ready to brighten your days with purrs and play!",
            description: "Whiskers and friends are ready to welcome you~",
            infoTitle: "About Whiskers",
            infoText: "They passionately follow you no matter where you go!"
        },
        {
            src: "images/cat2.jpeg",
            alt: "Shadow - Domestic Shorthair",
            caption: "Kitten of the Month: Karla",
            description: "Say hi to Karla~",
            infoTitle: "About Karla",
            infoText: "Karlka is so calm and always quiet, but that doesn't mean she is boerd. She is always happy!"
        }
    ]
};

function displayPets(petArray, containerId) {
    const container = document.getElementById(containerId);
    
    petArray.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.className = 'pet-card';
        
        let html = `
            <img src="${pet.src}" alt="${pet.alt}" width="600">
            <div class="description-overlay">
                <p class="description-text">${pet.description}</p>
            </div>
            <p style="margin: 4px; line-height: 1.6; font-family: Arial, sans-serif; font-size: 18px; font-weight: bold;">${pet.caption}</p>
        `;
        
        petCard.innerHTML = html;
        
        // Add click event to description overlay
        const overlay = petCard.querySelector('.description-overlay');
        overlay.addEventListener('click', () => showInfoBox(pet));
        
        container.appendChild(petCard);
    });
}

function showInfoBox(pet) {
    const infoBox = document.getElementById('infoBox');
    const infoTitle = infoBox.querySelector('.info-title');
    const infoText = infoBox.querySelector('.info-text');
    
    infoTitle.textContent = pet.infoTitle;
    infoText.textContent = pet.infoText;
    
    infoBox.style.display = 'flex';
}

// Initialize when page loads
window.onload = function() {
    displayPets(pets.dogs, 'dogContainer');
    displayPets(pets.cats, 'catContainer');
    
    const closeButton = document.querySelector('.close-button');
    const infoBox = document.getElementById('infoBox');
    
    closeButton.addEventListener('click', () => {
        infoBox.style.display = 'none';
    });
    
    infoBox.addEventListener('click', (e) => {
        if (e.target === infoBox) {
            infoBox.style.display = 'none';
        }
    });
}; 