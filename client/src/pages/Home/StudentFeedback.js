import React from 'react'
import "./StudentFeedback.css"
import pfp1 from "./student1pfp.jpeg"
import pfp2 from "./student2pfp.jpg"
import pfp3 from "./student3pfp.png"
import pfp4 from "./student4pfp.jpg"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function StudentFeedback() {
  return (
    <div className='container py-5 h-100'>
        <h2 className='home-sectionHeader'>Cảm nhận của học viên</h2>
        <div className="row d-flex justify-content-center align-items-center h-100 ">
        <div className="col col-xl-10">
          <div className="card" style = {{backgroundColor: "var(--cl-gray-2)", borderRadius: "30px"}}>
            <div className="card-body py-5">

        <div id="home-feedback__carousel" class="carousel slide">
        <div class="carousel-indicators mb-0" >
            <button type="button" data-bs-target="#home-feedback__carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style = {{color: "var(--cl-gray-4) !important"}}></button>
            <button style = {{color: "var(--cl-gray-4) !important"}} type="button" data-bs-target="#home-feedback__carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#home-feedback__carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div class="carousel-inner pt-2">

            <div class="carousel-item active">
            <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-lg-9 col-xl-8">
            <div className="d-flex">
                <div className="flex-shrink-0">
                    <img src= {pfp1} className="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="135" height="90" />
                </div>
                
                <div className="flex-grow-1 ms-4 ps-3">
                    <figure>
                        <blockquote className="blockquote mb-4">
                        <p>
                            <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                            <span className="font-italic">Bản thân em thấy việc tìm được người giáo viên tận tâm là vô cùng quan trọng. Em học xong khóa chị Chi từ tháng 3 nhưng đến tận tháng 5 e mới thi mà chị vẫn gửi em tài liệu để ôn... Nói chung là chị Chi 10 điểm tận tâm ạ.</span>
                        </p>
                        </blockquote>
                        <figcaption className="blockquote-footer mb-5">
                        Lê Hải Anh 
                        </figcaption>
                    </figure>
                </div>
            </div>
            </div>
            </div>
            </div>

            <div class="carousel-item">
            <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-lg-9 col-xl-8">
            <div className="d-flex">
                <div className="flex-shrink-0">
                    <img src={pfp2} className="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="135" height="90" />
                </div>
                
                <div className="flex-grow-1 ms-4 ps-3">
                    <figure>
                        <blockquote className="blockquote mb-4">
                        <p>
                            <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                            <span className="font-italic">Em vô cùng biết ơn chị Chi, bố mẹ cũng như những người bạn vì đã giúp đỡ em về cả mặt tinh thần lẫn mặt học tập trong quá trình ôn thi ạ, và em chúc chị Chi sẽ càng gặt hái được nhiều thành công trong công việc giảng dạy!</span>
                        </p>
                        </blockquote>
                        <figcaption className="blockquote-footer mb-5 ">
                        Vũ Hiền Thảo
                        </figcaption>
                    </figure>
                </div>
            </div>
            </div>
            </div>
            </div>

            <div class="carousel-item">
            <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-lg-9 col-xl-8">
            <div className="d-flex">
                <div className="flex-shrink-0">
                    <img src= {pfp4} className="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="135" height="90" />
                </div>
                
                <div className="flex-grow-1 ms-4 ps-3">
                    <figure>
                        <blockquote className="blockquote mb-4">
                        <p>
                            <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                            <span className="font-italic">Tụi em đạt được số điểm kỳ vọng này không chỉ nhờ sự nỗ lực của bản thân mà còn được sự giúp đỡ, hỗ trợ của rất nhiều người khác, đặc biệt là gia đình em và chị Chi - người đã dẫn dắt tụi em suốt quá trình dài này, kể cả lúc tụi em đã học hết khóa của chị.</span>
                        </p>
                        </blockquote>
                        <figcaption className="blockquote-footer mb-5">
                        Lê Quỳnh Anh & Lê Quỳnh Hương
                        </figcaption>
                    </figure>
                </div>
            </div>
            </div>
            </div>
            </div>

        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#home-feedback__carousel" data-bs-slide="prev" >
            {/* <span class="carousel-control-prev-icon" style = {{color: "var(--cl-gray-4) !important"}} aria-hidden="true"></span> */}
            <span><ArrowBackIosIcon style = {{fontSize: "40px", color: "var(--cl-gray-3)"}} /></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#home-feedback__carousel" data-bs-slide="next">
            <span><ArrowForwardIosIcon style = {{fontSize: "40px", color: "var(--cl-gray-3)"}} /></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>
    </div>

    </div>
    </div>
    </div>
  )
}

export default StudentFeedback