import logo from '../../assest/images/logo_.jpg'
import { BsFacebook, BsWhatsapp, BsInstagram } from 'react-icons/bs'
import { FaViber } from 'react-icons/fa'
import {GrMapLocation} from 'react-icons/gr'
import {MdEmail}from 'react-icons/md'
import {AiFillPhone} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import axios from 'axios'
import { BASE_URL, Home_DESCRIPTION, FOOTER_ABOUT } from '../../Constant/Constant'
import { useEffect, useState } from "react";
import Loader from '../HomePage/Loader'
const Footer = () => {
    const [footer, setFooter] = useState({})
    useEffect(() => {
        axios.get(`${BASE_URL}/api/about/${FOOTER_ABOUT}`).then(response => setFooter(response.data))
    }, [0])
    return (

        <>
            <footer>
                <div className="subscribe-section" style={{ backgroundColor: "white", padding: "50px 0" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2" style={{ textAlign: "right" }}>
                                <span className="small text-primary">Subscribe</span>
                                <p style={{ fontSize: "30px" }}><b>Newsletter</b></p>
                            </div>
                            <div className="col-md-10">
                                <form>
                                    <div className="input-group mb-3 mt-3">
                                        <input type="text" className="form-control" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="button-addon2" />
                                        <button className="btn btn-primary" type="button" id="button-addon2">Subscribe</button>
                                    </div>
                                </form>

                                <div className="social-media-section" style={{ textAlign: "center" }}>
                                    <a href="#">
                                        <BsFacebook />
                                    </a>
                                    <a href="#">
                                        <FaViber />
                                    </a>
                                    <a href="#">
                                        <BsInstagram />
                                    </a>
                                    <a href="#">
                                        <BsWhatsapp />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="map-section">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79971.64567838404!2d84.45131671991305!3d27.646782440464442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994e5bff373ed2f%3A0x7b53c0f66a30ad68!2sShantikunja%20Park!5e0!3m2!1sen!2snp!4v1655551653176!5m2!1sen!2snp" style={{ width: "100%", minHeight: "400px", maxHeight: "500px", marginTop: "20px" }}></iframe>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-white col-footer">
                            {footer ? (
                                <>
                                    {Object.keys(footer).length > 0 && <>
                                        <img src={footer.data.image} className="img-fluid nav-logo" />
                                        <div className="footer-text" style={{ marginTop: "30px" }}>
                                            <div className="col-md-12">
                                                <div dangerouslySetInnerHTML={{ __html: footer.data.description }}>
                                                </div>
                                            </div>
                                        </div>
                                    </>}
                                </>
                            ) : (
                                <>
                                    <Loader />

                                </>
                            )}


                        </div>
                        <div className="col-md-4 col-footer">
                            <h3>Useful Links</h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                                <li className="list-group-item">A fourth item</li>
                                <li className="list-group-item">And a fifth one</li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-footer">
                            <h3>Contacts</h3>
                             <p style={{color: "white"}}>
                              <HiLocationMarker /> Madi chaitwan Nepal
                             <br /><MdEmail /> info@something.carouselExampleIndicators
                             <br /><AiFillPhone /> +977-98459687,+977-98347823</p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79971.64567838404!2d84.45131671991305!3d27.646782440464442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994e5bff373ed2f%3A0x7b53c0f66a30ad68!2sShantikunja%20Park!5e0!3m2!1sen!2snp!4v1655551653176!5m2!1sen!2snp" style={{ width: "100%", height: "200px", marginTop: "20px" }}></iframe>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p style={{ textAlign: "center", color: "#b6c2ff", paddingTop: "10px", fontSize: "13px" }}>
                        © 2001-2022 Minnano Daisuki Education Consultancy Pvt. Ltd. All right reserved.
                    </p>
                </div>

            </footer>


        </>
    )
}

export default Footer