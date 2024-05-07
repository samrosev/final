import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CatDetails() {
  const { id } = useParams(); // Access the cat ID from the URL params
  const [breeds, setBreeds] = useState([]);
  const [selectedBreedIndex, setSelectedBreedIndex] = useState(0);

  useEffect(() => {
    const url = `https://api.thecatapi.com/v1/breeds`;
    const api_key = 'live_KXa2QNkQxWRsCAhx7KrKXyiuKt1uztVEAsLdX7Lw3RU6zCBSvHWCpMVkupo01GOp';
    const fetchBreeds = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            'x-api-key': api_key
          }
        });
        const data = await response.json();

        // Filter to include only breeds with images
        const filteredBreeds = data.filter(breed => breed.image?.url != null);

        setBreeds(filteredBreeds);
      } catch (error) {
        console.error('Error fetching cat breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  const handleBreedChange = (event) => {
    setSelectedBreedIndex(event.target.value);
  };

  if (breeds.length === 0) {
    return <div>Loading...</div>;
  }

  const selectedBreed = breeds[selectedBreedIndex];

  return (
    <div className="cat-details">
      <select onChange={handleBreedChange}>
        {breeds.map((breed, index) => (
          <option key={index} value={index}>{breed.name}</option>
        ))}
      </select>
      <h2>{selectedBreed.name}</h2>
      <p><strong>Temperament:</strong> {selectedBreed.temperament}</p>
      <p><strong>Description:</strong> {selectedBreed.description}</p>
      <a href={selectedBreed.wikipedia_url} target="_blank" rel="noopener noreferrer">Wikipedia Link</a>
    </div>
  );
}

export default CatDetails;
