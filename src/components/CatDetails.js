import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const CatDetails = () => {
  const [catDetails, setCatDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCatDetails = async () => {
      try {
        const res = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`);
        const data = await res.json();
        setCatDetails(data[0].breeds[0]);
      } catch (error) {
        console.error("Error fetching cat details:", error);
      }
    };

    fetchCatDetails();
  }, [id]);

  if (!catDetails) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>{catDetails.name}</h2>
      <p>
        <strong>Breed:</strong> {catDetails.name}
      </p>
      <p>
        <strong>Temperament:</strong> {catDetails.temperament}
      </p>
      <p>
        <strong>Description:</strong> {catDetails.description}
      </p>
      <Link to="/">Back to Cat List</Link>
    </div>
  );
};

export default CatDetails;
