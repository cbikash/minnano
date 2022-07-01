import Navbar from "./Navbar"
import Slider from "../HomePage/Slider"
import { Routes, Route } from "react-router-dom"
import HomePage from '../HomePage/HomePage'
import Footer from "./Footer"
import About from "../About/About"
import Contact from '../Contact/Contact'
import axios from 'axios'
import { useEffect } from "react"
import { getAbout } from '../../Store/About/AboutAction'
import { useDispatch, useSelector } from "react-redux"
import StudyAt from '../StudyAt/StudyAt'
import Apply from '../StudyAt/Apply'
import Blogs from '../Blog/Blogs'
import SingleBlog from '../Blog/SingleBlog'
import FAQ from '../About/Faq'
const Layout = () => {
    const dispatch = useDispatch();
    const response = useSelector((state) => state.about.studyAbout);

    useEffect(() => {
        dispatch(getAbout())
    }, [0])
    return (
        <>
            <div className="wapper">
                <div className="navbar-section">
                    <Navbar />

                </div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/study-in-japan" element={<StudyAt />} />
                        <Route path="/apply-process" element={<Apply />} />
                        <Route path="/event-blog" element={<Blogs />} />
                        <Route path="/blog/:id" element={<SingleBlog />} />
                        <Route path="/faq" element={<FAQ />} />
                    </Routes>
                </div>

                <div className="footter">
                    <Footer />

                </div>
            </div>
        </>
    )
}

export default Layout