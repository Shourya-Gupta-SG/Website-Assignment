function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function handleSubmit(e) {
  e.preventDefault();
  alert("Thank you for registering! We'll reach out soon.");
}
