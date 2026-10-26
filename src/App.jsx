// src/App.jsx
import React, { useState } from 'react';
import DetalleAnalisis from './components/DetalleAnalisis';

export default function App() {
  // Estado para controlar qué vista se muestra ('lista' o 'detalle')
  const [vistaActual, setVistaActual] = useState('lista');
  
  // Estado para almacenar el registro que el usuario seleccione
  const [registroSeleccionado, setRegistroSeleccionado] = useState(null);

  // Datos de prueba simulando un registro guardado en tu base de datos MySQL
  const analisisEjemplo = {
    id: 1,
    tipo: 'Semilla / Cultivo',
    nombreCultivo: 'Maíz Amarillo Tradicional',
    nombreCientifico: 'Zea mays',
    fecha: '2026-10-26',
    imagenUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=500&auto=format&fit=crop&q=60',
    confianza: '96.5%',
    estadoSalud: 'Sano',
    recomendacion: 'Mantener un riego moderado cada 3 días y aplicar abono orgánico en la base del tallo.',
    suelo: 'Franco-arcilloso',
    clima: 'Cálido (26°C - 30°C)',
    viabilidad: 'Alta Viabilidad'
  };

  // Funciones para alternar vistas
  const verDetalle = () => {
    setRegistroSeleccionado(analisisEjemplo);
    setVistaActual('detalle');
  };

  const volverALista = () => {
    setRegistroSeleccionado(null);
    setVistaActual('lista');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <header className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-3xl font-bold text-green-700">CeresIA - Entorno de Pruebas</h1>
        <p className="text-gray-600 text-sm">Sistema Web de Asistencia Agroclimática</p>
      </header>

      <main>
        {vistaActual === 'lista' ? (
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Historial de Análisis</h2>
            <p className="text-sm text-gray-500 mb-6">Haz clic en el registro de prueba para visualizar su pantalla de detalle.</p>
            
            {/* Tarjeta simulada del historial */}
            <div 
              onClick={verDetalle}
              className="p-4 border border-green-200 rounded-lg bg-green-50 hover:bg-green-100 cursor-pointer transition text-left shadow-sm"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-green-700 font-bold uppercase tracking-wider">Cultivo</span>
                <span className="text-xs text-gray-500">26/10/2026</span>
              </div>
              <h3 className="font-bold text-gray-800 text-lg">Maíz Amarillo Tradicional</h3>
              <p className="text-xs text-gray-600 mt-1">Estado: <span className="text-green-600 font-medium">Sano</span></p>
            </div>
          </div>
        ) : (
          /* Renderiza el componente de detalle pasando el registro y la función de retorno */
          <DetalleAnalisis registro={registroSeleccionado} onBack={volverALista} />
        )}
      </main>
    </div>
  );
}
// import ProductoCard from './components/ProductoCard';
//  import {productosIniciales} from './data/productos';
//   import './App.css'; 
// import { useEffect, useState } from "react";
// import BuscadorPokemon from "./components/BuscadorPokemon";
// import DetalleAnalisis from './components/DetalleAnalisis';
// function App() {
//   const [productos, setProductos] = useState(() => {
//     const guardados = localStorage.getItem("productos");
//     return guardados ? JSON.parse(guardados) : productosIniciales;
//     });
//     useEffect(() => {
//   localStorage.setItem(
//   "productos",
//   JSON.stringify(productos)
//   );
//   }, [productos]);
//   const disponibles = productos.filter(p => p.stock > 0);
//   const valorInventario = productos.reduce((total, p) => total + (p.precio * p.stock), 0);
//   const [nombre, setNombre] = useState("");
//   const [precio, setPrecio] = useState("");
//   const [stock, setStock] = useState("");
//   const [editandoId, setEditandoId] = useState(null);
//   const guardarProducto = (e) =>{
//     e.preventDefault();
//     if (nombre.trim() === "" || precio === "" || stock === "") {
//     alert("Todos los campos son obligatorios");
//     return;
//     }
//     if (Number(precio) <= 0 || Number(stock) < 0) {
//     alert("Revise precio y stock");
//     return;
//     }
//     if (editandoId === null) {
//     const nuevoProducto = {
//     id: Date.now(),
//     nombre: nombre.trim(),
//     precio: Number(precio),
//     stock: Number(stock)
//     };
//     setProductos([...productos, nuevoProducto]);
//     } else {
//     const actualizados = productos.map((producto) =>
//     producto.id === editandoId
//     ? {
//     ...producto,
//     nombre: nombre.trim(),
//     precio: Number(precio),
//     stock: Number(stock)
//     }
//     : producto
//     );
//     setProductos(actualizados);
//     setEditandoId(null);
//     }
//     setNombre("");
//     setPrecio("");
//     setStock("");
//     };
//     const editarProducto = (producto) => {
//     setEditandoId(producto.id);
//     setNombre(producto.nombre);
//     setPrecio(producto.precio);
//     setStock(producto.stock);
//     };
//     const eliminarProducto = (id) => {
//     const confirmar = window.confirm(
//     ";¿Seguro que desea eliminar este producto?"
//     );
//     if (!confirmar) return;
//     setProductos(
//     productos.filter((producto) => producto.id !== id)
//     );
//     };
//   return ( 
//     <>
//     <BuscadorPokemon />

    
//     <form onSubmit={guardarProducto}>
//       <input
//         type="text"
//         placeholder="Nombre"
//         value={nombre}
//         onChange={(e) => setNombre(e.target.value)}
//       />

//       <input
//         type="number"
//         placeholder="Precio"
//         value={precio}
//         onChange={(e) => setPrecio(e.target.value)}
//       />

//       <input
//         type="number"
//         placeholder="Stock"
//         value={stock}
//         onChange={(e) => setStock(e.target.value)}
//       />

//       <button type="submit">
//         {editandoId === null ? "Agregar" : "Actualizar"}
//       </button>
//     </form>
//     <main className="contenedor"> 
//       <h1>Tienda tecnológica</h1> 
//       <p>Productos disponibles: {disponibles.length}</p> 
//       <p>Valor del inventario: ${valorInventario.toLocaleString('es-CO')}</p> 
 
//       <section className="productos"> 
//         {productos.map(producto => ( 
//           <ProductoCard             key={producto.id}             producto={producto} 
//           /> 
//         ))} 
//       </section> 
//       <section>
//       {productos.map((producto) => (
//           <article key={producto.id}>
//               <h3>{producto.nombre}</h3>
//               <p>Precio: ${producto.precio}</p>
//               <p>Stock: {producto.stock}</p>

//               <button onClick={() => editarProducto(producto)}>
//                   Editar
//               </button>

//               <button onClick={() => eliminarProducto(producto.id)}>
//                   Eliminar
//               </button>
//           </article>
//       ))}
//       </section>

//     </main> 
//     </>
//   ); 
// }  
// export default App; 
