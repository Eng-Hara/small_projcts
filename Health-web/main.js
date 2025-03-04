
// jQuery Code
$('nav a').click(function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top - 20
    }, 500);
  });
  


$(document).ready(function() {
    // Mobile menu toggle
    $('#mobile-menu').click(function() {
        $('#mobile-nav').slideToggle();
    });

    // CTA button animation
    $('#cta-btn').hover(
        function() { $(this).addClass('transform scale-105') },
        function() { $(this).removeClass('transform scale-105') }
    );

    // Load services with jQuery
    const services = ['Emergency Care', 'Cardiology', 'Dental Care'];
    const servicesHtml = services.map(service => `
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold mb-3">${service}</h3>
            <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button class="mt-4 text-blue-600 hover:text-blue-700 service-btn">
                Learn More
            </button>
        </div>
    `).join('');
    $('#services-container').html(servicesHtml);
});

// Vanilla JavaScript Code
// Load doctors
const doctors = [
    { name: 'Dr. Sarah Johnson', specialty: 'Cardiologist' },
    { name: 'Dr. Michael Chen', specialty: 'Neurologist' }
];

const doctorsContainer = document.getElementById('doctors-container');
doctors.forEach(doctor => {
    const doctorDiv = document.createElement('div');
    doctorDiv.className = 'bg-white p-6 rounded-lg shadow-lg';
    doctorDiv.innerHTML = `
        <h3 class="text-xl font-bold mb-2">${doctor.name}</h3>
        <p class="text-blue-600">${doctor.specialty}</p>
        <p class="text-gray-600 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    `;
    doctorsContainer.appendChild(doctorDiv);
});

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Waad ku mahad san tahi xirirkaga! Waxaan kagaso jawabi donnaa sida ugu dhaqsiyaha badan.');
    this.reset();
});

// Service button click handler
document.querySelectorAll('.service-btn').forEach(button => {
    button.addEventListener('click', function() {
        const service = this.parentElement.querySelector('h3').textContent;
        alert(`More information about: ${service}`);
    });
});

 // Display current date in footer using vanilla JavaScript
 var footerParagraph = document.querySelector('footer p');
 var currentDate = new Date();
 footerParagraph.innerText += " | Today: " + currentDate.toDateString();