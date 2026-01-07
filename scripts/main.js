// Cambiar imagen al hacer clic
let miImagen = document.querySelector('img');

miImagen.onclick = function() {
  let srcActual = miImagen.getAttribute('src');
  if(srcActual === 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=500') {
    miImagen.setAttribute('src', 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500');
  } else {
    miImagen.setAttribute('src', 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=500');
  }
}

// Personalización con nombre del visitante
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function establecerNombreVisitante() {
  let nombreVisitante = prompt('¿Cuál es tu nombre?');
  if(!nombreVisitante) {
    establecerNombreVisitante();
  } else {
    localStorage.setItem('nombreVisitante', nombreVisitante);
    miTitulo.textContent = 'Hola ' + nombreVisitante + ', soy Diego';
  }
}

// Verificar si hay nombre guardado
if(!localStorage.getItem('nombreVisitante')) {
  establecerNombreVisitante();
} else {
  let nombreGuardado = localStorage.getItem('nombreVisitante');
  miTitulo.textContent = 'Hola ' + nombreGuardado + ', soy Diego';
}

// Botón para cambiar nombre
miBoton.onclick = function() {
  establecerNombreVisitante();
}
