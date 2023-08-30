import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { format } from 'date-fns';

function News() {
  const {userInfo} = useContext(UserContext);
  const username = userInfo?.username;
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch("https://chi-sat.onrender.com/post-article").then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    })
  }, []);

  return (
    <div className='container'>
      <div className = "pageTitle">
        <h1>Tin tức </h1>
        <h5>Cùng Chi SAT tìm hiểu về kì thi Digital SAT, bí kíp ôn thi của các bạn học sinh, và nhiều hơn nữa!</h5>
        {username && (
        <Link className='createBtn' to="/create-article">Create new post</Link>
        )}
      </div>
      
      <div className="student-container">
            
        {posts.length > 0 && posts.map(post => (
            <div className="box">
    
            <img src={"https://chi-sat.onrender.com/"+post.cover} alt="" />

            <div className="student-textBox">
                <h4 className='student-name'>{post.title}</h4>
                
                <p className='student-quote'>
                    {post.summary}
                </p>
                <p><small class="text-muted">{format(new Date(post.createdAt), "dd/MM/yyyy - p")}</small></p>

                <div className="card-editBtn">
                  <Link className='card-editBtn__link' to = {`/article/${post._id}`} >Xem thêm <ArrowForwardIcon/> </Link>
                </div>

                
            
            </div>   
        </div>
        ))}

        
        </div>
      


    </div>
  )
}

export default News