import React from 'react'
import './Courses.css'

function Courses() {
  return (
    <div id = "services-courses" className='container'>
        <h2 className='services-coursesTitle'>Các khoá học tại Chi SAT</h2>
        
        <div className="services-coursesContainer">
        <div className="services-coursesOne">
            <div className="services-coursesLeft">
                <h5>23/11 - 08/03/2024</h5>
                <h3>Khoá luyện thi tháng 3</h3>
                
            </div>
            <div className="services-coursesRight">
                <div className="services-coursesBoxOne">
                    <h2>01</h2>
                    <h3>Lớp căn bản</h3>
                    <p>Lịch học: tối thứ 5 và thứ 6 từ 20h20-22h20.</p>
                    <p>Đầu vào: 1050+ SAT, 6.5+ IELTS, hoặc C1+ </p>

                </div>

                <div className="services-coursesBoxTwo">
                    <h2>02</h2>
                    <h3>Lớp nâng cao</h3>
                    <p>Lịch học: tối thứ 5 và thứ 6 từ 18h-20h.</p>
                    <p>Đầu vào: 1250+ SAT</p>
                </div>
            </div>
        </div>

        <div className="services-coursesTwo">
            <div className="services-coursesLeft">
                <h5>13/01 - 28/04/2024</h5>               
                <h3>Khoá luyện thi tháng 5</h3>
            </div>

            <div className="services-coursesRight">
                <div className="services-coursesBoxOne">
                    <h2>01</h2>
                    <h3>Lớp căn bản</h3>
                    <p>Lịch học: tối thứ 7 và CN từ 20h20-22h20.</p>
                    <p>Đầu vào: 1050+ SAT, 6.5+ IELTS, hoặc C1+ </p>

                </div>

                <div className="services-coursesBoxTwo">
                    <h2>02</h2>
                    <h3>Lớp nâng cao</h3>
                    <p>Lịch học: tối thứ 7 và CN từ 18h-20h.</p>
                    <p>Đầu vào: 1250+ SAT</p>
                </div>
            </div>
        </div>   

        <div className="services-coursesTwo">
            <div className="services-coursesLeft">
                <h5>19/02 - 28/05/2024</h5>               
                <h3>Khoá luyện thi tháng 6</h3>
            </div>

            <div className="services-coursesRight">
                <div className="services-coursesBoxOne">
                    <h2>01</h2>
                    <h3>Lớp căn bản</h3>
                    <p>Lịch học: tối thứ 3 và 4 từ 18h-20h.</p>
                    <p>Đầu vào: 1050+ SAT, 6.5+ IELTS, hoặc C1+ </p>

                </div>

                <div className="services-coursesBoxTwo">
                    <h2>02</h2>
                    <h3>Lớp nâng cao</h3>
                    <p>Lịch học: tối thứ 3 và 4 từ 20h20-22h20.</p>
                    <p>Đầu vào: 1250+ SAT</p>
                </div>
            </div>
        </div>  


        </div>     

    </div>
  )
}

export default Courses