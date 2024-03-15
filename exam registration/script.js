document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get input values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const examType = document.getElementById('examType').value;
  
    // Dummy registration logic (replace with actual registration process)
    // For demo purposes, we'll just display a success message
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = `Registration successful! Full Name: ${fullName}, Email: ${email}, Exam Type: ${examType}`;
    successMessage.style.display = 'block';
  
    // Clear form fields after successful registration
    document.getElementById('registrationForm').reset();
  
    // You can add further processing here, like sending data to a server
  });
  