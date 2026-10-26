// src/components/DetalleAnalisis.jsx
import React from 'react';

/**
 * Componente para mostrar el detalle de un registro seleccionado en CeresIA.
 * @param {Object} props.registro - Objeto con los datos del análisis seleccionado.
 * @param {Function} props.onBack - Función para regresar a la lista anterior.
 */
export default function DetalleAnalisis({ registro, onBack }) {
  if (!registro) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-600">No se ha seleccionado ningún registro.</p>
        <button 
          onClick={onBack} 
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Volver al Historial
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      {/* Botón de retorno */}
      <button 
        onClick={onBack}
        className="mb-6 px-4 py-2 text-sm font-medium text-green-700 bg-green-50 rounded-lg hover:bg-green-100 transition flex items-center gap-2"
      >
        ← Volver al Historial
      </button>

      {/* Cabecera del Detalle */}
      <div className="border-b pb-4 mb-6 flex justify-between items-start">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-green-600 bg-green-100 px-2.5 py-1 rounded-full">
            {registro.tipo || 'Cultivo / Semilla'}
          </span>
          <h1 className="text-2xl font-bold text-gray-800 mt-2">{registro.nombreCultivo}</h1>
          <p className="text-sm text-gray-500 italic">Nombre científico: {registro.nombreCientifico || 'No especificado'}</p>
        </div>
        <div className="text-right">
          <span className="text-sm text-gray-500 block">Fecha de análisis</span>
          <span className="font-medium text-gray-700">{registro.fecha}</span>
        </div>
      </div>

      {/* Grid de Contenido Principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Columna 1: Imagen y Visión Artificial */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-md font-semibold text-gray-700 mb-3">Evidencia Fotográfica</h3>
          <div className="h-48 bg-gray-200 rounded-md overflow-hidden flex items-center justify-center">
            {registro.imagenUrl ? (
              <img src={registro.imagenUrl} alt={registro.nombreCultivo} className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-400 text-sm">Sin imagen disponible</span>
            )}
          </div>
          <div className="mt-3 flex justify-between items-center text-sm">
            <span className="text-gray-600">Confianza del modelo IA:</span>
            <span className="font-bold text-green-600">{registro.confianza || '95%'}</span>
          </div>
        </div>

        {/* Columna 2: Diagnóstico de Salud */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col justify-between">
          <div>
            <h3 className="text-md font-semibold text-gray-700 mb-3">Diagnóstico y Estado</h3>
            <div className="mb-3">
              <span className="text-xs text-gray-500 block">Estado detectado:</span>
              <span className={`inline-block px-2 py-1 text-xs font-bold rounded ${registro.estadoSalud === 'Sano' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {registro.estadoSalud || 'Saludable con observaciones'}
              </span>
            </div>
            <div>
              <span className="text-xs text-gray-500 block">Recomendación técnica:</span>
              <p className="text-sm text-gray-700 mt-1">{registro.recomendacion || 'Mantener monitoreo constante de humedad y riego según el ciclo vegetativo.'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bloque Inferior: Evaluación Agroclimática y del Suelo */}
      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
        <h3 className="text-md font-semibold text-green-800 mb-2">Evaluación Agroclimática del Terreno</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
          <div>
            <span className="block text-gray-500 text-xs">Tipo de Suelo:</span>
            <span className="font-medium">{registro.suelo || 'Franco-arcilloso'}</span>
          </div>
          <div>
            <span className="block text-gray-500 text-xs">Clima / Temperatura:</span>
            <span className="font-medium">{registro.clima || 'Cálido (24°C - 28°C)'}</span>
          </div>
          <div>
            <span className="block text-gray-500 text-xs">Viabilidad estimada:</span>
            <span className="font-bold text-green-700">{registro.viabilidad || 'Alta Viabilidad'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}