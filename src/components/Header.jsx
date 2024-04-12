import React, { useState } from 'react'

const Header = ({world,worldLenght,setFilterBtn, setFilterInput,filterInput}) => {
    const [regions, setRegions]=useState([])
    world?.map((country)=>{
        if(!regions.includes(country.region)){
            regions.push(country.region)
        }
    })


  return (
    <header>
        <button onClick={()=>setFilterBtn(1)}>All</button>
        {regions?.map((reg)=>(
            <button key={reg} value={reg} onClick={()=>setFilterBtn(reg)}>{reg}</button>
        ))}
        <input type="text" value={filterInput} onChange={(e)=>setFilterInput(e.target.value)} placeholder='Search'/>
        <span>Country count: {worldLenght}</span>
    </header>
  )
}

export default Header