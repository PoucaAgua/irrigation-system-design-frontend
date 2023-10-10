import React, { useState } from "react";

function App() {
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://d4p7uekk73.execute-api.us-east-1.amazonaws.com/dev/api/v1/irrigation/actual/soil_params",
        {
          method: "POST",
        }
      );
      if (!response.ok) {
        throw new Error(`Erro ${response.status}`);
      }

      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Minha Aplicação React</h1>
      <button onClick={fetchData}>Fazer Solicitação</button>
      <p>{error}</p>
    </div>
  );
}

export default App;
