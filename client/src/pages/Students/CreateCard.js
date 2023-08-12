import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
// import "./CreateCard.css"

function CreateCard() {
    const [name, setName] = useState('');
    const [school, setSchool] = useState('');
    const [score, setScore] = useState('');
    const [quote, setQuote] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);


    const createNewCard = async(e) => {
        const data = new FormData();
        data.set('name', name);
        data.set('school', school);
        data.set('score', score);
        data.set('quote', quote);
        data.set('file', files[0]);
        e.preventDefault();
        const response = await fetch("https://chi-sat.onrender.com/post-student", {
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
        return <Navigate to = {"/hoc-vien"} />
    }
    return (
    <div id = "createArticle" className='container'>
        <div className='create-form'>
        <h2>Create a new card</h2>
        <form onSubmit = {createNewCard} className = "createArticle-form" action="" style = {{height: "100%"}}>
            <div>
                <label for = "student-name" className='form-label'>Full name</label>
                <input className='form-control' name = "student-name" type="text" maxlength = "50" value = {name} 
                    onChange = {(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label for = "student-school" className='form-label'>School</label>
                <input className='form-control' name = "student-school" type="text" maxLength={50} value = {school} 
                    onChange = {(e) => setSchool(e.target.value)}/>
            </div>
            <div>
                <label for = "student-score" className='form-label'>SAT Score (will displayed as SAT: ...)</label>
                <input className='form-control' name = "student-score" type="text" maxLength={30} placeholder = "e.g., 1500/1600 (700 RW, 800M)" value = {score} 
                    onChange = {(e) => setScore(e.target.value)}/>
            </div>
            <div>
                <label for = "student-quote" className='form-label'>Quote (tối đa: 500 kí tự)</label>
                <textarea name = "student-quote" className='form-control' rows = "4" maxlength = "500" placeholder= "Highlight of student's feedback for Chi SAT" value = {quote} onChange = {(e) => setQuote(e.target.value)} />
            </div>
            <div>
                <label for = "photo" className='form-label'>Photo (không bắt buộc)</label>
                <input type="file" onChange = {(e) => setFiles(e.target.files)} className='form-control'/> 
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

export default CreateCard