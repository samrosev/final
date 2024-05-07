import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CatList() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/breeds', {
          headers: {
            'x-api-key': 'live_KXa2QNkQxWRsCAhx7KrKXyiuKt1uztVEAsLdX7Lw3RU6zCBSvHWCpMVkupo01GOp'
          }
        });
        setBreeds(response.data);
      } catch (error) {
        console.error('Error fetching cat breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  return (
    <div className="cat-list">
      <h2>Cat Breeds</h2>
      <ul>
        {breeds.map(breed => (
          <li key={breed.id}>{breed.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CatList;