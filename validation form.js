function validateForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form inputs
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    // Clear previous error messages
    var errorContainer = document.getElementById("errorContainer");
    errorContainer.innerHTML = "";
  
    // Perform validation
    var errors = [];
  
    if (fullName.length < 5) {
      errors.push("Name must be at least 5 characters long.");
    }
  
    if (!email.includes("@")) {
      errors.push("Invalid email address.");
    }
  
    if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
      errors.push("Invalid phone number.");
    }
  
    if (password === "password" || password === fullName || password.length < 8) {
      errors.push("Invalid password.");
    }
  
    if (password !== confirmPassword) {
      errors.push("Passwords do not match.");
    }
  
    // Display errors, if any
    if (errors.length > 0) {
      errors.forEach(function (error) {
        var errorElement = document.createElement("p");
        errorElement.textContent = error;
        errorContainer.appendChild(errorElement);
      });
    } else {
      // Form is valid, submit the form or perform further actions
      alert("Form submitted successfully!");
    }
  }
  var form = document.getElementById("myForm");
  form.addEventListener("submit", validateForm);
  function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var showPasswordBtn = document.getElementById("showPasswordBtn");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showPasswordBtn.textContent = "Hide Password";
    } else {
      passwordInput.type = "password";
      showPasswordBtn.textContent = "Show Password";
    }
  }

  