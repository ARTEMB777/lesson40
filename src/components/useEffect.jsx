import React, { useState, useEffect } from 'react';

function FetchDataComponent() {
  const [data, setData] = useState(null); // Початкове значення null, бо очікуємо об'єкт
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch('https://www.omdbapi.com/?apikey=fefd742d&s=');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        setData(result);
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch Data Component</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <p>Data: {data.title}</p>}
    </div>
  );
}

export default FetchDataComponent;
