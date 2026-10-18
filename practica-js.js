// console.log("JavaScript listo para practicar");

// function calcularTotal(precio, cantidad) 
// {   const total = precio * cantidad;   
//     return total; 
// }  
// const resultado = calcularTotal(50000, 3); 
// console.log(resultado); 

// function CrearSuma(a,b)
// {  const totalsum = a + b;
// return totalsum;
// }
// const resultadosuma = CrearSuma(5,10);
// console.log(resultadosuma);

// function CrearResta(a,b)
// {
//     const resultadoResta = a - b;
//     return resultadoResta;
// }
// const resultadoResta = CrearResta(6, 3);
// console.log(resultadoResta);


// function CrearMultiplicacion(a,b)
// {
//     const resultadoMultiplicacion = a * b;
//     return resultadoMultiplicacion;
// }
// const resultadoMultiplicacion = CrearMultiplicacion(6, 3);
// console.log(resultadoMultiplicacion);

// function CrearDivision(a,b)
// {
//     const resultadoDivision = a / b;
//     return resultadoDivision;
// }
// const resultadoDivision = CrearDivision(6, 3);
// console.log(resultadoDivision);

// function CalcularPromedio(nota1, nota2, nota3)
// {
//     const totalPromedio = (nota1 + nota2 + nota3) / 3;
//     return totalPromedio;
// }
// const resultadoPromedio = CalcularPromedio(5,4,5);
// console.log(resultadoPromedio)


// RESPUESTA A LA PREGUNTA, la diferencia principal es que uno retorna un valor el cual se almacena 
// internamente y el otro retorna una respuesta mostrandola en consola

// const ConvertirCuadrado = (numero) => {    return numero * numero;
// };
// console.log(ConvertirCuadrado(3))

// const MayorEdad = (edad) => {  if (edad >= 18) return ("Es mayor de edad")
//     else return("Es menor de edad")
// };
// console.log(MayorEdad(18))

// const NombreCompleto = (Nombre, Apellido) => {
//     return Nombre + " " + Apellido;
// };
// console.log(NombreCompleto("Franklin", "Sanchez"))

const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 9000, categoria: 'Perifericos', stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 65000, categoria: 'Pantallas', stock: 3 },
  { id: 4, nombre: 'Audífonos', precio: 12000, categoria: 'Perifericos', stock: 10 },
  { id: 5, nombre: 'Impresora', precio: 450000, categoria: 'Oficina', stock: 0 },
  { id: 6, nombre: 'Laptop', precio: 2500000, categoria: 'Portatiles', stock: 4 },
  { id: 7, nombre: 'Memoria USB 64GB', precio: 35000, categoria: 'Almacenamiento', stock: 15 },
  { id: 8, nombre: 'Disco Duro Externo 1TB', precio: 280000, categoria: 'Almacenamiento', stock: 7 },
  { id: 9, nombre: 'Silla Gamer', precio: 85000, categoria: 'Muebles', stock: 2 },
  { id: 10, nombre: 'Webcam HD', precio: 150000, categoria: 'Perifericos', stock: 6 }
];

// productos.forEach((producto, indice) => {
//     console.log(`${indice + 1}. ${producto.nombre} -$ ${producto.precio} stock: ${producto.stock}`)
// })

// const preciosIva = productos.map(producto => producto.precio * 1.19);
// console.log("el precio con iva es: ", preciosIva)

// const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
// console.log("nombres con mayusculas: ", nombresMayuscula)

// const resumenProducto = productos.map(producto => "Nombre producto: "+ producto.nombre+ " precio del producto: $"+ producto.precio);
// console.log(resumenProducto)

// const precioMayor = productos.filter(producto => producto.precio >= 100000);
// console.log(precioMayor)

// const productosEntre = productos.filter(producto => producto.precio >= 50000 && producto.precio <= 200000);
// console.log(productosEntre)

// const categoriaElegida = productos.filter(producto => producto.categoria === "Perifericos");
// console.log(categoriaElegida)

// const BuscarProductoconid5 = productos.find(producto => producto.id === 5)
// console.log(BuscarProductoconid5)

// function buscarProducto(id) {
//     return productos.find(producto => producto.id === id);
// }
// console.log(buscarProducto(2))

// const algunAgotado = productos.some(producto => producto.stock === 0);
// console.log(algunAgotado);

// const PrecioMayor100 = productos.some(producto => producto.precio > 1000000);
// console.log(PrecioMayor100);

// const Todosmayor = productos.every(producto  => producto.precio > 0);
// console.log(Todosmayor);

// const stockMayor = productos.every(producto => producto.stock >= 0);
// console.log(stockMayor);

// const valorTotalInventario = productos.reduce(
//     (total, producto) => total + producto.precio * producto.stock, 0
// );
// console.log("el valor tota del inventario es: $"+valorTotalInventario.toLocaleString('es-CO'))

// const copiaProducto = {
//     ...productos[4],
//     stock:2,
//     precio: 230000
// };

// const estado = copiaProducto.stock > 0? 'disponible' : 'agotado';

// console.log(`El producto ${productos[4].nombre} cuesta $${productos[4].precio} y tiene este estado: ${estado}`); 