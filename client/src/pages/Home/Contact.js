import React from 'react'
import "./Contact.css"

function Contact() {
    const submit = () => {
        alert("Chi SAT sẽ phản hồi lại bạn trong thời gian sớm nhất!");
    }

  return (
    <div className='container py-5 h-100'>
        <h2 className='home-sectionHeader'>Có câu hỏi cho Chi SAT?</h2>
        
        <form id = "contactForm" onSubmit = {submit} action="https://formsubmit.co/thaohoangspam@gmail.com" method="POST">
            <input type="text" name = "_honey" style = {{display: "none"}} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3000" />

            <div className="home-formSectionDouble">
                <div className="home-formSection">
                    <label for="name">Họ tên</label>
                    <input type="text" name = "name" id="name" placeholder = "Nguyễn Văn A"  required/>
                </div>

                <div className="home-formSection">
                    <label for="phone" className = "form-label">Số điện thoại</label>
                    <input type="text" className= "form-control" name = "phone" id="phone" placeholder = "0123 456 789" required/>
                </div>
                
            </div>

            <div className="home-formSection">
                <label for="email" className = "form-label">Email</label>
                <input type="email" className= "form-control" name = "email" id="email" placeholder = "your_email@gmail.com"  required/>
            </div>

            <div className="home-formSection">
                <label for="message" >Chi SAT có thể giúp gì cho bạn?</label>
                <textarea id="message" name = "message" rows="4" placeholder = "Mình có dự định thi SAT vào tháng 10, với mục tiêu đạt điểm 1500. Điểm thi hiện tại của mình là 1400."></textarea>
            </div>
            
            <div className="home-formSection">
            <button type="submit" className = "contactButton">Gửi tin nhắn</button>
            </div>

        </form>
        {/* <form id = "contactForm" onSubmit = {submit} className = "row justify-content-center" action="https://formsubmit.co/thaohoangspam@gmail.com" method="POST">
            <input type="text" name = "_honey" style = {{display: "none"}} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3000" />
            
            <div className="col-md-5">
                <label for="name" className = "form-label">Họ tên</label>
                <input type="text" className= "form-control" name = "name" id="name" placeholder = "Nguyễn Văn A"  required/>
            </div>
            
            <div className="col-md-5">
                <label for="phone" className = "form-label">Số điện thoại</label>
                <input type="text" className= "form-control" name = "phone" id="phone" placeholder = "0123 456 789" required/>
            </div>

            <div class="w-100"></div>
            <div className="col-md-10 mt-2">
                <label for="email" className = "form-label">Email</label>
                <input type="email" className= "form-control" name = "email" id="email" placeholder = "your_email@gmail.com"  required/>
            </div>

            <div class="w-100"></div>
            <div className="col-md-10 mt-2 mb-4">
                <label for="message" className = "form-label">Chi SAT có thể giúp gì cho bạn?</label>
                <textarea className= "form-control" id="message" name = "message" rows="4" placeholder = "Mình có dự định thi SAT vào tháng 10, với mục tiêu đạt điểm 1500. Điểm thi hiện tại của mình là 1400."></textarea>
            </div>

            <div class="w-100"></div>
            
            <button type="submit" className = "contactButton">ĐẶT HẸN TƯ VẤN</button>
           
            
            
            
        </form> */}
    
    </div>
  )
}

export default Contact