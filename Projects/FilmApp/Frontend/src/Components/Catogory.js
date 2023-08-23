// import React, { useEffect, useState } from "react";
// import Routecato from "./routecato";
// import { Link } from "react-router-dom";

// const Category = () => {
//     const [buttons, setButtons] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await fetch(
//                 "https://api.themoviedb.org/3/genre/movie/list?api_key=b8e929fcf88bc91eb9c68ac9c01aaf41"
//             );
//             const data = await response.json();
//             setButtons(data.genres);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     return (
//         <div className="cato">
//             {buttons.map((genre) => (
//                 <button  className="cato1"><Link key={genre.id} to={"/movies/"+genre.id} className="link1"> {genre.name}</Link>
                   
//                 </button>
//             ))}
            
//         </div>
//     );
// };

// export default Category;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
    const [buttons, setButtons] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://api.themoviedb.org/3/genre/movie/list?api_key=b8e929fcf88bc91eb9c68ac9c01aaf41"
            );
            const data = await response.json();
            setButtons(data.genres);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleCategoryClick = (index) => {
        setActiveCategory(index === activeCategory ? null : index);
    };

    return (
        <div className="cato">
            {buttons.map((genre, index) => (
                <button
                    key={genre.id}
                    className={`cato1 ${activeCategory === index ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(index)}
                >
                    <Link to={"/movies/"+genre.id} className="link1">
                        {genre.name}
                    </Link>
                </button>
            ))}
        </div>
    );
};

export default Category;
