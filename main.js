//This function when called takes the value of n as a parameter, depending on the value of n, it will redirect to a different page
//I use this instead of creating 4 seperate redirect functions
function redirect(n) {
    if (n==1)
    {
      location.href = 'index.html';
    }
    if (n==2)
    {
      location.href = 'myWork.html';
    }
    if (n==3)
    {
      location.href = 'socialMedia.html';
    }
    if (n==4)
    {
      location.href = 'contact.html';
    }

  }
  

// Function to handle form submission and store data in local storage 
// some code taken from w3 schools and various forums
function submitForm() {
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        contactMethod: document.querySelector('input[name="contactMethod"]:checked').value,
        services: Array.from(document.querySelectorAll('input[name="services"]:checked')).map(checkbox => checkbox.value),
        bestTime: document.getElementById("bestTime").value,
        additionalQuestions: document.getElementById("additionalQuestions").value
    };
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    alert("Your form has been submitted!");
}


function toggleZoom(image) {
    image.classList.toggle("zoomed");
}