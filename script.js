document.getElementById('showFormBtn').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'flex';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'none';
});

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();


    const name = document.getElementById('name').value;
    const objective = document.getElementById('objective').value;
    const risks = document.getElementById('risks').value;

    
    const ornaments = document.querySelectorAll('.ornament.hidden');
    if (ornaments.length > 0) {
        const ornament = ornaments[0];
        ornament.classList.remove('hidden');
        
    
        ornament.setAttribute('data-name', name);
        ornament.setAttribute('data-objective', objective);
        ornament.setAttribute('data-risks', risks);
        
        
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
            
            card.classList.add('enter-card');
            card.style.display = 'block';
        });
    }

   
    document.getElementById('name').value = '';
    document.getElementById('objective').value = '';
    document.getElementById('risks').value = '';

   
    document.getElementById('popupForm').style.display = 'none';
});

const snowflakesContainer = document.querySelector('.snowflakes');


function createSnowflakes() {
    const snowflakeCount = 100; 
    for (let i = 0; i < snowflakeCount; i++) {
        let snowflake = document.createElement('i');  
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`; 
        snowflake.style.animationDelay = `${Math.random() * 10}s`; 
        snowflake.style.opacity = Math.random() * 0.7 + 0.3; 
        snowflake.style.width = `${Math.random() * 5 + 5}px`;
        snowflake.style.height = snowflake.style.width; 

        snowflakesContainer.appendChild(snowflake); 
    }
}


window.onload = createSnowflakes;
