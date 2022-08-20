const botonEncriptar = document.querySelector("#btonEncriptar");
const botonDesencriptar = document.querySelector("#btonDesencriptar");
const botonCopiar = document.querySelector("#btonCopiar");

const textoUsuario = document.querySelector("#textoUsuario");
const mostrarTexto = document.querySelector("#texto-resultado");
const ventanaInicio = document.querySelector("#imagenInicio");
const ventanaResultado = document.querySelector("#contenedorTexto");

let textoFinal;


const llaves = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

function encriptar() {
  const textoIngresado = textoUsuario.value.toLowerCase();
  textoFinal = textoIngresado;

  
  if (textoIngresado.trim() != "") {
    for (const propiedad in llaves) {
      textoFinal = textoFinal.replaceAll(propiedad, llaves[propiedad]);
    }
    mostrarVentana();
  } else {
    alert("Error!  Ingrese el texto a encriptar..");
  }
}

function desencriptar() {
  textoFinal = textoUsuario.value.toLowerCase();


  if (textoUsuario.value.trim() != "") {
    for (const propiedad in llaves) {
      textoFinal = textoFinal.replaceAll(llaves[propiedad], propiedad);
    }
    mostrarVentana();
  } else {
    alert("Error! por favor ingrese el texto a desencriptar..");
  }
}


function mostrarVentana() {
  ventanaInicio.style.display = "none";
  ventanaResultado.style.display = "flex";

  mostrarTexto.innerHTML = textoFinal;
  textoUsuario.value = "";
}

function copiarTexto() {
  const text = mostrarTexto.textContent;

  navigator.clipboard
    .writeText(text)
    .then(() => console.log("Copiado con exito!"))
    .catch((err) => console.log("Error al copiar el texto."));
}


botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", copiarTexto);