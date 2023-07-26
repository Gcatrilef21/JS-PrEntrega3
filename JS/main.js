const logoImagen = 'img/logo.svg'
const  logo = document.querySelector('img.imglogo#imglogo')
const carro = document.querySelector('i.bi-cart4#carrito')
const cantidad = document.querySelector('span.itemCarrito#itemCarrito')
const principal = document.querySelector('div.principal')
const buscar = document.querySelector('input#inputSearch')
const boton = document.querySelector('button#add.boton')
const tabla = document.querySelector('tbody#tablaCart')


logo.src = logoImagen

                        /* F U N C I O N E S  */

//Funcion Cantidad en Carrito
function showCartUnits (){
    cantidad.innerHTML = carrito.length
}
showCartUnits (carrito.length)

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

// Cargar Productos en HTML
function cargarProductos(array){
    principal.innerHTML = ''
    if(array.length > 0){
        array.forEach((queso) => {
            principal.innerHTML += retornarCards (queso)
            activarClickBotones()
        })
    }else {
        alert('No hay Prodcutos que mostrar')
    }
}


// function activar Botones
function activarClickBotones(){
    const botones = document.querySelectorAll('button.add')
    botones.forEach((boton)=>{
        boton.addEventListener('click', ()=>{
            const addProd = quesos.find((queso) => queso.id === parseInt((boton.id)))
            // console.log(addProd) Prueba de codigo
            carrito.push(addProd)
            guardarLocalStorage()
        })
    })
}


                        /* E V E N T O S  */

logo.addEventListener('mouseover', ()=>{
    logo.title = 'Ir a Inicio'
})

carro.addEventListener('mouseover', () => {
    carro.title = 'Ir a Carrito' 
})

buscar.addEventListener('search', ()=>{
    if (buscar.value.trim() !== ""){
        const resultado = quesos.filter((queso) => queso.nombre.toLowerCase().includes(buscar.value.trim().toLowerCase()))
        cargarProductos(resultado)
    }else{
        cargarProductos(quesos)
    }
})


cargarProductos(quesos)