
const Moviecards=({movie})=>{  
    return(
        <div className="flip-card">
        <div className="inner">
          <div className="front">
            <img className="con-img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
          </div>
          <div className="back">  
          <img className="con-img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            <h1>{movie.title}</h1> 
            {/* <p>Architect & Engineer</p>  */}
            <button className="btn1">
        Add to WatchList
      </button>
            
          </div>
        </div>
      </div>
        
    )
}
export default Moviecards;