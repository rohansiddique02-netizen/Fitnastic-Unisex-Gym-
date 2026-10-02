document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. MOBILE NAVIGATION MENU TOGGLE
    // ==========================================================================
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileBtn && navLinks) {
        // Toggle mobile menu state
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Auto-close drawer menu when a link is clicked
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                mobileBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // ==========================================================================
    // 2. SMOOTH SCROLLING FOR CTA BUTTONS
    // ==========================================================================
    const scrollButtons = document.querySelectorAll('.cta-btn[data-target]');
    
    scrollButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const targetId = e.currentTarget.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ==========================================================================
    // 3. MEMBERSHIP PLAN SELECTION HANDLER
    // ==========================================================================
    const planButtons = document.querySelectorAll('.select-plan-btn');
    
    planButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const planName = e.currentTarget.getAttribute('data-plan');
            
            // Placeholder notice (Replace with payment gateway integration, e.g., Stripe/Razorpay)
            alert(`Proceeding to ${planName} Plan Registration.`);
        });
    });

    // ==========================================================================
    // 4. BMR / DAILY CALORIE CALCULATOR (Mifflin-St Jeor Equation)
    // ==========================================================================
    const bmrForm = document.getElementById('bmr-form');
    const resultDiv = document.getElementById('calc-result');

    if (bmrForm && resultDiv) {
        bmrForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const gender = document.getElementById('gender').value;
            const age = parseFloat(document.getElementById('age').value);
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);
            const activity = parseFloat(document.getElementById('activity').value);

            // Validation check
            if (isNaN(age) || isNaN(weight) || isNaN(height)) {
                resultDiv.style.display = 'block';
                resultDiv.innerHTML = `<span style="color: #ff3e3e;">Please enter valid numeric inputs.</span>`;
                return;
            }

            // Calculate BMR
            let bmr;
            if (gender === 'male') {
                bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
            } else {
                bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
            }

            // Total Daily Energy Expenditure
            const tdee = Math.round(bmr * activity);

            // Output Result
            resultDiv.style.display = 'block';
            resultDiv.innerHTML = `Estimated Daily Maintenance Calories: <span class="result-highlight">${tdee} kcal</span>`;
        });
    }

    // ==========================================================================
    // 5. DYNAMIC COPYRIGHT YEAR
    // ==========================================================================
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});
