import React, { useState, useEffect } from 'react';

function FetchDataComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
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
      <h2>Fetch Data Component</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Username:</strong> {data.username}</p>
          <p><strong>Email:</strong> {data.email}</p>
        </div>
      )}
    </div>
  );
}

export default FetchDataComponent;

