function Navbar() {
    return (  
        <nav className="navbar">
            <h1>Starchucks Weekly</h1>
            <div className="links">
                <a href="./">Home</a>
                <a className="button" href="./create">New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;