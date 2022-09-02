import Breadcurm from "../Main/Breadcurm";
import image from '../../assest/images/slider.jpg'
import { Link } from 'react-router-dom'
import axios from "axios";
import { BASE_URL } from '../../Constant/Constant'
import { useEffect, useState } from "react";
import Loader from '../HomePage/Loader'
import moment from 'moment'
const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[0])
    useEffect(() => {
        axios.get(`${BASE_URL}/api/blog`).then((response) => {
            setBlogs(response.data.data)
        })
    }, [0])
    const truncate = (input) =>
      input?.length > 50 ? `${input.substring(3, 100)}...` : input;

      const truncateTitle = (input) =>
      input?.length > 50 ? `${input.substring(0, 100)}...` : input;

      


    return (
        <>
            <Breadcurm bread={{ title: "Blog & Events" }} />
            <div className="container" style={{ marginTop: "20px" }}>
                <div className="row">
                    <div className="col-md-12">
                    </div>
                    {blogs ? blogs.map((blog, index) => (
                        <>
                            <div className="col-md-3">
                                <Link to={`/blog/${blog.id}`} className="cart-blog-a primary-color">
                                    <div className="card cart-blog" style={{ width: '100%'}}>
                                        <img src={blog.image} className="card-img-top" alt="..." />
                                        <div className="card-body" style={{height: "250px",paddingBottom:"30px",overflow:"hidden"}}>
                                            <p>
                                                <span>
                                                    <b >{truncateTitle(blog.title)} </b>
                                                </span>
                                                <br/>
                                            <span className="blog-date">{moment(blog.created_at).format('MMMM Do YYYY')}</span>
                                            </p>
                                            <p className="card-text team-social" style={{ textAlign: "justify" }}>
                                                {truncate(blog.content)}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </>
                    )) : (
                        <>
                            <Loader />
                        </>
                    )}



                </div>
            </div>
        </>
    )
}

export default Blogs;