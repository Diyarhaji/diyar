import React from 'react'
import '../App.css'
const Tiltle = ({text}) => {
  return (
    <div data-aos="zoom-in-up" data-aos-duration="900" className="text-5xl tracking-widest mx-auto text-center mt-20 loader uppercase  ">
        {text}
    </div>
  )
}

export default Tiltle
