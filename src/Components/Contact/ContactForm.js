import {useState,useEffect} from 'react'
import {sendMessageToServer} from '../../Store/About/AboutAction'
import {useDispatch} from 'react-redux'
const ContactForm = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch();
    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch(sendMessageToServer({name,address,email,contact,message}))
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="form-group col-md-6">
                        <input type="text" name="name" onChange={({target}) => setName(target.value)} className="form-control" id="inputAddress" placeholder="Your Name *" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" name="address" onChange={({target}) => setAddress(target.value)} className="form-control" id="inputAddress2" placeholder="Your Address *" />
                    </div>
                    <div className="row">
                    </div>
                    <div className="form-group col-md-6">
                        <input type="email" name="email" onChange={({target}) => setEmail(target.value)} className="form-control" id="inputAddress2" placeholder="Your Email *" />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" name="contact" className="form-control" onChange={({target})=> setContact(target.value)} id="inputAddress2" placeholder="Your Number *" />
                    </div>
                </div>
                <div className="form-group">
                    <textarea className="form-control" name="message" placeholder="Your Message *" onChange={({target})=>setMessage(target.value)} id="exampleFormControlTextarea1" rows={4} spellCheck="false" defaultValue={""} />
                </div>
                <button className="btn-message shadow" type="submit">Send Message</button>
            </form>
        </>
    )
}

export default ContactForm