document.addEventListener("DOMContentLoaded", function () {
  // Form submission event
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;

    // Display a simple alert (this can be customized or replaced with an AJAX call)
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Optionally, reset the form after submission
    form.reset();
  });
});
