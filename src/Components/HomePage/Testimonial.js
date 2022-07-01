import person from '../../assest/images/profile.jpg'
import { RiDoubleQuotesL } from 'react-icons/ri'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../../Constant/Constant'
import axios from 'axios'
import photo1 from '../../assest/images/jp.jpeg'

const Testimonial = () => {
    const [testimonials, setTestimonial] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URL}/api/testimonial`).then((response => {
            setTestimonial(response.data.data)
        })).catch(err => console.log(err))

    }, [0])
    return (
        <>
            <div className="main" style={{ backgroundImage: `url(${photo1})`,backgroundRepeat: "none",backgroundSize: "cover" }}>
                <div className="tesimonial" style={{backgroundColor: "#12265ab8"}} >
                    <div className="container" >
                        <div className="row">
                            <div className="col-md-12" style={{ textAlign: "center", marginTop: "100px", marginBottom: "50px" }}>
                                <h3 className="text-white" style={{ textAlign: "center" }}>WHAT O<span style={{ borderBottom: "3px solid #ffad00" }}>UR STUDE</span>NTS SAYS</h3>
                            </div>
                            <div className="col-md-12">
                                <div id="carouselExampleIndicators1" className="carousel slide" data-bs-ride="true">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to={1} aria-label="Slide 2" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to={2} aria-label="Slide 3" />
                                    </div>
                                    <div className="carousel-inner">
                                        {testimonials ? testimonials.map((testimonial, index) => (
                                            <div className={index === 0 ? "carousel-item  carousel-item-custome active" : "carousel-item  carousel-item-custome"} key={index}>
                                                <div className="carousel-body">
                                                    <div className="row">
                                                        <div className="col-md-4 mb-10">
                                                            <img src={testimonial.image} className="img-fluid" alt="..." />
                                                            <p className="" style={{ marginTop: "60px", textAlign: "center" }}>
                                                                <span className="primary-color" style={{ textAlign: "center", fontWeight: "bold", boardBottom: "1px solid #000" }}>{testimonial.name}</span>
                                                                <br />
                                                                <span className="text-secondary">{testimonial.post}</span>
                                                            </p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p style={{ fontStyle: "italic", fontSize: "14px" }}><RiDoubleQuotesL className="text-info" /> {testimonial.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )) : <></>}
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>





                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial