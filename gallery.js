const pets = {
    dogs: [
        {
            src: "images/dog1.jpg",
            alt: "Max - Golden Retriever",
            caption: "Looking for a forever home. These sweet pups are waiting for someone to give them love and care. Could that be you?",
            description: "Max is friendly～"
        },
        {
            src: "images/dog2.webp",
            alt: "Luna - German Shepherd",
            caption: "Puppy of the Month: Karl",
            description: "Karl is COOOOOl~"
        }
    ],
    cats: [
        {
            src: "images/cat1.jpg",
            alt: "Whiskers - Persian",
            caption: "Curious and cuddly companions in search of a family. Meet Whiskers and friends—ready to brighten your days with purrs and play!",
            description: "Whiskers and friends are ready to welcome you~"
        },
        {
            src: "images/cat2.jpeg",
            alt: "Shadow - Domestic Shorthair",
            caption: "Kitten of the Month: Karla",
            description: "Say hi to Karla~"
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
        container.appendChild(petCard);
    });
}

// Initialize when page loads
window.onload = function() {
    displayPets(pets.dogs, 'dogContainer');
    displayPets(pets.cats, 'catContainer');
}; 