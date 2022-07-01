import Breadcurm from '../Main/Breadcurm'
import image1 from '../../assest/images/japnes.jpg'
import { TbCalendarTime } from 'react-icons/tb'
import { AiFillFolderOpen } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../Constant/Constant'
import Loader from '../HomePage/Loader'
import moment from 'moment'
const SingleBlog = () => {
    const id = 1;
    const [blog, setBlog] = useState({})
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        axios.get(`${BASE_URL}/api/blog/${id}`)
        .then(response => {setBlog(response.data.data)
            setLoader(false)
        })
        .catch(err => {
            console.log(err)
            setLoader(false)
        })
    }, [0])
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/api/blog`).then((response) => {
            setBlogs(response.data.data)
        })
    }, [0])

console.log(blog)
    return (
        <>
            <Breadcurm bread={{ title: "Single Blog", image: image1 }} />
            <div className="container" style={{ marginTop: "30px" }} >
                <div className="row">
                    {!loader ?
                     <>
                     {Object.keys(blog).length > 0 &&
                        <>
                            <div className="col-md-8">
                                <h3>{blog.title}
                                </h3>
                                <hr />
                                <img src={blog.image} className="img-fluid" />
                                <p className="publish-title"><TbCalendarTime /> {moment(blog.created_at).format('MMMM Do YYYY')} <AiFillFolderOpen /> <Link to="/event-blog">News & Event</Link> <span className="text-right" style={{ textAlign: "right", marginRight: "10px" }}>  <b>Published: </b> {moment(blog.created_at).startOf('hour').fromNow()}</span></p>
                                <br />
                                <div dangerouslySetInnerHTML={{ __html: blog.content }}>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item blog-list-Header">Latest News & Event</li>
                                    {blogs && blogs.map(blog =>(
                                        <li key={blog.id} className="list-group-item blog-list"><Link to={`/blog/${blog.id}`} >{blog.title}</Link></li>
                                       
                                    ))}
                                </ul>



                            </div>

                        </>

                    }
                     
                     </>:
                    
                    
                    <>
                    <div className="col-md-12 justify-content-center">
                        <Loader />
                    </div>
                   
                    </>}
                    

                </div>
            </div>
        </>
    )
}

export default SingleBlog