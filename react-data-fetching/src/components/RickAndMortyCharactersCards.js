import React from "react";
import CharacterCard from "./CharacterCard";

const rickAndMortyCharactersEndpoint =
  "https://rickandmortyapi.com/api/character";

const RickAndMortyCharactersCards = () => {
  //characters is read-only, immutable
  //setCharacters is the setter we use
  //every time setCharacters is called with a new value
  //React will regenerate (rerender) anything which relies on character
  const [characters, setCharacters] = React.useState([]);
  const [characterUrl, setCharacterUrl] = React.useState("");
  const [singleCharacter, setSingleCharacter] = React.useState(null);
  const [isSingleCharacterView, setIsSingleCharactersView] = React.useState(false);



  //side effects! what do we want to happen after we load the basics
  React.useEffect(() => {
    //on page load, we dont know anything about rick and morty characaters
    //we have to fetch the information from the API
    fetch(rickAndMortyCharactersEndpoint)
      .then(
        //convert the result to json. res stands for response
        (res) => res.json()
        )
      .then(
        //use the json result (now a javascript object)to update our record (the state) of characters
        (data) => {
        setCharacters(data.results);
      });
  }, []);

  React.useEffect(() => {
    if(characterUrl === '') {
      return;
    } 
    fetch(characterUrl)
    .then((response) => response.json())
    .then((data) => {
      setSingleCharacter(data);
      setIsSingleCharactersView(true);
    });
  }, [characterUrl]);


  ///react fragment just groups stuff together without affecting the dom. it can just be <> </>
  return isSingleCharacterView ? (
    //make this pretty instead of printing out json
    <p>somesungle character stuff {JSON.stringify(singleCharacter)}</p>
  ) : (
        <React.Fragment>
      <div className="characters-wrapper">
        {characters.map((props) => (
          <CharacterCard {...props}
          key={props.id}
          setCharacterUrl={setCharacterUrl}/>
        ))}
      </div>
      <footer>
        <p>Copyright 2021</p>
      </footer>
    </React.Fragment>
  );
};

export default RickAndMortyCharactersCards;
