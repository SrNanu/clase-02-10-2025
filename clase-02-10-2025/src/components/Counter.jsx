import React, { useState } from 'react';

const MIN_VALUE = 0;
const MAX_VALUE = 10;

const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const increment = () => {
    if (count < MAX_VALUE) {
      setCount(prevCount => prevCount + 1);
      setMessage('');
    } else {
      showMessage(`¡Límite máximo alcanzado (${MAX_VALUE})!`);
    }
  };

  const decrement = () => {
    if (count > MIN_VALUE) {
      setCount(prevCount => prevCount - 1);
      setMessage('');
    } else {
      showMessage(`¡Límite mínimo alcanzado (${MIN_VALUE})!`);
    }
  };

  const reset = () => {
    setCount(0);
    showMessage('Contador reseteado a 0.');
  };

  return (

    <div className="counter"> 
      <h2>Contador con Límites</h2>


      {message && <p className="counter-message">{message}</p>}

      <div className="counter-controls">
        <button 
          onClick={decrement} 
          disabled={count === MIN_VALUE}
        >
          Decrementar
        </button>
        
        
        <span className="count-value"> 
          {count}
        </span>
        
        <button 
          onClick={increment} 
          disabled={count === MAX_VALUE}
        >
          Incrementar
        </button>
      </div>
      
      <button onClick={reset} className="reset-button">
        Reset
      </button>
    </div>
  );
};

export default Counter;