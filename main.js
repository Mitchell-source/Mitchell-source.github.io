function ShowName() {
    var name = document.getElementById("nameInput").value;
    document.getElementById("greeting").innerHTML = "Hello, " + name + "!";
}

function enlargeImage() {
    let img = document.getElementById('profileImage');
    img.style.width = '300px'; 
    img.style.height = 'auto';
}

function changeNavColorOnHover(navItem) {
    navItem.style.backgroundColor = 'lightblue'; 
}

function resetNavColor(navItem) {
    navItem.style.backgroundColor = ''; 
}
