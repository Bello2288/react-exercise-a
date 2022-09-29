import {useState} from 'react';

function Form({addPost}) {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    
    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleBody = (e) => { 
        setBody(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            title,
            body,   
        }
        addPost(newPost);
        setTitle("");
        setBody("");
    };


    return(
        <form class="form-box">
            <div class="form">
                <label htmlFor=""></label>
                <input class="title" value={title} type='title' name='title' placeholder="Blog Title" autoComplete='off' onChange={handleTitle}></input>
                <textarea class="story" value={body} placeholder="Type your story ..." onChange={handleBody}></textarea> 
                <button class="button" type="submit" name='saveButton' onClick={handleSubmit}>Submit</button>
            </div>
        </form>
        )
    };


  export default Form;