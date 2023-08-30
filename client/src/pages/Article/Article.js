import { Button } from '@material-ui/core';
import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { UserContext } from '../../UserContext';
import "./Article.css"


function Article() {
    const {id} = useParams();
    // const {userInfo} = useContext(UserContext);
    const {userInfo} = useContext(UserContext);
    const username = userInfo?.username;
    const [postInfo, setPostInfo] = useState(null);
    const [redirect, setRedirect] = useState(false);


    useEffect(() => {
        fetch(`https://chisat.compost/${id}`)
            .then(res => {
                res.json().then(postInfo => {
                    setPostInfo(postInfo);
                })
            })
    }, []);

    const deletePost = async () => {
        const response = await fetch(`https://chisat.comdelete-post/${id}`, {
            method: "DELETE",
        })
        if (response.ok) {
            setRedirect(true);
        }
    }

    if (!postInfo) return '';

    if (redirect) {
        return <Navigate to = {"/tin-tuc"} />
    }

  return (
    <div className='container pt-5 pb-5'>
         <div className='article__header'>
            <h1>{postInfo.title}</h1>
            
            <small>Đăng tải vào {format(new Date(postInfo.createdAt), "dd/MM/yyyy - p")}</small>

            {username && (
            <div className='formBtn'>
                <button className='actionBtn' style = {{backgroundColor: "var(--cl-gray-2)", color: "var(--cl-gray-3)"}} onClick = {deletePost}> Delete</button>
                <button className = "actionBtn"><Link style = {{textDecoration: "none", color: "inherit"}} to = {`/edit/${postInfo._id}`}>Edit</Link></button>

            </div>
        )}
        </div>

        
        

        <div className='article__img'>
            <img src= {`https://chisat.com${postInfo.cover}`} alt="" />
        </div>

        <div className = "article__content" dangerouslySetInnerHTML={{__html:postInfo.content}} />
     
    </div>
  )
}

export default Article