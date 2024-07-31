import React, { useEffect, useState } from 'react'
import axios from "../utils/axios"; 

const Gallery = () => {
    const [images, setimages] = useState([]);

    const getPic = async() => {
        const response = await axios.get('/Gallerys');
        console.log(response.data);
        setimages(response.data);
    }

    useEffect(() => {
        getPic()
    }, [])
    
  return (
      <>
        <button onClick={getPic} className='px-3 py-1 bg-blue-500 cursor-pointer text-white font-extrabold'>Calling Images</button>

          <div className="card-container flex">
              {images.map((image) => {
                  console.log(image.url);
                  return (
                      <>
                      <img key={image.id} src={image.url} alt="" />                  
                      </>
                  )
              })  }
          </div>
      </>
  )
}

export default Gallery