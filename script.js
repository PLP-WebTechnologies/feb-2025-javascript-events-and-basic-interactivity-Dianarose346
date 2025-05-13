// Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Button was clicked!');
  });
  
  document.getElementById('keypressInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key was pressed!');
    }
  });
  
  document.getElementById('doubleClickBtn').addEventListener('dblclick', () => {
    document.body.style.backgroundColor = 'lightblue';
  });
  
  // Interactive Elements
  document.getElementById('changeTextBtn').addEventListener('click', () => {
    const btn = document.getElementById('changeTextBtn');
    btn.textContent = 'You Clicked Me!';
    btn.style.backgroundColor = 'orange';
  });
  
  const images = ['images.jpeg', 'pexels-photo-129208.webp'];
  let currentImageIndex = 0;
  document.getElementById('nextImageBtn').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('galleryImage').src = images[currentImageIndex];
  });
  
  function openTab(tabId) {
    const tabs = document.querySelectorAll('.tabcontent');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
  }
  openTab('Tab1'); // Default open first tab
  
  // Form Validation
  document.getElementById('myForm').addEventListener('submit', (event) => {
    const nameInput = document.getElementById('name');
    if (!nameInput.value) {
      alert('Please fill out the name field!');
      event.preventDefault(); // Prevent form submission
    }
  });
  
  document.getElementById('emailForm').addEventListener('submit', (event) => {
    const emailInput = document.getElementById('email');
    if (!emailInput.validity.valid) {
      alert('Please enter a valid email address!');
      event.preventDefault();
    }
  });
  
  document.getElementById('passwordForm').addEventListener('submit', (event) => {
    const passwordInput = document.getElementById('password');
    if (passwordInput.value.length < 8) {
      alert('Password must be at least 8 characters long!');
      event.preventDefault();
    }
  });
  