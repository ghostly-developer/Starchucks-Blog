import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Create() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();
        const blog = { title, body, author};

        setIsLoading(true);
        //Submitting all information to db.json
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog) 
        }).then(() => {
            console.log("New Blog Added")
            setIsLoading(false);
            history.push('/');
        })

    }

    return (  
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog Title:</label>
                <input
                 type="text" 
                 required
                 value={ title }
                 onChange={(e) => setTitle(e.target.value)}
                 placeholder="Title"
                 />
                <label>Blog Content:</label>
                <textarea 
                 required
                 value={ body }
                 onChange={(e) => setBody(e.target.value)}
                 placeholder="Content Here"
                ></textarea>
                <label>Blog Author:</label>
                <select
                 value={ author }
                 onchange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
                </select>
                <br />
                {!isLoading && <button>Submit</button>}
                {isLoading && <button disabled>Submitting...</button>}
            </form>
        </div>
    );
}
 
export default Create;