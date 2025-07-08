// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Toggle project details
  function toggleDetails(id) {
    const el = document.getElementById(id);
    el.style.display = el.style.display === "block" ? "none" : "block";
  }
  
  // Basic form validation
  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("All fields are required!");
      return false;
    }
    return true;
  }
  