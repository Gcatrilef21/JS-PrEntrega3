const logoImagen = 'img/logo.svg'
const  logo = document.querySelector('img.imglogo#imglogo')
const carro = document.querySelector('i.bi-cart4#carrito')
const cantidad = document.querySelector('span.itemCarrito#itemCarrito')
const principal = document.querySelector('div.principal#principal')
const buscar = document.querySelector('input#inputSearch')
const boton = document.querySelector('button#add.boton')
const tabla = document.querySelector('tbody#tablaCart')


logo.src = logoImagen

                        /* F U N C I O N E S  */

//Funcion Cantidad en Carrito
function showCartUnits (){
    cantidad.innerHTML = carrito.length
}
showCartUnits ()

// Plantillas de Productos (Tamplate String)
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
                    <button class="add" id="${queso.id}">agregar</button>
                </div>
            </div>`
}

// Plantilla de Carrito (Tamplate String)


// Cargar Productos en HTML
function cargarProductos(array){
    principal.innerHTML = ''
    array.forEach((queso) => {
        principal.innerHTML += retornarCards (queso)
    });
}
cargarProductos(quesos)

//
function activarClickBotones(){
    const botones = document.querySelectorAll('button.add')
    botones.forEach((boton)=>{
        boton.addEventListener('click', ()=>{
            alert('Se ha agregado con exito')
            let addProd = quesos.find((queso) => queso.id === parseInt((boton.id)))
            carrito.push(addProd)
            //console.table(carrito)
        })
    })
}
activarClickBotones()

                        /* E V E N T O S  */

logo.addEventListener('mouseover', ()=>{
    logo.title = 'Ir a Inicio'
})

carro.addEventListener('mouseover', () => {
    carro.title = 'Ir a Carrito' 
})

buscar.addEventListener('search', ()=>{
    const resultado = quesos.filter((queso) => queso.nombre.toLowerCase().includes(buscar.value.toLowerCase()))
    cargarProductos(resultado)
})