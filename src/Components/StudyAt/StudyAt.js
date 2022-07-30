import axios from "axios"
import { useEffect, useState } from "react"
import { getAbout } from '../../Store/About/AboutAction'
import { useDispatch, useSelector } from "react-redux"
import Breadcurm from '../Main/Breadcurm'
import image1 from '../../assest/images/japnes.jpg'
import CommonSideBar from "./CommonSideBar"
const StudyAt = () => {
    const [about, setAbout] = useState({})
    const dispatch = useDispatch();
    const response = useSelector((state) => state.about.studyAbout);
    useEffect(() => {
        dispatch(getAbout())
    }, [0])

    useEffect(() => {
        if (response) {
            setAbout(response.data)
        }
    }, [response])
    return (
        <>
            <Breadcurm bread={{ title: "Study In Japan", image: image1 }} />

            <div className="study-container">
                <div className="container" style={{ marginTop: "30px" }}>
                    <div className="row">
                        <div className="col-md-8">
                        <h3 className="heading-doc">Study In Japan</h3>
                         
                         <p>
                         Japan is an incredibly diverse country with an education system that rivals the West in terms of quality and research output. Not only is Japan highly developed in technological and educational terms, it’s also a beautiful, vibrant country that anyone would enjoy living in.
                         </p>
                         <p>
                         More than 100,000 international students study in Japan every year. Japanese Universities offer excellent academic standards and high-tech resources and facilities for students. The Japanese education system is incredibly advanced, and the government is focussed on encouraging high-quality higher education for everyone; foreign students and nationals alike.
                         </p>

                         <h4>Intakes</h4>
                         <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Session</th>
                                <th>April</th>
                                <th>July</th>
                                <th>October</th>
                                <th>January</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Period of Study</td>
                                <td>April to March</td>
                                <td>July to March</td>
                                <td>October to March</td>
                                <td>January to March</td>
                            </tr>
                            <tr>
                                <td> Length of study maximal</td>
                                <td>2 years</td>
                                <td>1year 9months</td>
                                <td>1year 6months</td>
                                <td>1year 3months</td>
                            </tr>
                            <tr>
                                <td>Applying Period</td>
                                <td>Setember-November</td>
                                <td>December-February</td>
                                <td>March-May</td>
                                <td>July-September</td>
                            </tr>
                            <tr>
                                <td>DeadLine</td>
                                <td>November 15</td>
                                <td>February 15</td>
                                <td>May 15</td>
                                <td>September 15</td>
                            </tr>
                            </tbody>
                           


                         </table>

                        </div>
                        <div className="col-md-4">
                            <CommonSideBar />
                        </div>

                        {/* {about && (
                            <>
                            {Object.keys(about).length > 0 && <>
                            <div className="col-md-12">
                                <div dangerouslySetInnerHTML={{ __html: about.description }}>
                                </div>
                            </div>

                        </>}
                            </>

                        )} */}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudyAt