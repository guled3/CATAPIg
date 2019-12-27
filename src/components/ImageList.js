import React, { useState, useEffect } from 'react';

function ImageList (props) {


  return (

      <div>
          {props.images.map((image) => <img className="cat-image" alt="" src={image.url}></img>)}
      </div>);

}


export default ImageList;