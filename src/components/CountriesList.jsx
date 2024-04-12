import React from 'react'
import Country from './Country'

const CountriesList = ({world, setMoreShow,setMore}) => {
  return (
    <div className='country_list'>
        {world?.map((country)=>(
            <Country key={country.cca2} country={country} setMoreShow={setMoreShow} setMore={setMore}/>
        ))}
    </div>
  )
}

export default CountriesList