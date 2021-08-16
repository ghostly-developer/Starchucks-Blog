import { useParams } from "react-router-dom";
import useFetch  from './useFetch';
import { useHistory } from 'react-router-dom';

function BlogDetails() {
    const { id } = useParams();
    const { data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory();

    //Simple as pie.
    function handleDelete(){
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log("Blog Deleted")
            history.push('/Starchucks-Blog');
        })
    }
    return (  
        <div className="blog-details">
            { isLoading && <h1>Loading Data...</h1>}
            { error && <h1>{ error }</h1>} 
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <h4>Written By: { blog.author }</h4>
                    <div className="article-body"> { blog.body } </div>
                    <br />
                    <button className="button-danger"onClick={handleDelete}>Delete Blog</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;