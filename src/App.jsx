import React, { useState } from 'react';

export function App() {
  const [number, setNumber] = useState(100);
  const [Visivel, setVisivel] = useState(true);

  const addNumber = () => {
    setNumber(number + 100);
  };

  const Visibilidade = () => {
    setVisivel(!Visivel);
  };

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Atividade useState</h1>
        
        <div className="mb-4">
          <p className="text-lg text-gray-700 mb-2">Número: {number}</p>
          <button 
            onClick={addNumber} 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"                             
          >
            Adicionar 100
          </button>
        </div>
        
        <div>
          {Visivel ? (
            <p className="text-lg text-gray-700 mb-2">Parágrafo visível!</p>
          ) : null}
          <button 
            onClick={Visibilidade}
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
          >
            {Visivel ? 'Esconder' : 'Mostrar'}
          </button>
        </div>
      </div>
    </div>
  );
}

1