import React, { useState, useEffect } from 'react';
import { getBreeds } from '../CatApi';

function CatDropdown (props) {
  const [breeds, setBreeds] = useState([]);
  
  useEffect(() => {
    if (breeds.length===0) {
      (async () => {
          try {
              setBreeds(await getBreeds());
          } catch (e) {
              //...handle the error...
              console.error(e)
          }
      })();
  }
    
  },[]);


  return (
  <select value={props.selectedBreed} 
          onChange={props.onBreedSelectChange}>
    {breeds.map((breed) => <option key={breed.id} value={breed.id}>{breed.name}</option>)}
  </select>)

}


export default CatDropdown;