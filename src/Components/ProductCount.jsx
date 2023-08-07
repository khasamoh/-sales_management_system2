import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductCount() {
  const [numRows, setNumRows] = useState(null);

  useEffect(() => {
    // Make an API request to fetch the count of users from Django
    axios.get('http://127.0.0.1:8000/product_count/')
      .then(response => {
        setNumRows(response.data.num_rows);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
    {numRows !== null ? (
      <h2>{numRows}</h2>
    ) : (
      <h2>0</h2>
    )}
  </div>
  );
}

export default ProductCount;
