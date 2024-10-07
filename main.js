// Function to prompt the user for their name and display it on the homepage
function promptUserName() {
    let userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById('greeting').innerText = `Welcome, ${userName}!`;
    }
}

// Function to enlarge the image when clicked
function enlargeImage() {
    let img = document.getElementById('profileImage');
    img.style.width = '300px'; 
    img.style.height = 'auto';
}

// Function to restore the image size
function restoreImage() {
    let img = document.getElementById('profileImage');
    img.style.width = '150px'; 
    img.style.height = 'auto';
}

// Function to change the color of navigation items on hover
function changeNavColorOnHover(navItem) {
    navItem.style.backgroundColor = 'lightblue'; 
}

// Function to reset the color of navigation items on mouse out
function resetNavColor(navItem) {
    navItem.style.backgroundColor = ''; 
