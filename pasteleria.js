/* const productos = [
  {id: 1, nombre: "Milhojas", precio: 8000},
  {id: 2, nombre: "Tarta de coco", precio: 5000},
  {id: 3, nombre: "Pavlova", precio: 7000},
  

];

const carrito = [];

function agregarAlCarrito(idProducto){
  const productoSeleccionado = productos.find(producto => producto.id === idProducto);
  carrito.push(productoSeleccionado);
}

function mostrarCarrito(){
  let carritoItems = '';
  let total = 0;

  carrito.forEach(producto =>{
    carritoItems += `${producto.nombre} - $${producto.precio}\n`;
    total += producto.precio;
  });

  return {carritoItems, total};
}

function iniciarCompra(){
  carrito.length = 0;
  let continuar;


  do{
    continuar = false;

    const seleccion = prompt("Ingrese el ID del producto que desea agregar al carrito:\n1. Milhojas ($8000)\n2. Tarta de coco ($5000)\n3. Pavlova ($7000)\n0. Finalizar compra ");
  

 

    switch (seleccion){
      case '1':
        agregarAlCarrito(1);
      continuar = true;
      break;

      case '2':
        agregarAlCarrito(2);
        continuar = true;
        break;

      case '3':
        agregarAlCarrito(3);
        continuar = true;
        break;
      
      case '0':
        
        break;
      
      default:
        alert("Opción inválida. Por favor, seleccione una opción válida.");
        continuar = true;

    }
  } while (continuar);

  const { carritoItems, total} = mostrarCarrito();
  console.log("Productos agregados al carrito:");
  console.log(carritoItems);
  console.log("Total: $" + total);
}
iniciarCompra()



 */ 

/* const Producto = function(nombre, precio, stock){
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;

}

let producto1 = Producto("Mil hojas", 8000, 15);
let producto2 = Producto("Alfajor", 300, 200);
let producto3 = Producto("Tarta de coco", 4000, 25);
let producto4 = Producto("Brownie", 6000, 15);
let producto5 = Producto("Pavlova", 7000, 15);
let producto6 = Producto("Torta concorde", 8000, 15);

let lista = [producto1, producto2, producto3, producto4, producto5, producto6]

function filtrarProductos(){
  let palabraClave = prompt("Ingresar Producto")
  let resultado = lista.filter((producto)=> producto.nombre.includes(palabraClave))

  if(resultado.length>0){
    console.table(resultado)
  } else{
    alert(palabraClave + " : Producto inexistente")
  }
} */

// Definimos un objeto Producto para representar cada artículo en el inventario
class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

// Creamos algunos productos para nuestro inventario
const producto1 = new Producto("Mil hojas", 8000, 15);
const producto2 = new Producto("Alfajor", 300, 200);
const producto3 = new Producto("Tarta de coco", 4000, 25);
const producto4 = new Producto("Brownie", 6000, 15);
const producto5 = new Producto("Pavlova", 7000, 15);
const producto6 = new Producto("Torta concorde", 8000, 15);

// Creamos un array para almacenar nuestro inventario de productos
const inventario = [producto1, producto2, producto3, producto4, producto5, producto6];

// Definimos la función para agregar un producto al carrito
function agregarAlCarrito(carrito, idProducto) {
  const productoEnInventario = inventario.find((producto) => producto.id === idProducto);
  if (productoEnInventario) {
    const productoEnCarrito = carrito.find((producto) => producto.id === idProducto);
    if (productoEnCarrito) {
      if (productoEnCarrito.cantidad < productoEnInventario.stock) {
        productoEnCarrito.cantidad++;
        console.log(`Se agregó 1 unidad de ${productoEnCarrito.nombre} al carrito.`);
      } else {
        console.log(`No hay suficiente stock de ${productoEnCarrito.nombre}.`);
      }
    } else {
      if (productoEnInventario.stock > 0) {
        carrito.push({
          id: productoEnInventario.id,
          nombre: productoEnInventario.nombre,
          precio: productoEnInventario.precio,
          cantidad: 1,
        });
        console.log(`Se agregó ${productoEnInventario.nombre} al carrito.`);
      } else {
        console.log(`No hay stock disponible de ${productoEnInventario.nombre}.`);
      }
    }
  } else {
    console.log("El producto no está en el inventario.");
  }
}

// Definimos la función para mostrar el contenido del carrito
function mostrarCarrito(carrito) {
  if (carrito.length === 0) {
    console.log("El carrito está vacío.");
  } else {
    console.log("Contenido del carrito:");
    carrito.forEach((producto) => {
      console.log(`${producto.nombre} - Precio: $${producto.precio} - Cantidad: ${producto.cantidad}`);
    });
  }
}

// Creamos el carrito de compras (será un array de objetos con el id, nombre, precio y cantidad)
const carritoDeCompras = [];

// Ejemplo de uso de las funciones:
agregarAlCarrito(carritoDeCompras, 1); // Agregamos una unidad del producto con id 1 al carrito
agregarAlCarrito(carritoDeCompras, 2); // Agregamos una unidad del producto con id 2 al carrito
agregarAlCarrito(carritoDeCompras, 1); // Agregamos otra unidad del producto con id 1 al carrito
mostrarCarrito(carritoDeCompras); // Mostramos el contenido del carrito

