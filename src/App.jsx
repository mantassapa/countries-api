import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CountriesList from "./components/CountriesList";
import Header from "./components/Header";
import More from "./components/More";

function App() {
  const [world, setWorld] = useState([]);
  const [worldCopy, setWorldCopy] = useState([]);
  const [filterBtn, setFilterBtn] = useState(1);
  const [filterInput, setFilterInput] = useState("");
  const [inputList,setInputList] = useState([])
  const [more,setMore] = useState("")
  const [moreShow,setMoreShow] = useState(0)


  useEffect(() => {
    if (filterBtn === 1) {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((res) => {setWorldCopy(res.data); setWorld(res.data)});
      }

    if (filterBtn !== 1 && filterBtn!==0) {
      axios
        .get(`https://restcountries.com/v3.1/region/${filterBtn}`)
        .then((res) => setWorld(res.data));
    }
  }, [filterBtn]);

  useEffect(() => {
    setWorld(worldCopy)
    setInputList([])
      world?.map((c)=>{
      if(c.name.common.toLowerCase().match(filterInput.toLowerCase())){
        inputList.push(c)
      }
      setWorld(inputList)
      setFilterBtn(0)
      })
      if(filterInput===""){
        setWorld(worldCopy)
      }
  }, [filterInput]);


  return (
    <div className="App">
      <Header
        world={world}
        setFilterBtn={setFilterBtn}
        setFilterInput={setFilterInput}
        filterInput={filterInput}
        worldLenght={world.length}
      />
      <More moreShow={moreShow} setMoreShow={setMoreShow} more={more}/>
      <CountriesList world={world} setMoreShow={setMoreShow} setMore={setMore}/>
    </div>
  );
}

export default App;
