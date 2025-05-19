import React, { useState } from 'react';

export function App() {
  const [num, setNum] = useState(100);
  const [Visivel, setVisivel] = useState(true);

  const addNumber = () => {
    setNum(num + 100);
  };

  const Visibilidade = () => {
    if (Visivel === true) {
      setVisivel(false);
    } else {
      setVisivel(true);
    }
  };

  return (
    <div>
      <div>
        <h1>Atividade useState</h1>
        
        <div className="mb-4">
          <p className="text-lg text-gray-700 mb-2">Número: {num}</p>
          <button 
            onClick={addNumber} 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"                             
          >
            Adicionar 100
          </button>
        </div>
        
        <div>
          {Visivel === true ? (
            <p className="text-lg text-gray-700 mb-2">Parágrafo visível!</p>
          ) : ""}
          <button 
            onClick={Visibilidade}
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
          >
            {Visivel ===true ? 'Esconder' : 'Mostrar'}
          </button>
        </div>
      </div>
    </div>
  );
}

1