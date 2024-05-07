import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CatDetails() {
  const { id } = useParams(); // Access the cat ID from the URL params
  const [breed, setBreed] = useState(null);
  const [age, setAge] = useState('');
  const [name, setName] = useState('');

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

        // Randomly select a breed
        const randomIndex = Math.floor(Math.random() * filteredBreeds.length);
        const selectedBreed = filteredBreeds[randomIndex];
        setBreed(selectedBreed);

        // Randomly select an age
        const ages = ['Young', 'Adult', 'Elder'];
        const randomAge = ages[Math.floor(Math.random() * ages.length)];
        setAge(randomAge);

        // Randomly generate a name
        const names = ['Fluffy', 'Whiskers', 'Mittens', 'Smokey', 'Leo', 'Luna', 'Simba', 'Felix', 'Max', 'Oreo'];
        const randomName = names[Math.floor(Math.random() * names.length)];
        setName(randomName);
      } catch (error) {
        console.error('Error fetching cat breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  if (!breed) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cat-details">
      <h2>{name}</h2>
      <h3>Breed: {breed.name}</h3>
      <p><strong>Temperament:</strong> {breed.temperament}</p>
      <p><strong>Description:</strong> {breed.description}</p>
      <p><strong>Age:</strong> {age}</p>
      <a href={breed.wikipedia_url} target="_blank" rel="noopener noreferrer">Wikipedia Link</a>
      <p>Interested in adopting {name}? Fill out our <a href="/adoption-form">adoption form</a>!</p>
    </div>
  );
}

export default CatDetails;
