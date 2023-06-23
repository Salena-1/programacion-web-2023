
let carrito = []; 

function añadirAlCarrito(marcador) {   // con los marcadores que están en los botones comprar de los productos del html  
  let producto = obtenerProductoPorMarcador(marcador);   
  carrito.push(producto);   
  mostrarCarrito(); 
}


function obtenerProductoPorMarcador(marcador) {
  let productos = obtenerProductos();
  return productos.find(producto => producto.marcador === marcador);
}


function obtenerProductos() {
  return [
    {
      marcador: 1,
      titulo: "Collar Aria",
      precio: 352
    },
    {
      marcador: 2,
      titulo: "Collar Nara",
      precio: 251
    },
    {
      marcador: 3,
      titulo: "Collar Lisa",
      precio: 411
    },
    {
        marcador:4,
        titulo:"Anillo Megara",
        precio:369
    },
    {
        marcador:5,
        titulo:"Anillo Soia",
        precio:621
    },
    {
        marcador:6,
        titulo:"Anillo Idra",
        precio:357
    },
    {
        marcador:7,
        titulo:"Aros Corallo",
        precio:502
    },
    {
        marcador:8,
        titulo:"Aros Pranna",
        precio:432
    },
    {
        marcador:9,
        titulo:"Aros Formentera",
        precio:468
    },
    {
      marcador:10,
      titulo:"Collar Aida",
      precio:1280
    },
    {
      marcador:11,
      titulo:"Aros Jarara",
      precio:630
    },
    {
      marcador:12,
      titulo:"Set anillos Aqua",
      precio:3680
    }
  ];
}




let botonesCarrito = document.querySelectorAll(".btn-primary[marcador]");
botonesCarrito.forEach(boton => {
  boton.addEventListener("click", function() {
    let marcador = parseInt(this.getAttribute("marcador"));
    añadirAlCarrito(marcador);
  });
});



function añadirAlCarrito(marcador) {
  let producto = obtenerProductoPorMarcador(marcador);
  let productoExistente = carrito.find(item => item.marcador === marcador);
  
  if (productoExistente) {
    productoExistente.cantidad++; //sumarle a cant

  } else {
    producto.cantidad = 1;
    carrito.push(producto);
  }
  mostrarCarrito();
}

function mostrarCarrito() {
  let carritoElement = document.getElementById("compras");
  carritoElement.innerHTML = ""; 

  let subtotal = 0;

  if (carrito.length === 0) {
    carritoElement.innerHTML = "<p>No hay productos en el carrito.</p>";
  } else {
    carrito.forEach((producto, index) => {
      const compraElement = document.createElement("div");
      compraElement.classList.add("compra");

      const tituloElement = document.createElement("p");
      tituloElement.classList.add("titulo");
      tituloElement.textContent = `${producto.titulo} - Precio: $${producto.precio} - Cantidad: ${producto.cantidad}`;
      compraElement.appendChild(tituloElement);

      const eliminarElement = document.createElement("span");
      eliminarElement.classList.add("eliminar");
      eliminarElement.textContent = "x";
      eliminarElement.addEventListener("click", () => eliminarDelCarrito(index));
      compraElement.appendChild(eliminarElement);

      carritoElement.appendChild(compraElement);

      subtotal += producto.precio * producto.cantidad;


      const mensajeExito = document.getElementById('mensajeExito');
      mensajeExito.style.display = 'none';
    });
  }

  let subtotalElement = document.getElementById("subtotalcompra");
  subtotalElement.textContent = `Subtotal: $${subtotal}`;
}

function eliminarDelCarrito(index) {
  const producto = carrito[index];
  producto.cantidad--; //restarle a cant

  if (producto.cantidad <= 0) {
    carrito.splice(index, 1); 
  }

  mostrarCarrito(); 
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert("No hay items en el carrito.");
    return; 
  }
 
  var modalCompra = new bootstrap.Modal(document.getElementById('modalCompra'));
  modalCompra.show();
}

function reiniciarCarrito() {
  carrito = []; 
  mostrarCarrito(); 
}

function completarCompra() {
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var edad = document.getElementById('edad').value;
  var numeroTarjeta = document.getElementById('numeroTarjeta').value;

  if (nombre.trim() === '' || apellido.trim() === '' || isNaN(edad) || numeroTarjeta.length !== 16) {
    alert("Por favor, complete todos los campos correctamente.");
    return; 
  }

  if (parseInt(edad) < 18) {
    alert("Debe ser mayor de 18 años para realizar la compra.");
    return; 
  }

  var modalCompra = new bootstrap.Modal(document.getElementById('modalCompra'));
  modalCompra.hide();
 
  alert("Su compra se ha realizado con éxito.");

  reiniciarCarrito();
}


var botonVaciarCarrito = document.querySelector(".vaciar-carrito");
botonVaciarCarrito.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
  carrito = []; 
  mostrarCarrito();
}