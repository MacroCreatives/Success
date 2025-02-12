const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});

// Get the form element
const form = document.querySelector('.contact-form');

// Add an event listener to the form submission event
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Clear the flag in local storage
  localStorage.removeItem('successFormShown');

  // Submit the form using JavaScript
  // You can use the fetch API or XMLHttpRequest to submit the form
  // For example:
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: new FormData(form),
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  // Redirect to the success page
  window.location.href = 'https://macrocreatives.github.io/Success/';
});




