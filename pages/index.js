import React, { useState, useEffect } from 'react';
import { getCatsImagesByBreed} from '../src/CatApi';
import './App.css';
import { CatDropdown, ImageList } from '../src/components'

function myApp (props) {
  const [images,setImages] = useState([]);
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

  useEffect(() => {
    (async () => {
        console.log(selected_breed)
        console.log("breed change")
        await loadBreedImages();
      })();
    
  
  },[selected_breed]);

  return (
    <div>
        <CatDropdown selectedBreed={selected_breed} onBreedSelectChange={onBreedSelectChange} />
        <ImageList images={images} />
    </div>)

}


export default myApp;