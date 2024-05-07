import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CatDetails() {
  const { id } = useParams(); // Access the cat ID from the URL params
  const [catInfo, setCatInfo] = useState(null);

  useEffect(() => {
    const fetchCatInfo = async () => {
      try {
        const response = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${id}`, {
          headers: {
            'x-api-key': 'live_KXa2QNkQxWRsCAhx7KrKXyiuKt1uztVEAsLdX7Lw3RU6zCBSvHWCpMVkupo01GOp' 
          }
        });
        if (response.data.length > 0) {
          setCatInfo(response.data[0]);
        } else {
          setCatInfo({ name: 'Unknown', temperament: 'Unknown', description: 'No description available' });
        }
      } catch (error) {
        console.error('Error fetching cat info:', error);
      }
    };

    fetchCatInfo();
  }, [id]);

  if (!catInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cat-details">
      <h2>{catInfo.name}</h2>
      <p><strong>Breed:</strong> {catInfo.name}</p>
      <p><strong>Temperament:</strong> {catInfo.temperament}</p>
      <p><strong>Description:</strong> {catInfo.description}</p>
    </div>
  );
}

export default CatDetails;