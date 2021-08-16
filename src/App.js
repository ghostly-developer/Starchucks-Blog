import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  document.title = "Starchucks Weekly";
  return (
    <Router>
      <div> 
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/Starchucks-Blog"> 
              <Home />
            </Route>
            <Route path="/Starchucks-Blog/create"> 
              <Create />
            </Route>
            <Route path="/Starchucks-Blog/blogs/:id"> 
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
