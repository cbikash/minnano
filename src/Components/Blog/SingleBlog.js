import Breadcurm from "../Main/Breadcurm";
import image1 from "../../assest/images/japnes.jpg";
import { TbCalendarTime } from "react-icons/tb";
import { AiFillFolderOpen } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constant/Constant";
import Loader from "../HomePage/Loader";
import moment from "moment";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
const SingleBlog = () => {
  const navigation = useParams();
  const id = navigation.id;
  const [blog, setBlog] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [0]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/blog/${id}`)
      .then((response) => {
        setBlog(response.data.data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  }, [navigation]);

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/blog`).then((response) => {
      setBlogs(response.data.data);
    });
  }, [0]);
  return (
    <>
      <Breadcurm bread={{ title: "News and Events", image: image1 }} />
      <div
        className="container "
        style={{ marginTop: "30px", backgroundColor: "#fff" }}
      >
        <div className="row">
          {!loader ? (
            <>
              {Object.keys(blog).length > 0 && (
                <>
                  <Helmet>
                    {/* Primary Meta Tags */}
                    <title>{blog.title}</title>
                    <meta name="title" content={`${blog.title}`} />
                    <meta name="description" content={`${blog.content}`} />
                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta
                      property="og:url"
                      content={`${window.location.href}`}
                    />
                    <meta property="og:title" content={`${blog.title}`} />
                    <meta
                      property="og:description"
                      content={`${blog.content}`}
                    />
                    <meta property="og:image" content={`${blog.image}`} />
                    {/* Twitter */}
                    <meta
                      property="twitter:card"
                      content="summary_large_image"
                    />
                    <meta
                      property="twitter:url"
                      content={`${window.location.href}`}
                    />
                    <meta property="twitter:title" content={`${blog.title}`} />
                    <meta
                      property="twitter:description"
                      content={`${blog.content}`}
                    />
                    <meta property="twitter:image" content={`${blog.image}`} />
                  </Helmet>
                  <div className="col-md-8">
                    <h2>
                      <b>{blog.title} </b>
                    </h2>
                    <p className="publish-title">
                      <TbCalendarTime />{" "}
                      {moment(blog.created_at).format("MMMM Do YYYY")}{" "}
                      <AiFillFolderOpen />{" "}
                      <Link to="/event-blog">News & Event</Link>{" "}
                      <span
                        className="text-right"
                        style={{ textAlign: "right", marginRight: "10px" }}
                      >
                        {" "}
                        <b>Published: </b>{" "}
                        {moment(blog.created_at).startOf("hour").fromNow()}
                      </span>
                    </p>

                    <hr />
                    <img
                      src={blog.image}
                      className="img-fluid"
                      style={{ width: "100%", marginBottom: "20px" }}
                    />
                    <div
                      className="single-blog"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    ></div>
                  </div>
                  <div className="col-md-4">
                    <iframe
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Froshanmahato729&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1025100674857421"
                      style={{
                        height: "300px",
                        width: "100%",
                        marginBottom: "40px",
                      }}
                      scrolling="no"
                      frameborder="0"
                      allowfullscreen="true"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                    <div className="news-block"></div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item blog-list-Header">
                        Latest News & Event
                      </li>

                      {blogs &&
                        blogs.map((blog) => (
                          <li
                            key={blog.id}
                            className="list-group-item blog-list"
                          >
                            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div className="col-md-12 justify-content-center">
                <Loader />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
