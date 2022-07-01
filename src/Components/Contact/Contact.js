import image1 from '../../assest/images/japnes.jpg'
import Breadcurm from "../Main/Breadcurm"
import {BiLocationPlus} from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'
import {AiFillPhone} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {CgWebsite} from 'react-icons/cg'
import ContactForm from './ContactForm'
const Contact = () => {


    return (
        <>
            <Breadcurm bread={{ title: "Contact Us", image: image1 }} />
            <div className="container" style={{marginTop: "70px"}}>
                <div className="row">
                    <div className="col-md-8">
                        <div className="contact-page">
                            <h2> <b> Drop Us a Line</b></h2>
                            <p>
                                Your email address will not be published. Required fields are marked *</p>
                            <hr />
                            <ContactForm />
                            <br />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box-contact" style={{backgroundColor:"#e9e9e9",padding:"10px"}}>
                            <h3 className="primary-color" style={{textAlign: "center"}}>Address</h3>
                            <ul>
                                <li><BiLocationPlus /> Bharatpur-4, chitwan</li>
                                <li><AiFillPhone /> Phone: +977-9845675323</li>
                                <li><MdEmail /> Email: info@something.com</li>
                                <li><BsFillPersonFill /> Person: Mrs. Indira mahato</li>
                                <li><CgWebsite /> Webiste: www.cbikas.com.np</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact