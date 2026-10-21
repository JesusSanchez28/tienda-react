import ProductoCard from './components/ProductoCard';
 import {productosIniciales} from './data/productos';
  import './App.css'; 
import { useState } from "react";

function App() {
  const [productos, setProductos] =
    useState(productosIniciales);
  const disponibles = productos.filter(producto => producto.stock > 0);   const valorInventario = productos.reduce( 
    (total, producto) => total + producto.precio * producto.stock, 
    0 
  );  

  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const guardarProducto = (e) => {
  e.preventDefault();
  if (
    nombre.trim() === "" ||
    precio === "" ||
    stock === ""
  ) {
    alert("Todos los campos son obligatorios");
    return;
  }
  const nuevoProducto = {
    id: Date.now(),
    nombre: nombre.trim(),
    precio: Number(precio),
    stock: Number(stock),
    categoria: "Sin categoría"
  };
  setProductos([
    ...productos,
    nuevoProducto
  ]);
  setNombre("");
  setPrecio("");
  setStock("");
};
  return ( 
    <>
    
    <form onSubmit={guardarProducto}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />

      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />

      <button type="submit">
        {editandoId === null ? "Agregar" : "Actualizar"}
      </button>
    </form>
    <main className="contenedor"> 
      <h1>Tienda tecnológica</h1> 
      <p>Productos disponibles: {disponibles.length}</p> 
      <p>Valor del inventario: ${valorInventario.toLocaleString('es-CO')}</p> 
 
      <section className="productos"> 
        {productos.map(producto => ( 
          <ProductoCard             key={producto.id}             producto={producto} 
          /> 
        ))} 
      </section> 
    </main> 
    </>
  ); 
}  
export default App; 
