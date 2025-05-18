// Function to open the login form
function openLogin() {
    document.getElementById("loginPopup").style.display = "block";
}

// Function to close the login form
function closeLogin() {
    document.getElementById("loginPopup").style.display = "none";
}

// // Add event listeners to open and close the login form
// document.getElementById("openButton").addEventListener("click", openLogin);
// document.getElementById("closeButton").addEventListener("click", closeLogin);

const menuIcon = document.getElementById('menu-icon');
  const navlist = document.querySelector('.navlist');

  // Optional: Add this if using the overlay
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  menuIcon.addEventListener('click', () => {
    navlist.classList.toggle('active');
    overlay.classList.toggle('show');
  });

  overlay.addEventListener('click', () => {
    navlist.classList.remove('active');
    overlay.classList.remove('show');
  });