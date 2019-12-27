import React, { useState, useEffect } from 'react';
import { getBreeds, getCatsImagesByBreed} from '../src/CatApi';
import './App.css';

function myApp (props) {
  const [images,setImages] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [selected_breed, setselected_breed] = useState("aege");

  async function loadBreedImages() {
    console.log('Load Breed Images:', selected_breed)

    let breed_images = await getCatsImagesByBreed(selected_breed, 5)

    setImages(breed_images);
  }

  async function onBreedSelectChange(e) {
    console.log("Breed Selected. ID:",e.target.value)
    await setselected_breed(e.target.value);
  }

  //useEffect runs onComponentMount
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

  useEffect(() => {
    console.log(selected_breed)
    console.log("breed change")
    loadBreedImages();
  

  },[selected_breed]);

  return (
    <div>

  <select value={selected_breed} 
          onChange={onBreedSelectChange}>
    {breeds.map((breed) => <option key={breed.id} value={breed.id}>{breed.name}</option>)}
  </select>

  <div>
 {images.map((image) => <img className="cat-image" alt="" src={image.url}></img>)}
 </div>

 </div>)

}


export default myApp;