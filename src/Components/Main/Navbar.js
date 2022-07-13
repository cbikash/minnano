import logo from '../../assest/images/logo.jpg'
import {Link,NavLink} from 'react-router-dom'
const Navbar = () => {
    return (
        <>
         <div className="container d-flex align-items-center justify-content-center top-nav">
            <div className="row">
                <div className="col">
                    <Link to="/">
                    <img src={logo} className="img-fluid nav-logo top-nav-logo" />
                    </Link>
                </div>
            </div>
         </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} className="img-fluid nav-logo bottom-nav-img" />
                        <h3 className="bottom-menu primary-color">Menu</h3>
                    </Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link" aria-current="page" >About Us
                                
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link primary-color" href="#">Courses</a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle primary-color" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                            <li className="nav-item">
                                <Link to="/event-blog" className="nav-link primary-color">Event & News</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/apply-process" className="nav-link primary-color">How To Apply</Link>
                            </li>
                            <li className="nav-item"> 
                            <Link to="/study-in-japan" className="nav-link primary-color">
                                Study In Japan
                            </Link>
                            </li>
                            <li className="nav-item">
                                <NavLink to ="/contact" className="nav-link primary-color">Contact</NavLink>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link primary-color">Gallery</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar