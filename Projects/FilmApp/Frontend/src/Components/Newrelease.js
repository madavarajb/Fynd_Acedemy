
import React, { useEffect, useState } from "react";
import Moviecards from "./Moviecards";
import Catogory from "../Components/Catogory";
import Searchnav from "./searchnav";
import Pageno from "./Pageno";

const Newrelease = () => {
  const[listofmovie,setlistofmovie]=useState([]);
    const[searchText,setSearchText]=useState([]);
    const[filterList,setfilterList]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

  const fetchData = async (newPage) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=837ddd7bf3645dab7c2e0b4d81c44b22&with_origin_country=IN&page=${newPage}`
    );
    const json = await data.json();
    setlistofmovie(json.results);
    setfilterList(json.results);
  };

  return (
    <div className="moviedisplay">
      <Searchnav/>
        <Catogory/>
            <div className="nav2">
                
                    <input type="text" className="search-box" placeholder="Search movie" value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button className="searchbtn" onClick={()=>{
                       const filterlist= listofmovie.filter((res)=>res.title.toLowerCase().includes(searchText.toLowerCase()));

                        setfilterList(filterlist);
                    }}>search</button>
        
            </div>
            {filterList.map((movie) => (
                <Moviecards key={movie.id} movie={movie} />
            ))}
      <Pageno onPageChange={fetchData} />
    </div>
  );
};

export default Newrelease;