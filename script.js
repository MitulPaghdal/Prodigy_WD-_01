// script.js
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scroll-active', window.scrollY > 0);
  });
  
  var menuItems = document.querySelectorAll('#navbar ul li a');
  
  menuItems.forEach(function(item) {
    item.addEventListener('mouseover', function() 
    {
    // Change color on hover
      this.style.color = '	#5780ca'; 
    });
  
    item.addEventListener('mouseout', function() 
    {
    // Restore original color
      this.style.color = '#fff'; 
    });
  });
  