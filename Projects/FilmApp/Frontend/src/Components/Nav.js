
import fxlogo from "../img/fx.png"
import { Link } from "react-router-dom";
const Nav=()=>{
    return(

        <div className="navbar">
            
            {/* <img className="logo"  src="mb.png"/>  */}
            <img  className="logo" src={fxlogo}/>
            <ul className="List">
                <li><Link to="/"className="link">Genres</Link></li>
                <li><Link to="/upcomming"className="link3">Upcomming</Link></li>
                <li><Link to="/trending" className="link4">Trending</Link></li>
                <li><Link to="/favorites" className="link">Watchlist</Link></li>
                <Link to="/login"><button className="log-button">login</button></Link>
            </ul>
        </div>
    )
}

export default Nav;