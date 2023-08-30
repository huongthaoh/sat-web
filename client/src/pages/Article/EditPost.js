import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import { Navigate, useParams } from 'react-router-dom';

function EditPost() {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch("https://chisat.compost/"+id)
            .then(response => {
                response.json().then(postInfo => {
                    setTitle(postInfo.title);
                    setContent(postInfo.content);
                    setSummary(postInfo.summary);
                })
            })
    }, []);

    const updatePost = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);
        if (files?.[0]) {data.set('file', files?.[0]);}

        const response = await fetch("https://chisat.compost", {
            method: "PUT",
            body: data,
            // credentials: 'include',
        });
        if (response.ok) {
            setRedirect(true);
        }
       
    }

    if (redirect) {
        return <Navigate to = {"/tin-tuc"} />
    }

    return (
        <div id = "createArticle" className='container'>
        <div className='create-form'>
        <h2>Edit article</h2>
        <form onSubmit = {updatePost} className = "createArticle-form" action="">
            <div>
                <label for = "title" className='form-label'>Title</label>
                <input className='form-control' name = "title" type="text" maxlength = "50" value = {title} onChange = {(e) => setTitle(e.target.value)}/>
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
                <ReactQuill value={content} onChange = {setContent}/>
            </div>

            <div className="formBtn">
                <button className='actionBtn' style = {{backgroundColor: "var(--cl-light-alt)", color: "var(--cl-dark)"}} onClick={() => setRedirect(true)}>Cancel</button>
                <button className='actionBtn' type = "submit">Save edits</button>
                
            </div>
            
        </form>
    </div>
    </div>
  )
}

export default EditPost