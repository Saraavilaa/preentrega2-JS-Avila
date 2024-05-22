// Capturar el nombre del usuario
let nombreUsuario = prompt("Ingrese su nombre:")


// Lista de productos predefinida
const productosDisponibles = [
    { nombre: "Apple Watch ⌚", precio: 399.99 },
    { nombre: "Macbook 💻", precio: 1299.99 },
    { nombre: "IPhone 11 📱", precio: 699.99 },
    { nombre: "Airpods Max 🎧", precio: 549.99 },
    { nombre: "IPhone 15 📱", precio: 999.99 }
]

// Crear un array para el carrito de compras
let carritoDeCompras = []

// Función para agregar un producto al carrito de compras
function agregarProducto(producto) {
    carritoDeCompras.push(producto)
}

// Función para mostrar el carrito de compras
function mostrarCarrito() {
    // let listaProductos = carritoDeCompras.map(producto => `${producto.nombre} ($${producto.precio.toFixed(2)})`).join(", ")
    let listaProductos = carritoDeCompras.map(producto => {
      return producto.nombre + " ($" + producto.precio.toFixed(2) + ")";
    }).join(", ");
    alert("Carrito de compras de " + nombreUsuario + ": " + listaProductos)
    console.log("Carrito de compras:", carritoDeCompras)
}

// Función para buscar un producto en el carrito de compras de manera flexible
function buscarProducto(nombre) {
    return carritoDeCompras.find(producto => producto.nombre.toLowerCase().includes(nombre.toLowerCase()));
}


// Función para calcular el total del carrito
function calcularTotal() {
    return carritoDeCompras.reduce((total, producto) => total + producto.precio, 0)
}

// Mostrar lista de productos disponibles
function mostrarProductosDisponibles() {
    let lista = productosDisponibles.map((producto, index) => `${index + 1}. ${producto.nombre} ($${producto.precio.toFixed(2)})`).join("\n")
    alert("Productos disponibles:\n" + lista)
    console.log("Productos disponibles:", productosDisponibles)
}

// Agregar productos al carrito
let continuar = true;
while (continuar) {
    mostrarProductosDisponibles();
    let seleccion = prompt("Ingrese el número del producto para agregar al carrito (o deje en blanco para finalizar):")
    if (seleccion) {
        let indice = parseInt(seleccion) - 1
        if (indice >= 0 && indice < productosDisponibles.length) {
            agregarProducto(productosDisponibles[indice])
        } else {
            alert("Selección inválida, por favor intente nuevamente.")
        }
    } else {
        continuar = false;
    }
}

// Mostrar el carrito completo
mostrarCarrito();

// Calcular y mostrar el total del carrito
let totalCarrito = calcularTotal();
alert("El total del carrito es: $" + totalCarrito.toFixed(2))
console.log("Total del carrito:", totalCarrito)

// Buscar un producto en el carrito
let productoBusqueda = prompt("Ingrese el nombre del producto para buscar en el carrito:")
let productoEncontrado = buscarProducto(productoBusqueda)

if (productoEncontrado) {
    alert(productoEncontrado.nombre + " se encuentra en el carrito con un precio de $" + productoEncontrado.precio.toFixed(2))
    console.log("Producto encontrado:", productoEncontrado)
} else {
    alert(productoBusqueda + " no se encuentra en el carrito.")
    console.log(productoBusqueda + " no se encuentra en el carrito.")
}
