import React, { useState } from 'react'

const More = ({moreShow, setMoreShow, more}) => {
    // console.log(more);
    const {flags, capital, name, region, population, area, currencies, languages, borders} = more
    let currency = []
    let language = []
    let border = []

    if(currencies){
        currency = Object.keys(currencies)
    }
    if(languages){
        language = Object.values(languages)
    }
    if(borders){
        border = Object.values(borders)
    }



    const enableScroll =()=>{
        document.querySelector("body").style.overflow="scroll"
    }

  return (moreShow===0?null:
    <div className='more_info'>
    <button onClick={()=>(
        setMoreShow(0),
        enableScroll()
        )}>Go back</button>

        <img src={flags.png} alt={flags.alt} />
        <h1>Name: {name.common}</h1>
        <h2>Capital: {capital}</h2>
        <h2>Region: {region}</h2>
        <h2>Population: {population} peaple</h2>
        <h2>Area: {area}km²</h2>
        <h2>currencies: {currency?.map((cur)=>(
            <span key={cur}>{cur}</span>
        ))}</h2>
        <h2>Languages: {language?.map((lan)=>(
            <span key={lan}>  {lan}</span>
        ))}</h2>
        <h2>Borders: {border?.map((bor)=>(
            <span key={bor}>  {bor}</span>
        ))}</h2>

    </div>
  )
}

export default More