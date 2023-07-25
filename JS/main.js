/* const quesos = [ {id:1, nombre: 'AMERICAN CHEESE', precio: 9950, origen: 'Inglaterra'},
                 {id:2, nombre:'BLUE CHEESE', precio:18990, origen:'Francia'},
                 {id:3, nombre:'BRIE CHEESE', precio:19990, origen:'Francia'},
                 {id:4, nombre:'CAMBERT CHEESE', precio:15990, origen:'Francia'},
                 {id:5, nombre:'CHEEDAR CHEESE', precio:7980,origen:'Inglaterra'},
                 {id:6, nombre:'EDAM CHEESE', precio:15990, origen:'Países Bajos'},
                 {id:7, nombre:'GOUDA CHEESE', precio:5990, origen:'Países Bajos'},
                 {id:8, nombre:'FETA CHEESE', precio:12990, origen:'Grecia'}] */



const principal = document.querySelector('div#principal.principal')
const cardBoton = document.querySelectorAll('buttton.boton#add')

cardBoton.innerHTML = 'añadir'


function mostrarPlantilla(queso){
    return `<div class="card">
                <div class="imagen">🧀🧀</div>
                <div class="producto"><p>${queso.nombre}</p></div>
                <div class="precio"><p>$ ${queso.precio}</p></div>
                <div><button class="boton" id="add">add</button></div>
            </div>    `
}

function cargarProductos(array){
    principal.innerHTML = ''
    array.forEach((queso) => {
        principal.innerHTML += mostrarPlantilla(queso)
        
    });
}

cargarProductos(quesos)

