

document.addEventListener('DOMContentLoaded', () => {

    
    const welcomeBanner = document.getElementById('welcome-banner');
    
    
    if (welcomeBanner) {
        let userName = localStorage.getItem('formulatorName');
        
    
        if (!userName) {
            userName = prompt("Welcome to The Formulator's Lab! What is your name?");
            if (userName && userName.trim() !== "") {
                localStorage.setItem('formulatorName', userName.trim());
            } else {
                userName = "Formulator";
            }
        }
        
        
        welcomeBanner.innerHTML = `
            <div class="welcome-box">
                <p>⚡ Welcome back, <strong>${userName}</strong>! Ready to compound today's batches?</p>
                <button id="reset-name-btn" class="secondary-btn">Change Name</button>
            </div>
        `;

        
        document.getElementById('reset-name-btn').addEventListener('click', () => {
            localStorage.removeItem('formulatorName');
            location.reload();
        });
    }

    

const registryForm = document.getElementById('registryForm');

if (registryForm) {
    registryForm.addEventListener('submit', (e) => {
        const nameInput = document.getElementById('fullName');
        const emailInput = document.getElementById('emailAddress');
        const errorContainer = document.getElementById('form-error-msg');

        let errors = [];

        
        if (errorContainer) errorContainer.style.display = 'none';

        
        if (!nameInput || nameInput.value.trim() === '') {
            errors.push('Full Name is required.');
        }
        if (!emailInput || emailInput.value.trim() === '') {
            errors.push('Email Address is required.');
        }

        if (errors.length > 0) {
            e.preventDefault(); // Stop form submission
            if (errorContainer) {
                errorContainer.innerText = errors.join(' ');
                errorContainer.style.display = 'block';
            }
        } 
        
    });
}

    

    
    const toggleNotesBtn = document.getElementById('toggle-notes-btn');
    const technicalNotes = document.getElementById('technical-notes');

    if (toggleNotesBtn && technicalNotes) {
        toggleNotesBtn.addEventListener('click', () => {
            if (technicalNotes.style.display === 'none' || technicalNotes.style.display === '') {
                technicalNotes.style.display = 'block';
                toggleNotesBtn.innerText = 'Hide Technical Stability Guidelines ▲';
                toggleNotesBtn.classList.add('active-btn');
            } else {
                technicalNotes.style.display = 'none';
                toggleNotesBtn.innerText = 'Show Technical Stability Guidelines ▼';
                toggleNotesBtn.classList.remove('active-btn');
            }
        });
    }

    
    const checkPhBtn = document.getElementById('check-ph-btn');
    const phStatusBadge = document.getElementById('ph-status-badge');

    if (checkPhBtn && phStatusBadge) {
        checkPhBtn.addEventListener('click', () => {
            
            if (phStatusBadge.dataset.status === 'optimal') {
                phStatusBadge.innerText = 'Status: Pending Calibration (pH 6.8)';
                phStatusBadge.style.backgroundColor = '#e74c3c';
                phStatusBadge.style.color = '#ffffff';
                phStatusBadge.dataset.status = 'pending';
            } else {
                phStatusBadge.innerText = 'Status: Optimal Stability (pH 5.2 Target Met)';
                phStatusBadge.style.backgroundColor = '#2ecc71';
                phStatusBadge.style.color = '#ffffff';
                phStatusBadge.dataset.status = 'optimal';
            }
        });
    }
});