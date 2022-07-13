import Slider from "./Slider";
import { BASE_URL, Home_DESCRIPTION,FOOTER_ABOUT } from '../../Constant/Constant'
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from './Loader'
import Testimonial from './Testimonial'
import Places from './Places'

const HomePage = () => {
    const [slider, setSlider] = useState([])
    const [homeDescription, setHomeDescription] = useState({})
    useEffect(() => {
        axios.get(`${BASE_URL}/api/slider`).then(response => {
            setSlider(response.data)
        })
    }, [0])
   

    useEffect(() => {
        axios.get(`${BASE_URL}/api/about/${Home_DESCRIPTION}`).then((response) => {
            setHomeDescription(response.data)
        })
    }, [0])

    return (
        <>
            <div className="home-page">
                <Slider slider={slider} />
                <div className="home-about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="primary-color" style={{ textAlign: "center" }}>Nepal Education Consultancy (NEC)</h1>
                                <h2 className="text-info" style={{ textAlign: "center" }}>Best Education Consultancy in Nepal
                                </h2>
                                {homeDescription ? (
                                    <>
                                        {Object.keys(homeDescription).length > 0 && <>
                                            <div className="col-md-12">
                                                <div dangerouslySetInnerHTML={{ __html: homeDescription.data.description }}>
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
                        </div>
                    </div>

                </div>

                <div className="section-2 " style={{ backgroundColor: "rgb(233 233 233)", padding: "30px 0" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="primary-color" style={{ textAlign: "left" }}>COULD YOUR NEXT DESTINATIONS BE IN?</h3>
                                <h4 className="text-info" style={{ textAlign: "left" }}>THE BENCHMARK FOR ABROAD STUDIES
                                </h4>
                            </div>
                        </div>
                    </div>
                    <Places />
                </div>
                <Testimonial />
            </div>
        </>
    )
}

export default HomePage;