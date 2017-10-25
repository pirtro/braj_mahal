document.addEventListener("DOMContentLoaded", function(event) {
  const form = document.getElementById("contact");

  form.addEventListener("submit", event => {
    event.preventDefault();

    const { email, subject, message } = form.elements;
    window.open(`mailto:${email.value}?subject=${subject.value}&body=${message.value}`);    
  });
});
