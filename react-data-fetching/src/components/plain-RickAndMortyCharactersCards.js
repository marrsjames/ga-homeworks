import React from 'react';

const rickAndMortyCharactersEndpoint =
  'https://rickandmortyapi.com/api/character';

const RickAndMortyCharactersCards = () => {
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    fetch(rickAndMortyCharactersEndpoint)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="characters-wrapper">
        {characters.map((character) => (
          <div className="character-card" key={character.name}>
            <div className="character-card-top">
              <img src={character.image} alt={character.name} />
            </div>
            <p>Character name: {character.name}</p>
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default RickAndMortyCharactersCards;
