import profile from '../../assest/images/profile.jpg'
import { BsFacebook, BsWhatsapp, BsInstagram } from 'react-icons/bs'
import { FaViber } from 'react-icons/fa'
import axios from 'axios'
import Loader from '../HomePage/Loader'
import {useEffect, useState} from 'react'
import { BASE_URL} from '../../Constant/Constant'
const Team = () => {
    const [teams, setTeams] = useState([])
    
    useEffect(() => {

        axios.get(`${BASE_URL}/api/team`).then(response=>setTeams(response.data.data));
    }, [0])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 class="primary-color" style={{ textAlign: "center",marginTop:"100px",marginBottom: "20px"}}>MEET OUR TEAM</h3>
                        <p style={{ textAlign: "center", marginTop:"20px",marginBottom: "20px"}}>
                        NEC is a group of highly trained professionals in the field of education. We are proud to be associated with universities and colleges from USA, Canada, Australia, New Zealand and India, and help students find the right study program and career paths.
                        </p>

                    </div>
                </div>
                <div className="row">

                {teams && teams.map(team => (<>
                    <div className="col-md-3">
                        <div className="card" style={{ width: '100%' }}>
                            <img src={team.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p style={{ textAlign: "center" }}>
                                    <span>
                                        <b>{team.name} </b>
                                    </span>
                                    <br />
                                    <span className="text-secondary">{team.post}</span>
                                </p>
                                <p>
                                    {team.description}
                                </p>
                                <p className="card-text team-social" style={{ textAlign: "center" }}>
                                    <a href={`${team.facebook}`} target="_blank">
                                        <BsFacebook />
                                    </a>
                                    <a href={`${team.viber}`} target="_blank">
                                        <FaViber />
                                    </a>
                                    <a href={`${team.instagram}`} target="_blank">
                                        <BsInstagram />
                                    </a>
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                
                </>))}
                </div>
            </div>
        </>
    )
}
export default Team