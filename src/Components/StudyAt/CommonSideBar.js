import welcomImage from '../../assest/images/minnao.jpg'
import {Link} from 'react-router-dom'

const CommonSideBar = () => {
    return (
        <>
         <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Froshanmahato729&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1025100674857421"
                style={{ height: "300px", width: "100%", marginBottom: "40px" }}
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
              <div className="news-block"></div>

              <div className="welcome_message">
                <h5 style={{marginTop:"10px", fontSize:"19px"}}>Welcome to Minnano Daisuki Education</h5>
                <img src={welcomImage} className="img-fluid" style={{marginBottom: "20px"}}
                />
                <p>
                It is our pleasure to welcome you to Chiba Education Center (CEC). The language program is intended for student who wants basic growth of language skill for communicating with Japanese speaker on the areas of purpose... 
                <Link to="/about">readmore</Link>
                
                </p>
                

              </div>

        </>
    )

}

export default CommonSideBar;