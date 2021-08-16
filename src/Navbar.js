import { Link } from 'react-router-dom';

function Navbar() {
    return (  
        <nav className="navbar">
            <h1>Starchucks Weekly</h1>
            <div className="links">
                <Link to="/Starchucks-Blog">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;