
let productos=[
    {id:1, nombre: "Collar Aria", cantidad: 1,descripcion: "Collar combinado con pendiente de caracol y perlas.", precio:352, img:`images\collar1.jpg`},
//     faltan agregar los demás productos//
]




// traigo variables desde el html y las inicializo para poder usarlas

const informacionCompra = document.getElementById('informacionCompra');
const contenedorCompra = document.getElementById('contenedorCompra');
const productosCompra = document.getElementById('productosCompra');
const grid = document.getElementById('grid');
const carrito = document.getElementById('carrito');
const numero = document.getElementById("numero");
const header = document.querySelector("#header");
const total = document.getElementById('total');
const body = document.querySelector("body");
const x = document.getElementById('x')







let lista = []
let valortotal = 0


// me falta ver cómo hacer para "conectar" el producto en la pagina, con el boton de comprar y que aparezca acá





function visualizarProductos() {
    grid.innerHTML = ""
    for (let i = 0; i < productos.length; i++) {
        grid.innerHTML += `<div><img src="${productos[i].urlImagen}"><div class="informacion"><p>${productos[i].nombre}</p><p class="precio">$${productos[i].valor}</p><button onclick=comprar(${i})>Comprar</button></div></div>`
    }
}






function comprar(indice) {
    lista.push({ nombre: productos[indice].nombre, precio: productos[indice].valor })
    numero.innerHTML = lista.length
    numero.classList.add("diseñoNumero")
    return lista
}

carrito.addEventListener("click", function(){
    body.style.overflow = "hidden"
    contenedorCompra.classList.remove('none')
    contenedorCompra.classList.add('contenedorCompra')
    informacionCompra.classList.add('informacionCompra')
    mostrarElemtrosLista()
})



function mostrarElemtrosLista() {
    productosCompra.innerHTML = ""
    valortotal = 0
    for (let i = 0; i < lista.length; i++){
        productosCompra.innerHTML += `<div><div class="img"><button onclick=eliminar(${i}) class="botonTrash"><img src="/img/trash.png"></button><p>${lista[i].nombre}</p></div><p> $${lista[i].precio}</p></div>`
        valortotal += parseInt(lista[i].precio)   // parseINt es para que sea un número entero
    }
    total.innerHTML = `<p>Valor Total</p> <p><span>$${valortotal}</span></p>`
}

function eliminar(indice){
    (productos[i].nombre == lista[indice].nombre) 
    lista.splice(indice, 1)

    numero.innerHTML = lista.length
    if (lista.length == 0){
        numero.classList.remove("diseñoNumero")
    }
    // visualizarProductos()
    mostrarElemtrosLista()
}


x.addEventListener("click", function(){
    body.style.overflow = "auto"
    contenedorCompra.classList.add('none')
    contenedorCompra.classList.remove('contenedorCompra')
    informacionCompra.classList.remove('informacionCompra')
})