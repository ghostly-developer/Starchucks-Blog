import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');
    localStorage.setItem('blogs', blogs);
    return (  
        <div className="home">
            { error && <h1>{ error }</h1>} 
            { isLoading && <h1>Loading Data...</h1> }
            { blogs && <BlogList blogs={ blogs } title="All Blogs"/> } {/* Skip rendering if blogs is still null*/}
        </div>
    );
}
 
export default Home;
