document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  navegacionFija();
  crearGaleria();
  scrollNav();
}

function navegacionFija() {
  const barra = document.querySelector(".header");
  const sobreFestival = document.querySelector(".sobre-festival");
  const body = document.querySelector("body");

  window.addEventListener("scroll", function () {
    if (sobreFestival.getBoundingClientRect().top < 0) {
      barra.classList.add("fija");
      body.classList.add("body-scroll");
    } else {
      barra.classList.remove("fija");
      body.classList.remove("body-scroll");
    }
  });
}

//Crea el efecto de scroll
function scrollNav() {
  const enlaces = document.querySelectorAll(".nav-principal a");

  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();
      const seccionScroll = e.target.attributes.href.value;
      const seccion = document.querySelector(seccionScroll);
      seccion.scrollIntoView({ behavior: "smooth" });
    });
  });
}

//Crear la galeria
function crearGaleria() {
  const galeria = document.querySelector(".galeria-imagenes");

  for (let i = 1; i <= 12; i++) {
    const imagen = document.createElement("div");

    imagen.innerHTML = `
        <img
          src="build/img/thumb/${i}.jpg"
          alt="imagen de galeria"
        /> 
      `;

    imagen.onclick = function () {
      mostrarImagen(i);
    };

    galeria.appendChild(imagen);
  }
}

//Muestra la imagen en grande
function mostrarImagen(id) {
  const imagen = document.createElement("div");

  imagen.innerHTML = `
        <img
          src="build/img/grande/${id}.jpg"
          alt="imagen de galeria"
        /> 
    `;

  //Crea Overlay con la imagen
  const overlay = document.createElement("div");

  overlay.appendChild(imagen);
  overlay.classList.add("overlay");

  overlay.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("fijar-body");
    overlay.remove();
  };

  //Boton para cerrar imagen
  const cerrarImagen = document.createElement("p");

  cerrarImagen.textContent = "X";
  cerrarImagen.classList.add("boton-cerrar");
  cerrarImagen.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("fijar-body");
    overlay.remove();
  };
  overlay.appendChild(cerrarImagen);

  //Añade eL overay al HTML
  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add("fijar-body");
}
