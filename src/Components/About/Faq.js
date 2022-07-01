import image1 from '../../assest/images/japnes.jpg'
import Breadcurm from '../Main/Breadcurm'
import Team from './Team'
import Motivate from './Motivate'
import { useEffect, useState } from 'react'
import { BASE_URL, About_PAGE } from '../../Constant/Constant'
import  axios  from 'axios'
import Loader from '../HomePage/Loader'
const FAQ = () => {
    const [about, setAbout] = useState({})
    const [loader, setLoader] = useState(true)


    useEffect(() => {
        axios.get(`${BASE_URL}/api/about/${About_PAGE}`).then((response) => {
            setAbout(response.data.data)
            setLoader(false)
        })
    }, [0])

    return (
        <>
            <Breadcurm bread={{ title: "Frequently Asked Questions About Study in Japan", image: image1 }} />

            <div className="container" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
               
            </div>
        </>
    )
}

export default FAQ