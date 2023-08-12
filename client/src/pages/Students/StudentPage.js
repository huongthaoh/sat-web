import { Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import "./StudentPage.css"
import DeleteIcon from '@mui/icons-material/Delete';

function StudentPage() {

    const [cards, setCards] = useState([]);
    const {userInfo} = useContext(UserContext);
    const username = userInfo?.username;

    useEffect(() => {
        fetch("https://chi-sat.onrender.com/post-student").then(response => {
            response.json().then(cards => {
                setCards(cards);
            })
        })
    }, []);

    return (
    <div className='container' >
        <div className = "pageTitle">
            <h1>Thành tích học viên </h1>
            <h5>Hơn 200 học viên tại Chi SAT đạt số điểm từ 1300-1500 chỉ sau 60 tới 80 giờ học.</h5>
            {username && (<Link className = "createBtn" to = "/create-card">Create new card</Link>)}
        </div>

        <div className="student-container">
            
        {cards.length > 0 && cards.map(card => (
            <div className="box">
    
            <img src={"https://chi-sat.onrender.com/"+card.cover} alt="" />

            <div className="student-textBox">
                <h4 className='student-name'>{card.name}</h4>
                <p className='student-school'>{card.school}</p>
                {card.score !== "" ? (
                    <h5 className='student-score'>SAT: {card.score}</h5>
                ) : null}
                <p className='student-quote'>
                    <span>"</span>
                    {card.quote}
                    <span>"</span>
                </p>
                {username && (
                <div className="card-editBtn">
                    <Link className = "card-editBtn__link" to = {`/edit-card/${card._id}`}>Edit bài viết</Link>
                </div>
            )}
            </div>   
        </div>
        ))}

        
        </div>
    </div>
  )
}


export default StudentPage