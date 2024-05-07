import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CatList() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=50');
        setBreeds(response.data);
      } catch (error) {
        console.error('Error fetching cat breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  const calculateColumns = () => {
    const numBreeds = breeds.length;
    if (numBreeds <= 4) {
      return 1;
    } else if (numBreeds <= 8) {
      return 2;
    } else if (numBreeds <= 12) {
      return 3;
    } else {
      return 4;
    }
  };

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${calculateColumns()}, 1fr)`,
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  };

  return (
    <div className="cat-list" style={containerStyle}>
      {breeds.map((breed) => (
        <div key={breed.id}>
          <Link to={`/cats/${breed.id}`}> {/* Pass the breed ID as a URL parameter */}
            <img src={breed.url} alt={breed.id} className="rounded-full" style={{ width: '200px', height: '200px' }} />
          </Link>
          <div style={{ marginTop: '10px', textAlign: 'center' }}>
            <Link to={`/cats/${breed.id}`} className="btn btn-primary">Learn More</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CatList;
