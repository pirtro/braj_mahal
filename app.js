document.addEventListener("DOMContentLoaded", function(event) {
  const form = document.getElementById("contact");

  form.addEventListener("submit", event => {
    event.preventDefault();

    const { email, subject, message } = form.elements;
    axios.post("192.142.23.2/contactform", {
        email: email
        
    })   
  });
});
