document.getElementById('showFormBtn').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'flex';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'none';
});

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the values from the form
    const name = document.getElementById('name').value;
    const objective = document.getElementById('objective').value;
    const risks = document.getElementById('risks').value;

    // Find the first hidden ornament and show it
    const ornaments = document.querySelectorAll('.ornament.hidden');
    if (ornaments.length > 0) {
        const ornament = ornaments[0];
        ornament.classList.remove('hidden');
        
        // Add data attributes to the ornament for later use
        ornament.setAttribute('data-name', name);
        ornament.setAttribute('data-objective', objective);
        ornament.setAttribute('data-risks', risks);
        
        // Add event listener to the ornament to display the info as a card when clicked
        ornament.addEventListener('click', function() {
            const card = document.createElement('div');
            card.classList.add('card-info');
            card.innerHTML = `
                <h2>Ornament Information</h2>
                <p><strong>Name:</strong> ${ornament.getAttribute('data-name')}</p>
                <p><strong>Objective:</strong> ${ornament.getAttribute('data-objective')}</p>
                <p><strong>Risks:</strong> ${ornament.getAttribute('data-risks')}</p>
                <button onclick="this.parentElement.style.display = 'none';">Close</button>
            `;
            document.body.appendChild(card);
            // Add a specific animation for the card
            card.classList.add('enter-card');
            card.style.display = 'block';
        });
    }

    // Clear the form for the next input
    document.getElementById('name').value = '';
    document.getElementById('objective').value = '';
    document.getElementById('risks').value = '';

    // Close the form
    document.getElementById('popupForm').style.display = 'none';
});
// Create snowflakes and animate them
const snowflakesContainer = document.querySelector('.snowflakes');

// Function to create snowflakes
function createSnowflakes() {
    const snowflakeCount = 100; // Number of snowflakes
    for (let i = 0; i < snowflakeCount; i++) {
        let snowflake = document.createElement('i');  // Create a snowflake element
        snowflake.style.left = `${Math.random() * 100}%`; // Random horizontal position
        snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`; // Random fall speed
        snowflake.style.animationDelay = `${Math.random() * 10}s`; // Random delay before starting fall
        snowflake.style.opacity = Math.random() * 0.7 + 0.3; // Random opacity
        snowflake.style.width = `${Math.random() * 5 + 5}px`; // Random size of snowflakes
        snowflake.style.height = snowflake.style.width; // Make them round

        snowflakesContainer.appendChild(snowflake); // Add snowflake to the container
    }
}

// Start creating snowflakes on page load
window.onload = createSnowflakes;
