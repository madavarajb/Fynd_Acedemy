import React, { useEffect, useState } from "react";
import Moviecards from "./Moviecards";
import Searchnav from "./searchnav";
import { useParams } from "react-router-dom";
import Category from "./Catogory";
import Pageno from "./Pageno";

const Routecato = () => {
  const { id } = useParams();
  const [listofmovie, setListofmovie] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterList, setFilterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page number

  useEffect(() => {
    fetchData(currentPage); // Fetch data for the current page
  }, [id, currentPage]); // Add id and currentPage as dependencies

  const fetchData = async (newPage) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=837ddd7bf3645dab7c2e0b4d81c44b22&with_origin_country=IN&page=${newPage}`
    );
    const json = await data.json();
    setListofmovie(json.results);
    setFilterList(json.results);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage); // Update the current page
    fetchData(newPage); // Fetch data for the new page
  };

  return (
    <div className="moviedisplay">
      <Searchnav />
      <Category />
      <div className="nav2">
        <input
          type="text"
          className="search-box"
          placeholder="Search movie"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="searchbtn"
          onClick={() => {
            const filterlist = listofmovie.filter((res) =>
              res.title.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterList(filterlist);
          }}
        >
          search
        </button>
      </div>
      {filterList.map((movie) => (
        <Moviecards key={movie.id} movie={movie} />
      ))}
      <Pageno onPageChange={handlePageChange} />
    </div>
  );
};

export default Routecato;
