// Selector de fondos del cartel
document.addEventListener('DOMContentLoaded', function() {
  const backgroundOptions = document.querySelectorAll('.background-option');
  const cartel = document.getElementById('cartel');
  
  backgroundOptions.forEach(option => {
    option.addEventListener('click', function() {
      // Remover clase active de todas las opciones
      backgroundOptions.forEach(opt => opt.classList.remove('active'));
      
      // Añadir clase active a la opción clicada
      this.classList.add('active');
      
      // Cambiar el fondo del cartel
      const backgroundImage = this.getAttribute('data-bg');
      cartel.style.backgroundImage = `url('./img/${backgroundImage}')`;
    });
  });
});