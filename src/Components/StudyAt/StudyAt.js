import axios from "axios"
import { useEffect, useState } from "react"
import { getAbout } from '../../Store/About/AboutAction'
import { useDispatch, useSelector } from "react-redux"
import Breadcurm from '../Main/Breadcurm'
import image1 from '../../assest/images/japnes.jpg'
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

                        {about && (
                            <>
                            {Object.keys(about).length > 0 && <>
                            <div className="col-md-12">
                                <div dangerouslySetInnerHTML={{ __html: about.description }}>
                                </div>
                            </div>

                        </>}
                            </>

                        )}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudyAt