import React from 'react'

import './Hero.css'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import LocalLibraryTwoToneIcon from '@mui/icons-material/LocalLibraryTwoTone';
import SavingsTwoToneIcon from '@mui/icons-material/SavingsTwoTone';
import Diversity3TwoToneIcon from '@mui/icons-material/Diversity3TwoTone';


function Hero() {
  return (
    <div id = "services-hero">
        <h2 className='services-heroTitle'>vì sao nên chọn Chi SAT</h2>
        <div className='services-heroContainer'> 
            <div className="services-heroCard" >
                <div className="services-heroContent">
                    <SavingsTwoToneIcon className='services-heroIcon'/>
                    <h2>01</h2>
                    <h3>Học phí phải chăng</h3>
                    <p>Học phí tại tất cả các lớp của Chi SAT là 140k/giờ, với thời lượng tổng cộng mỗi khoá là 60 giờ.  </p>
                </div>
            </div>
 
            <div className="services-heroCard" >
                <div className="services-heroContent">
                    <LocalLibraryTwoToneIcon className='services-heroIcon'/>
                    <h2>02</h2>
                    <h3>Lộ trình phù hợp</h3>
                    <p>Lộ trình luyện thi đáp ứng nhu cầu về thời gian thi và mục tiêu điểm số của các bạn học sinh. </p>
                </div>
            </div>
           

            <div className="services-heroCard">
                <div className="services-heroContent">
                    <Diversity3TwoToneIcon className='services-heroIcon'/>
                    <h2>03</h2>
                    <h3>Hỗ trợ toàn diện</h3>
                    <p>Ôn luyện chuyên sâu về các kĩ năng Đọc-Viết, Toán, trải nghiệm làm đề thi thử, và chia sẻ các bí kíp làm bài hữu ích! </p>
                </div>
            </div>

        </div>
        
    </div>

    
  )
}

export default Hero