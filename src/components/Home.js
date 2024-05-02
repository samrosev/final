import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CatList = () => {
  const [catBreeds, setCatBreeds] = useState([]);

  useEffect(() => {
    const fetchCatBreeds = async () => {
      try {
        const res = await fetch("https://api.thecatapi.com/v1/breeds");
        const data = await res.json();
        setCatBreeds(data);
      } catch (error) {
        console.error("Error fetching cat breeds:", error);
      }
    };

    fetchCatBreeds();
  }, []);

  return (
    <div>
      <h1>Whiskers and Brews Adoption Agency</h1>
      <h2>Cats Available for Adoption</h2>
      <ul>
        {catBreeds.map(catBreed => (
          <li key={catBreed.id}>
            <Link to={`/cat/${catBreed.id}`}>{catBreed.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatList;
