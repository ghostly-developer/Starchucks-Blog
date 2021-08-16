import { Link } from 'react-router-dom';

function BlogList({blogs, title, handleDelete}) {
    return (  
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link style={{textDecoration: 'none'}} to={`/Starchucks-Blog/blogs/${ blog.id }`}>
                        <h2>{ blog.title }</h2>
                        <h4>Written By: { blog.author }</h4>
                    </Link>
                    
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;