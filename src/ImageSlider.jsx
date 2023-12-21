import { useState } from 'react';
import {data} from './Constants';

export default function ImageSlider() {
  const [activeImageIndex,setActiveImageIndex] =useState(0);
  return (
  <div className='flex justify-center'> 
  <button className='font-bold p4 m-10'>Previous</button>
  {data.map((url,i)=>{
    <img 
    key={url}
    src={url} 
    className={"w-[700px] h-[500px] object-contain " + (activeImageIndex === i ? "block" : "hidden")}
    alt='wallpaper'/>
  })}
  <button className='font-bold p-4 m-10'>Next</button>
  </div>
  );
}
