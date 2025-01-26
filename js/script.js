document.getElementById('envelope').addEventListener('click', function() {
  this.classList.toggle('open');
});

// Surprise button functionality
document.getElementById('surprise-btn').addEventListener('click', function(event) {
  event.stopPropagation(); // Prevents the envelope from toggling if the button is clicked
  const envelope = document.getElementById('envelope');
  envelope.classList.add('open');
});
