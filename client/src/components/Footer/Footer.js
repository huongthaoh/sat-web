import React from 'react'
import "./Footer.css"
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div id = "footer-container" className='container-fluid'>
        <footer>
          <div className="footer-content">

            <div className="footer-sec">
                <h2>Chi SAT - Bứt phá 1550 SAT</h2>
                <p>Cùng Chi SAT chinh phục kì thi Digital SAT ngay hôm nay!</p>
            </div>

            <div className="footer-sec">
                <h2>Liên kết chính</h2>
                <ul>
                <li><Link className='footer-secLink' to = "/">Trang chủ</Link></li>
                <li><Link className='footer-secLink' to = "/khoa-hoc">Khoá học</Link></li>
                <li><Link className='footer-secLink' to = "/hoc-vien">Thành tích học viên</Link></li>
                <li><Link className='footer-secLink' to = "/tin-tuc">Tin tức</Link></li>
            
                </ul>
            </div>
        
            <div className="footer-sec">
                <h2>Liên hệ</h2>
                <ul className='footer-secUl'>
                <li><EmailIcon style = {{marginRight: "5px", color: "var(--cl-gray-3)", fontSize: "1.2em"}}/> <a href="mailto: nmaichi03@gmail.com">nmaichi03@gmail.com</a> </li>
                <li><FacebookIcon style = {{marginRight: "5px", color: "var(--cl-gray-3)", fontSize: "1.2em"}}/> <a target = "_blank" href="https://www.facebook.com/profile.php?id=100075575067005">Chi SAT - Bứt phá 1550 SAT</a></li>
                </ul>
            </div>

            </div>
        </footer>
        <div className="footer-copyrightText">
          <p>Created by Thao Hoang</p>
        </div>  
        
        
    </div>
  )
}

export default Footer