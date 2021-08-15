import { useState } from 'react';
import BlogList from './BlogList';

function Home() {
    const [blogs, setBlogs] = useState([ 
    { title: 'Starchucks Weekly', body: 'lorem ipsum...', author: 'Mario', id: 1 },
    { title: 'Preview: New Caffe Americano', body: 'lorem ipsum...', author: 'Luigi', id: 2 },
    { title: 'Introducing: Brrrappucinos', body: 'lorem ipsum...', author: 'Mario', id: 3 }
    ]);

    function handleDelete(id){
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (  
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs" handleDelete={ handleDelete }/>
        </div>
    );
}
 
export default Home;