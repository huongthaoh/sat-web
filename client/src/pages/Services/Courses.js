import React from 'react'
import './Courses.css'

function Courses() {
  return (
    <div id = "services-courses" className='container'>
        <h2 className='services-coursesTitle'>Các khoá học tại Chi SAT</h2>
        
        <div className="services-coursesContainer">
        <div className="services-coursesOne">
            <div className="services-coursesLeft">
                <h5>24/07 - 03/11/2023</h5>
                <h3>Khoá luyện thi tháng 10</h3>
                
            </div>
            <div className="services-coursesRight">
                <div className="services-coursesBoxOne">
                    <h2>01</h2>
                    <h3>Lớp căn bản</h3>
                    <p>Lịch học: tối thứ 3 và thứ 6 từ 18h-20h.</p>
                    <p>Đầu vào: 1050+ SAT, 6.5+ IELTS, hoặc C1+ </p>

                </div>

                <div className="services-coursesBoxTwo">
                    <h2>02</h2>
                    <h3>Lớp nâng cao</h3>
                    <p>Lịch học: tối thứ 2 và thứ 3 từ 20h15-22h15.</p>
                    <p>Đầu vào: 1250+ SAT</p>
                </div>
            </div>
        </div>

        <div className="services-coursesTwo">
            <div className="services-coursesLeft">
                <h5>27/08 - 29/11/2023</h5>               
                <h3>Khoá luyện thi tháng 11</h3>
            </div>

            <div className="services-coursesRight">
                <div className="services-coursesBoxOne">
                    <h2>01</h2>
                    <h3>Lớp căn bản</h3>
                    <p>Lịch học: tối thứ 4 và CN từ 20h15-22h25.</p>
                    <p>Đầu vào: 1050+ SAT, 6.5+ IELTS, hoặc C1+ </p>

                </div>

                <div className="services-coursesBoxTwo">
                    <h2>02</h2>
                    <h3>Lớp nâng cao</h3>
                    <p>Lịch học: tối thứ 2 và CN từ 17h50-20h.</p>
                    <p>Đầu vào: 1050+ SAT, 6.5+ IELTS, hoặc C1+</p>
                </div>
            </div>
        </div>   

        </div>     

    </div>
  )
}

export default Courses