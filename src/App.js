import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  // Manejador de evento para el botón
  const mostrarTexto = () => {
    alert(`Texto ingresado: ${text}`);
  };

  return (
    <div>
      <h1>Mostrar Texto Ingresado</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ingresa texto aquí"
      />
      <button onClick={mostrarTexto}>Mostrar Texto</button>
    </div>
  );
}

export default App;
