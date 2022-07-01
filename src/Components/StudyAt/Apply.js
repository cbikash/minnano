import axios from "axios"
import { useEffect, useState } from "react"
import { getAbout } from '../../Store/About/AboutAction'
import { useDispatch, useSelector } from "react-redux"
import Breadcurm from '../Main/Breadcurm'
import image1 from '../../assest/images/japnes.jpg'
import {BASE_URL,APPLY_PAGE} from '../../Constant/Constant'
const ApplyProcess = () => {
    const [about, setAbout] = useState({})
    const dispatch = useDispatch();
    
    useEffect(() => {
        axios.get(`${BASE_URL}/api/about/${APPLY_PAGE}`).then((response) => {
            setAbout(response.data.data)
        })

    }, [0])
    return (
        <>
            <Breadcurm bread={{ title: "How to apply", image: image1 }} />

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

export default ApplyProcess