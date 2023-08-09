import React from 'react';

function Feedback() {
  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card">
            <div className="card-body py-5">
              <div id="carouselFeedback" className="carousel slide carousel-dark" data-mdb-ride="carousel">
                <div className="carousel-indicators mb-0">
                  <button data-mdb-target="#carouselFeedback" data-mdb-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button data-mdb-target="#carouselFeedback" data-mdb-slide-to="1" aria-label="Slide 1"></button>
                  <button data-mdb-target="#carouselFeedback" data-mdb-slide-to="2" aria-label="Slide 1"></button>
                </div>

                <div className="carousel-inner pt-2 pb-5">
                  <div className="carousel-item active">
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-8 col-lg-9 col-xl-8">
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" className="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="90" height="90" />
                          </div>
                          <div className="flex-grow-1 ms-4 ps-3">
                            <figure>
                              <blockquote className="blockquote mb-4">
                                <p>
                                  <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                                  <span className="font-italic">Tụi em đạt được số điểm kỳ vọng này không chỉ nhờ sự nỗ lực của bản thân mà còn được sự giúp đỡ, hỗ trợ của rất nhiều người khác, đặc biệt là gia đình em và chị Chi - người đã dẫn dắt tụi em suốt quá trình dài này, kể cả lúc tụi em đã học hết khóa của chị</span>
                                </p>
                              </blockquote>
                              <figcaption className="blockquote-footer">
                              Lê Quỳnh Anh & Lê Quỳnh Hương 
                              </figcaption>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-8 col-lg-9 col-xl-8">
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" className="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="90" height="90" />
                          </div>
                          <div className="flex-grow-1 ms-4 ps-3">
                            <figure>
                              <blockquote className="blockquote mb-4">
                                <p>
                                  <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                                  <span className="font-italic">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</span>
                                </p>
                              </blockquote>
                              <figcaption className="blockquote-footer">
                                Annie Hall <cite title="Source Title">New York Times</cite>
                              </figcaption>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-8 col-lg-9 col-xl-8">
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" className="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="90" height="90" />
                          </div>
                          <div className="flex-grow-1 ms-4 ps-3">
                            <figure>
                              <blockquote className="blockquote mb-4">
                                <p>
                                  <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                                  <span className="font-italic">At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint amet dolore.</span>
                                </p>
                              </blockquote>
                              <figcaption className="blockquote-footer">
                                Jason More in <cite title="Source Title">Smash Magazine</cite>
                              </figcaption>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="carousel-control-prev" type="button" data-mdb-target="#carouselFeedback" data-mdb-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-mdb-target="#carouselFeedback" data-mdb-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
