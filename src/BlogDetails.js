import { useParams } from "react-router-dom";
import useFetch  from './useFetch';

function BlogDetails() {
    const { id } = useParams();
    const { data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id)
    return (  
        <div className="blog-details">
            { isLoading && <h1>Loading Data...</h1>}
            { error && <h1>{ error }</h1>} 
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <h4>Written By: { blog.author }</h4>
                    <div className="article-body"> { blog.body } </div>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;