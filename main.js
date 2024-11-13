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


// Enlarges the image on click
function toggleZoom(image) {
    image.classList.toggle("zoomed");
}

// Function that increases the text size when the button on My Work is clciked. Assisted by StackOverflow
function increaseTextSize() {
  const strongTags = document.querySelectorAll('strong');
  strongTags.forEach(tag => {
      let currentSize = window.getComputedStyle(tag).fontSize;
      let newSize = parseFloat(currentSize) * 1.2 + 'px'; // Increase font size by 20%
      tag.style.fontSize = newSize;
  });
}


function toggleColors() {
  const body = document.body;
  if (body.style.backgroundColor === 'Black') {
      body.style.backgroundColor = 'White';
      body.style.color = 'Black';
  } else {
      body.style.backgroundColor = 'Black';
      body.style.color = 'White';
  }
}


function showAltText() {
  document.getElementById('altText1').innerText = document.getElementById('img1').alt;
  document.getElementById('altText2').innerText = document.getElementById('img2').alt;
  document.getElementById('altText3').innerText = document.getElementById('img3').alt;
}
