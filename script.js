const textoIngresado=document.getElementById("texto-ingresado");
const contenedor=document.getElementById("div-contenedor");
const btnAgregar=document.getElementById("btn-agregar");
const linkImagen=document.getElementById("link-imagen")

btnAgregar.addEventListener("click", function(){
    const nuevaCaja= document.createElement("div");
    const nuevoParrafo=document.createElement("p");
    nuevoParrafo.textContent=textoIngresado.value
    contenedor.appendChild(nuevaCaja);
    nuevaCaja.appendChild(nuevoParrafo);
    const imagenCargada=document.createElement("img");
    imagenCargada.src=linkImagen.value;
    nuevaCaja.appendChild(imagenCargada);
    nuevaCaja.classList.add("caja");
    imagenCargada.classList.add("imagenDeLaCaja")
    textoIngresado.value=" ";
    linkImagen.value=" ";
    
})

