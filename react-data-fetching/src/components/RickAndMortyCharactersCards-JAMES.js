import React from 'react';

const rickAndMortyCharactersEndpoint =
  'https://rickandmortyapi.com/api/character';

const RickAndMortyCharactersCards = () => {
  const [characters, setCharacters] = React.useState([]);
  const [isViewingSingleCharacter, setIsViewingSingleCharacter] = React.useState(false);
  const [SingleCharacterUrl, setSingleCharacterUrl] = React.useState('');
  const [singleCharacter, setSingleCharacter] = React.useState([]); 
//  const [viewingSingleCharacter, setViewingSingleCharacter] = React.useState(false);

  // react use effect is called on the second render and fetches the data
  React.useEffect(() => {
    fetch(rickAndMortyCharactersEndpoint)
      .then((res) => res.json())
      .then((data) => {
        // setCharacters sets the state
        setCharacters(data.results);
      });
      // beacuse of the empty array, it won't be called again.
  }, []);

  React.useEffect(() => {
    fetch(SingleCharacterUrl)
      .then((res) => res.json())
      .then((data) => {
        setSingleCharacter(data);  
        setIsViewingSingleCharacter(true);
      });
  }, [SingleCharacterUrl]);

//  console.log(characters);

  return (
    <React.Fragment>
      {isViewingSingleCharacter ? (
        <React.Fragment>
            <div>
            {singleCharacter.name}
     </div>     

          <button onClick={() => setIsViewingSingleCharacter(false)}>X</button>
        </React.Fragment>
      ) : (
        <div className="characters-wrapper">
          {characters.map((character) => (
            <div className="character-card" key={character.name}>
              <div className="character-card-top">
                <img src={character.image} alt={character.name} />
              </div>
              <p>Character name: {character.name}</p>
              <p>Species: {character.species}</p>
              <p>Status: {character.status}</p>
              <button onClick={() => setSingleCharacterUrl(character.url)}>
                Get Character Info
              </button>
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default RickAndMortyCharactersCards;