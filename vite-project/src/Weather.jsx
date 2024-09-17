import React from 'react'
import { Prac } from './Prac'
import CardWeather from './CardWeather'
import { useState } from 'react'

const Weather = () => {
  let[info,setInfo]=useState({
    city:"Jalandhar",
    temp:30,
    max_temp:40,
    min_temp:30,
    humidity:20,
  })


  let updateInfo=(newInfo)=>{
    setInfo(newInfo);
  }
  
  return (
    <div className='border-4 border-purple-950 mr-4 ml-4 mb-4mt-4'>
        <Prac updateInfo={updateInfo}/>
        <CardWeather info={info}/>
    </div>
  )
}

export default Weather