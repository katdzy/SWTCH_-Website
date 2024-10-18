 // Get the hamburger and sidebar elements
 const hamburger = document.querySelector('.hamburger');
 const sidebarMenu = document.querySelector('.sidebar-menu');
 const closeBtn = document.querySelector('.close-btn');

 // Open the sidebar when hamburger is clicked
 hamburger.addEventListener('click', () => {
   sidebarMenu.classList.add('active');
 });

 // Close the sidebar when the close button is clicked
 closeBtn.addEventListener('click', () => {
   sidebarMenu.classList.remove('active');
 });

 // JavaScript to change background position based on scroll
 window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const textElement = document.querySelector('.gaming-title');
  
  // Adjust background position
  textElement.style.backgroundPosition = `${scrollPosition * 3.5}px 0`;
});

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const textElement = document.querySelector('.compe-title');
  
  // Adjust background position
  textElement.style.backgroundPosition = `${scrollPosition * 4.0}px 0`;
});