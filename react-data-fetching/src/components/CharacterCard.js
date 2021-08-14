import React from "react";

const CharacterCard = ({ name, image, species, status, url, setCharacterUrl }) => (
  <div className="character-card" key={name}>
    <div className="character-card-top">
      <img src={image} alt={name} />
    </div>
    <p>Character name: {name}</p>
    <p>Species: {species}</p>
    <p>Status: {status}</p>
    <button onClick={() => setCharacterUrl(url)}>I am a button</button>
  </div>
);

export default CharacterCard;
