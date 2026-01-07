let imagenPrincipal = document.querySelector('#imagen-principal');

imagenPrincipal.addEventListener('click', function() {
  let srcActual = imagenPrincipal.getAttribute('src');
  
  if(srcActual === 'images/perfil1.jpg') {
    imagenPrincipal.setAttribute('src', 'images/perfil2.jpg');
    imagenPrincipal.setAttribute('alt', 'Diego con su pasión');
  } else {
    imagenPrincipal.setAttribute('src', 'images/perfil1.jpg');
    imagenPrincipal.setAttribute('alt', 'Diego entrenando');
  }
});


let inputNombre = document.querySelector('#nombre-usuario');
let botonCambiar = document.querySelector('#btn-cambiar');
let tituloPrincipal = document.querySelector('#titulo-principal');

// Guardar el nombre original
let nombreOriginal = tituloPrincipal.textContent;

botonCambiar.addEventListener('click', function() {
  let nombreUsuario = inputNombre.value.trim();
  
  if(nombreUsuario === '') {
    alert('Por favor, escribe tu nombre');
    return;
  }
  
  // Cambiar el título con el nombre del usuario
  tituloPrincipal.textContent = '¡Hola ' + nombreUsuario + '!';
  
  // Guardar en localStorage
  localStorage.setItem('nombreVisitante', nombreUsuario);
  
  // Limpiar el input
  inputNombre.value = '';
  
  // Mensaje de confirmación
  alert('¡Bienvenido/a ' + nombreUsuario + '!');
});

// También permitir cambiar con Enter
inputNombre.addEventListener('keypress', function(e) {
  if(e.key === 'Enter') {
    botonCambiar.click();
  }
});

// Cargar nombre si existe en localStorage
window.addEventListener('load', function() {
  let nombreGuardado = localStorage.getItem('nombreVisitante');
  
  if(nombreGuardado) {
    tituloPrincipal.textContent = '¡Hola ' + nombreGuardado + '!';
  }
});


// ========================================
// RECURSO JS 3: Objeto en movimiento (20 pts)
// ========================================
let objetoMovil = document.querySelector('#objeto-movil');

// Cambiar emoji al hacer clic
let emojis = ['💪', '🥋', '🎵', '🔬', '🏋️', '🎯'];
let indiceEmoji = 0;

objetoMovil.addEventListener('click', function() {
  indiceEmoji = (indiceEmoji + 1) % emojis.length;
  objetoMovil.textContent = emojis[indiceEmoji];
  
  // Pequeña animación de rebote al hacer clic
  objetoMovil.style.animation = 'none';
  setTimeout(function() {
    objetoMovil.style.animation = 'mover 3s ease-in-out infinite';
  }, 10);
});


// Efecto de scroll suave para las secciones
document.querySelectorAll('a[href^="#"]').forEach(function(enlace) {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    let destino = document.querySelector(this.getAttribute('href'));
    if(destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animación de aparición de tarjetas al hacer scroll
let tarjetas = document.querySelectorAll('.tarjeta');

function mostrarTarjetas() {
  tarjetas.forEach(function(tarjeta) {
    let posicion = tarjeta.getBoundingClientRect().top;
    let alturaVentana = window.innerHeight;
    
    if(posicion < alturaVentana - 100) {
      tarjeta.style.opacity = '1';
      tarjeta.style.transform = 'translateY(0)';
    }
  });
}

// Inicializar tarjetas ocultas
tarjetas.forEach(function(tarjeta) {
  tarjeta.style.opacity = '0';
  tarjeta.style.transform = 'translateY(30px)';
  tarjeta.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', mostrarTarjetas);
window.addEventListener('load', mostrarTarjetas);
