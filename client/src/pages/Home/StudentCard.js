import React from 'react'
import "./StudentCard.css"
import pfp1 from "./student1pfp.jpeg"
import pfp2 from "./student2pfp.jpg"
import pfp3 from "./student3pfp.png"
import pfp4 from "./student4pfp.jpg"

function StudentCard() {
  return (
    <div className='container py-5 h-100'>
        <h2 className='home-sectionHeader'>Thành Tích Học Viên</h2>
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col-lg-3 col-sm-6 mb-3 mb-sm-0 text-center">
                <div class="card">
                <img src= {pfp1} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Lê Hải Anh</h5>
                    <p className='card-text'>THPT chuyên Hà Nội-Amsterdam</p>
                    <h6 className="card-text">SAT: 1540/1600</h6>
                </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-3 mb-sm-0 text-center">
                <div class="card">
                <img src={pfp2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Vũ Hiền Thảo</h5>
                    <p className='card-text'>THPT chuyên Hà Nội - Amsterdam</p>
                    <h6 className="card-text">SAT: 1570/1600</h6>
                </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-3 mb-sm-0 text-center">
                <div class="card">
                <img src= {pfp3} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Phạm Tuấn Cường</h5>
                    <p className='card-text'>THPT chuyên Bắc Giang</p>
                    <h6 className="card-text">SAT: 1520/1600</h6>
                </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-3 mb-sm-0 text-center">
                <div class="card">
                <img src={pfp4} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Quỳnh Anh & Quỳnh Hương </h5>
                    <p className='card-text'>THPT chuyên Trần Đại Nghĩa</p>
                    <h6 className="card-text">SAT: 1580/1600 & 1550/1600</h6>
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default StudentCard