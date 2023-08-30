import React, { useState } from 'react'
import "./CreateArticles.css"
import { Navigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CreateArticle() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    const createNewArticle = async (e) => {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        e.preventDefault();
        // console.log(files);
        const response = await fetch("https://chi-sat.onrender.com/post-article", {
            method: "POST",
            body:  data,
        });
        if (response.ok) {
            setRedirect(true);
        } else {
            alert("An error has occured. Please check if you have included a cover for this post.")
        }
        
    }

    if (redirect) {
        return <Navigate to = {"/tin-tuc"} />
    }
    return (
    <div id = "createArticle" className='container'>
        <div className='create-form'>
        <h2>Create an article</h2>
        <form onSubmit = {createNewArticle} className = "createArticle-form" action="">
            <div>
                <label for = "title" className='form-label'>Title</label>
                <input className='form-control' name = "title" type="text" maxlength = "50" value = {title} 
                    onChange = {(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label for = "summary" className='form-label'>Summary</label>
                <textarea name = "summary" className='form-control' rows = "4" maxlength = "300" placeholder= "What is this article about?" value = {summary} onChange = {(e) => setSummary(e.target.value)} />
            </div>
            <div>
                <label for = "photo" className='form-label'>Photo</label>
                <input type="file" onChange = {(e) => setFiles(e.target.files)} className='form-control'/> 
            </div>
            <div>
                <label for = "body" className='form-label'>Content</label>
                <ReactQuill value={content} onChange = {newValue => setContent(newValue)}/>
            </div>

            <div className="formBtn">
                <button className='actionBtn' style = {{backgroundColor: "var(--cl-light-alt)", color: "var(--cl-dark)"}} onClick={() => setRedirect(true)}>Cancel</button>
                <button className='actionBtn' type = "submit">Post</button>
                
            </div>

        </form>
    </div>
    </div>
  )
}

export default CreateArticle