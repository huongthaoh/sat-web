import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import pfp from "./maichi_profile.png"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import maichi from "./pfp.jpeg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Hero() {
  return (
    <div id = "home-hero" className='container-fluid'>
      {/* <div className="home-heroCircle"></div> */}
      <div className="home-heroContent">
        <div className="home-heroText">
          <h2>Chi SAT - Bứt phá <span>1550 SAT</span></h2>
          <ul className='home-heroList'>
            <li>Nguyễn Mai Chi là <strong>cựu học sinh chuyên Anh trường Hà Nội - Amsterdam</strong> và đã từng đạt số điểm thi SAT là <strong>1590 (790 RW, 800 MATH) trên 1600.</strong></li>
            <li>Với <strong>hơn ba năm kinh nghiệm</strong> giảng dạy SAT, Mai Chi đã giúp hơn 200 học viên đạt số điểm từ <strong>1300-1500 chỉ sau 60 tới 80 giờ học.</strong></li>
          </ul>
         
          {/* <p>Chi SAT được thành lập bởi Nguyễn Mai Chi. Chi là <strong>cựu học sinh chuyên Anh trường Hà Nội - Amsterdam</strong> và đã từng đạt số điểm thi SAT là <strong>1590 (790 RW, 800 MATH) trên 1600</strong>. Với <strong>hơn ba năm kinh nghiệm giảng dạy SAT</strong>, Mai Chi mong muốn mang kiến thứcsc và chuyên môn của mình giúp các bạn học sinh chinh phục kỳ thi SAT. </p> */}
          {/* <p>Lớp học Chi SAT đào tạo chuyên sâu về kĩ năng Đọc, Viết, Toán, và chữa đề, với chất lượng cao và giá cả phải chăng nhất. Tính đến năm 2023, Mai Chi đã <strong>giúp hơn 200 học viên đạt số điểm từ 1300-1500 chỉ sau 60 tới 80 giờ học.</strong> </p> */}
          <Link className = "home-heroLink" to = "/khoa-hoc">Tìm hiểu thêm 
            <ArrowForwardIcon className='home-heroLinkIcon' style = {{marginLeft: "5px"}}/>
          </Link>
        </div>
        <div className="home-heroImage">
          <img src={maichi} alt="" />
        </div>
        {/* <div className="home-heroImg">
          <img src={pfp} alt="" />
        </div> */}
        <ul className='home-heroSci'>
          <li><a href=""><FacebookRoundedIcon/></a></li>
          <li><a href="mailto: nmaichi03@gmail.com"><EmailRoundedIcon/></a></li>
          <li><a target = "_blank" href="https://www.facebook.com/profile.php?id=100075575067005"><ChatRoundedIcon/></a></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Hero