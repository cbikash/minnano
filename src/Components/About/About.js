import image1 from '../../assest/images/japnes.jpg'
import Breadcurm from '../Main/Breadcurm'
import Team from './Team'
import Motivate from './Motivate'
import { useEffect, useState } from 'react'
import { BASE_URL, About_PAGE } from '../../Constant/Constant'
import  axios  from 'axios'
import Loader from '../HomePage/Loader'
const About = () => {
    const [about, setAbout] = useState({})
    const [loader, setLoader] = useState(true)
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[0])


    useEffect(() => {
        axios.get(`${BASE_URL}/api/about/${About_PAGE}`).then((response) => {
            setAbout(response.data.data)
            setLoader(false)
        })
    }, [0])

    return (
        <>
            <Breadcurm bread={{ title: "About Us", image: image1 }} />

            <div className="container" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
                {loader ?
                    <>
                        <Loader />
                    </>
                    : <>
                        {Object.keys(about).length > 0 && <>
                            <div className="row">

                                <div className="col-md-6">
                                    <img src={about.image} className="img-fluid" />
                                </div>
                                <div className="col-md-6">
                                    <h4 className="primary-color" style={{ textAlign: "left" }}>Welcome to our Consultancy</h4>
                                    <div dangerouslySetInnerHTML={{ __html: about.description }}>
                                    </div>
                                </div>
                            </div>
                        </>}


                    </>}

            </div>
            <Motivate />
            <Team />
        </>
    )
}

export default About