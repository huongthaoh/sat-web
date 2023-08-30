import { IconButton } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../UserContext';
import "./Navbar2.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
    
    const {setUserInfo,userInfo} = useContext(UserContext);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        fetch("https://chisat.comprofile", {
        credentials: "include",
        }).then(response => {
        response.json().then(userInfo => {
            setUserInfo(userInfo);
        })
        })
    }, []);
        
    const logout = () => {
        fetch('https://chisat.comlogout', {
            credentials: 'include',
            method: "POST",
        })
        // setUsername(null);
        setUserInfo(null);
    
    }
    const username = userInfo?.username;

    const openMenu = () => {
        if (menuActive) setMenuActive(false);
        else setMenuActive(true);
    }


  return (
    <div>
    <nav>
        {menuActive && 
            <div className="nav--menu2">
                
       
            <li><Link className='nav--link' to = "/">Trang chủ</Link></li>
            <li><Link className = "nav--link" to = "/khoa-hoc">Khoá học</Link></li>
            <li><Link className = "nav--link" to = "/hoc-vien">Thành tích học viên</Link></li>
            <li><Link className = "nav--link" to = "/tin-tuc">Tin tức</Link></li>
            
            
            {username && (
                <div>
                <li><Link className = "nav--link" to="/dang-ky">Register</Link></li>
                <li><a href = "" onClick = {logout}> Sign out</a></li>
                </div>    
            )}
            
            {!username && ( 
                <li><Link className = "nav--link" to="/dang-nhap">Login</Link></li>
            )}
            

        
            </div>
        }
        <div className={`toggle${menuActive ? " toggle-active" : ""}`} onClick={openMenu}>
            <IconButton style = {{fontSize: "2em"}}>
                {menuActive && <CloseIcon />}
                {!menuActive && <MenuIcon style = {{color: "var(--cl-gray-3)"}}/>}
            </IconButton>
        </div>
        <ul className='nav--ul'>
        {/* <li><a href="" className='nav--logo'>Chi SAT</a></li> */}
            <li><Link className='nav--link' to = "/">Trang chủ</Link></li>
            <li><Link className = "nav--link" to = "/khoa-hoc">Khoá học</Link></li>
            <li><Link className = "nav--link" to = "/hoc-vien">Thành tích học viên</Link></li>
            <li><Link className = "nav--link" to = "/tin-tuc">Tin tức</Link></li>
            {/* <li><Link className = "nav--link" to = "/">Trang chủ</Link></li> */}
            {username && (
                <div className='nav--user'>
                <li><Link className = "nav--link" to="/dang-ky">Register</Link></li>
                <li><a href = "" onClick = {logout}> Sign out</a></li>
                </div>    
            )}
            
            {!username && ( 
                <li><Link className = "nav--link" to="/dang-nhap">Login</Link></li>
            )}

        </ul>

        {/* {menuActive && 
        <div className="nav--menu">
            
        </div>
        } */}
    </nav>

    {/* {menuActive && 
        <div className="nav--menu">
            
        </div>
    } */}
    <div className='nav--boxshadow'>

    </div>


    </div>
  )
}

export default Navbar