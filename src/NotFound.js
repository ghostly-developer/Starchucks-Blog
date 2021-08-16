import { Link } from 'react-router-dom';

function NotFound() {
    return (  
        <div className="NotFound">
            <h1>Sorry.</h1>
            <br />
            <h4>Error 404</h4>
            <br />
            <h4>Current Page Cannot Be Found</h4>
            <br />
            <Link to="/" style={{textDecoration: 'none', color: '#007a33'}}>Back To Home</Link>
        </div>
    );
}
 
export default NotFound;