import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';

function EditCard() {
    const [name, setName] = useState('');
    const [school, setSchool] = useState('');
    const [score, setScore] = useState('');
    const [quote, setQuote] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    const {id} = useParams();

    useEffect(() => {
        console.log(id);
        fetch(`http://chisat.com/post-student/${id}`)
            .then(res => {
                res.json().then(cardInfo => {
                    setName(cardInfo.name);
                    setSchool(cardInfo.school);
                    setScore(cardInfo.score);
                    setQuote(cardInfo.quote);
                })
            })
    }, []);

    const updateCard = async(e) => {
        e.preventDefault();
        const data = new FormData();
        data.set('name', name);
        data.set('school', school);
        data.set('score', score);
        data.set('quote', quote);
        data.set('id', id);
        if (files?.[0]) {data.set('file', files?.[0]);}

        const response = await fetch("http://chisat.com/edit-student", {
            method: "PUT",
            body: data,
        });
        if (response.ok) {
            setRedirect(true);
        }
    }

    const deleteCard = async () => {
        const response = await fetch("http://chisat.com/delete-student/" + id, {
            method: "DELETE",
        })
        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to = {"/hoc-vien"} />
    }
    return (
    <div id = "createArticle" className='container'>
        <div className='create-form'>
        <h2>Edit this card</h2>
        <form onSubmit = {updateCard} className = "createArticle-form" action="">
            <div>
                <label for = "student-name" className='form-label'>Full name</label>
                <input className='form-control' name = "student-name" type="text" maxlength = "50" value = {name} 
                    onChange = {(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label for = "student-school" className='form-label'>School</label>
                <input className='form-control' name = "student-school" type="text" maxlength = "50" value = {school} 
                    onChange = {(e) => setSchool(e.target.value)}/>
            </div>
            <div>
                <label for = "student-score" className='form-label'>SAT Score</label>
                <input className='form-control' name = "student-score" type="text" maxlength = "30" value = {score} 
                    onChange = {(e) => setScore(e.target.value)}/>
            </div>
            <div>
                <label for = "student-quote" className='form-label'>Quote</label>
                <textarea name = "student-quote" className='form-control' rows = "4" maxlength = "300" placeholder= "Highlight of student's feedback for Chi SAT" value = {quote} onChange = {(e) => setQuote(e.target.value)} />
            </div>
            <div>
                <label for = "photo" className='form-label'>Photo (optional) </label>
                <input type="file" onChange = {(e) => setFiles(e.target.files)} className='form-control'/> 
            </div>
            
            <div className="formBtn">
                <button className='actionBtn' style = {{backgroundColor: "var(--cl-gray-3)", color: "var(--cl-light)"}} onClick={deleteCard}>Delete card</button>
                <button className='actionBtn' type = "submit">Save edits</button>
                
            </div>

            {/* <button type = "submit">Save edits</button> */}
            {/* <button onClick = {deleteCard}>Delete</button> */}
            
        </form>
    </div>
    </div>
    )
}

export default EditCard