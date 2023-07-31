const productos = [
  {nombre: "mil hojas", precio: 8000},
  {nombre: "pavlova", precio: 8000},
  {nombre: "alfajores", precio: 500},
  {nombre: "bandeja de masas", precio: 9000},
  {nombre: "lemon pie", precio: 4000},
];

let carrito= []

let seleccion = prompt("Hola, ¿Desea comprar algún producto?")

while (seleccion != "si" && seleccion != "no"){
  alert("por favor ingresa si o no")
  seleccion = prompt("Hola, ¿Desea comprar algún producto?")
}

if(seleccion === "si"){
  alert("A continuación, nuestar lista de productos")
  let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$")

  alert(todosLosProductos.join("-"))
}else if (seleccion === "no"){
  alert("Gracias por venir, hasta pronto!")
}

while(seleccion != "no"){
  let producto = prompt("Agrega un producto a tu carrito")
  let precio = 0

  if (producto === "mil hojas" || producto === "pavlova" || producto === "alfajores" || producto === "bandeja de masas" || producto === "lemon pie"  ){
    switch(producto){
      case "mil hojas":
        precio = 8000;
      case "pavlova":
        precio = 8000;
      case "alfajores":
        precio = 500;
      case "bandeja de masas":
        precio = 9000;
      case "lemon pie":
        precio = 4000;
        break;
      default:
        break;
    }
    let unidades = parseInt(prompt("¿Cuántas unidades quiere llevar?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
  }else(prompt("No tenemos ese producto"));

  seleccion = prompt("Desea agregar otro producto?")
  while(seleccion === "no"){
    alert("Gracias por su compra, hasta pronto")
    carrito.forEach((carritoFinal) =>{
      console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
  }
}

const total = carrito.reduce((acc,el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)