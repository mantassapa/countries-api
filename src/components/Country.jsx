import React from 'react'

const Country = ({country, setMoreShow, setMore}) => {
    const {flags, capital, name, region} = country
    
    const dissableScroll =()=>{
        document.querySelector("body").style.overflow="hidden"
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    
    }
  return (
    <div className='country_card'>
        <img src={flags.png} alt={flags.alt}/>
        <h2>{name.common}</h2>
        <p>Capital: {capital}</p>
        <p>Region: {region}</p>
        <button onClick={()=>(
            setMoreShow(1),
            setMore(country),
            dissableScroll()
            )}>More</button>
    </div>
  )
}

export default Country