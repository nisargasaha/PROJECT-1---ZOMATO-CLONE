11document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    function handleScroll() {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleScroll);

    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-nav i');
    const nav = document.querySelector('.desktop-nav');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('fa-bars');
            mobileMenuBtn.classList.toggle('fa-times');
        });

        // Close menu when clicking outside or on a link
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                nav.classList.remove('active');
                mobileMenuBtn.classList.remove('fa-times');
                mobileMenuBtn.classList.add('fa-bars');
            }
        });

        // Close menu when clicking on a navigation link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                mobileMenuBtn.classList.remove('fa-times');
                mobileMenuBtn.classList.add('fa-bars');
            });
        });
    }

    // Search functionality
    const searchForm = document.querySelector('.search-container');
    const locationInput = document.getElementById('location-input');
    const restaurantInput = document.getElementById('restaurant-input');
    const locationDropdown = document.querySelector('.location-dropdown-icon');

    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const location = locationInput.value.trim();
            const searchTerm = restaurantInput.value.trim();
            
            if (location && searchTerm) {
                // Implement actual search functionality here
                console.log('Searching in', location, 'for:', searchTerm);
            }
        });
    }

    // Location dropdown interaction
    if (locationInput && locationDropdown) {
        locationInput.addEventListener('focus', function() {
            locationDropdown.classList.add('active');
        });

        locationInput.addEventListener('blur', function() {
            setTimeout(() => {
                locationDropdown.classList.remove('active');
            }, 200);
        });
    }

    // App link form functionality
    const appLinkForm = document.getElementById('app-link-form');
    const appLinkInput = document.getElementById('app-link-input');
    const formMessage = document.getElementById('form-message');
    const emailRadio = document.getElementById('email');
    const phoneRadio = document.getElementById('phone');

    if (appLinkForm) {
        // Function to validate email
        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        // Function to validate phone number
        function isValidPhone(phone) {
            return /^\d{10}$/.test(phone);
        }

        // Update input type and placeholder based on selection
        function updateInputType() {
            const isEmail = emailRadio.checked;
            appLinkInput.type = isEmail ? 'email' : 'tel';
            appLinkInput.placeholder = isEmail ? 'Enter your email' : 'Enter your phone number';
            formMessage.textContent = '';
        }

        emailRadio.addEventListener('change', updateInputType);
        phoneRadio.addEventListener('change', updateInputType);

        // Form submission handler
        appLinkForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const inputValue = appLinkInput.value.trim();
            
            if (emailRadio.checked && !isValidEmail(inputValue)) {
                formMessage.textContent = 'Please enter a valid email address';
                formMessage.style.color = 'red';
                return;
            }
            
            if (phoneRadio.checked && !isValidPhone(inputValue)) {
                formMessage.textContent = 'Please enter a valid 10-digit phone number';
                formMessage.style.color = 'red';
                return;
            }

            // Success case
            formMessage.textContent = 'App link sent successfully!';
            formMessage.style.color = 'green';
            appLinkInput.value = '';
        });
    }

    // Card hover effects are handled by CSS
});