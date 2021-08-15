function BlogList({blogs, title, handleDelete}) {
    return (  
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <h4>Written By: { blog.author }</h4>
                    <button className="button-danger" style={{marginTop: "8px"}}onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;