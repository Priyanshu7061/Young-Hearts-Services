// GSAP Animations for Hero Section
gsap.from("#hero h2", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
gsap.from("#hero p", { duration: 1, delay: 0.5, opacity: 0, ease: "power1.out" });
gsap.from(".cta-button", { duration: 1, delay: 1, scale: 0.5, opacity: 0, ease: "back" });

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Scroll animations for service cards using ScrollReveal
ScrollReveal().reveal('.service', {
    delay: 300,
    duration: 1000,
    distance: '50px',
    origin: 'bottom',
    interval: 200
});

// Service request function
function requestService(serviceType) {
    const name = prompt('Enter your name:');
    const email = prompt('Enter your email:');
    const message = prompt('Enter your message:');
    const fileInput = document.getElementById('upload-photo');  // For file uploads

    if (name && email && message) {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);
        formData.append('serviceType', serviceType);

        if (fileInput && fileInput.files.length > 0) {
            formData.append('photo', fileInput.files[0]);
        }

        fetch('http://localhost:5000/api/request-service', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                alert(data.message);
            }
        })
        .catch(error => {
            alert('Error submitting service request. Please try again later.');
        });
    } else {
        alert('Please fill in all details.');
    }
}
