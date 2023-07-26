const logoImagen = 'img/logo.svg'
const logo = document.querySelector('img.imglogo#imglogo')
const carro = document.querySelector('i.bi-cart4#carrito')
const cantidad = document.querySelector('span.itemCarrito#itemCarrito')
const principal = document.querySelector('div.principal#principal')



logo.src = logoImagen


logo.addEventListener('mouseover', ()=>{
    logo.title = 'Ir a Inicio'
})

carro.addEventListener('mouseover', () => {
    carro.title = 'Ir a Carrito' 
})

                        /* F U N C I O N E S  */

//Funcion Cantidad en Carrito
function showCartUnits (){
    cantidad.innerHTML = carrito.length
}
showCartUnits ()

// Plantillas de Productos 
function retornarCards (queso){
    return `<div class="card">
                <img class="imgProduct" src="${queso.img}" alt="${queso.nombre}">
                <div class="producto">
                    <p>${queso.nombre}</p>
                </div>
                <div class="precio">
                    <p>$${queso.precio}</p>
                </div>
                <div>
                    <button class="boton" id="add">agregar</button>
                </div>
            </div>`
}

// Cargar Productos en HTML

function cargarProductos(){
    principal.innerHTML = ''
    quesos.forEach((queso) => {
        principal.innerHTML += retornarCards (queso)
    });
}

cargarProductos(quesos)