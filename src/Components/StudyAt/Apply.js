import axios from "axios";
import { useEffect, useState } from "react";
import { getAbout } from "../../Store/About/AboutAction";
import { useDispatch, useSelector } from "react-redux";
import Breadcurm from "../Main/Breadcurm";
import image1 from "../../assest/images/japnes.jpg";
import { BASE_URL, APPLY_PAGE } from "../../Constant/Constant";
import visaImage from "../../assest/images/visa.jpg";
import { MdDoubleArrow, MdKeyboardArrowRight } from "react-icons/md";
import CommonSideBar from './CommonSideBar'
const ApplyProcess = () => {
  const [about, setAbout] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${BASE_URL}/api/about/${APPLY_PAGE}`).then((response) => {
      setAbout(response.data.data);
    });
  }, [0]);
  return (
    <>
      <Breadcurm
        bread={{
          title: "Required Document for Visa Processing",
          image: image1,
        }}
      />
      
      <div className="study-container1">
        <div className="container" style={{ marginTop: "30px" }}>
          <div className="row">
            <div className="col-md-8">
              <h3 className="heading-doc">Documentation and Visa Process</h3>
              <br />
              <img
                src={visaImage}
                className="img-fluid"
                style={{ height: "300px", width: "100%", marginBottom: "20px" }}
              />
              <div
                style={{
                  border: "5px solid rgb(235 235 235)",
                  marginBottom: "20px",
                }}
              ></div>
              <div className="criate-area" style={{ marginBottom: "30px" }}>
                <b style={{ fontSize: "20px" }}>Criteria for application</b>
                <p>
                  There are some criteria for the application student must have.
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    {" "}
                    <MdKeyboardArrowRight />
                    Students who have completed their Intermediate level or +2
                    are eligible to apply in Japan.
                  </li>
                  <li className="list-group-item">
                    <MdKeyboardArrowRight /> Students currently appearing in
                    college or university are preferable.
                  </li>
                  <li className="list-group-item">
                    <MdKeyboardArrowRight /> All Students should study Japanese
                    Language class in this institute for at least 6 months or
                    240 Hours in Course A.
                  </li>
                  <li className="list-group-item">
                    <MdKeyboardArrowRight /> Their forms and necessary documents
                    will be processed at appropriate time. (Please refer to the
                    chart on the next page for the application deadline and the
                    date of the result for corresponding session )
                  </li>
                  <li className="list-group-item">
                    <MdKeyboardArrowRight /> Sponsor must be financially sound
                    to support for the student`s study in Japan.
                  </li>
                </ul>
              </div>

              <div className="document-requirement">
                <b style={{ fontSize: "20px" }}>Document Required:</b>
                <p>
                  A student should submit following documents and certificates
                  to process Student Visa for Japan through Minnano Education
                  Center.
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    {" "}
                    <MdDoubleArrow />
                    Students who have completed their Intermediate level or +2
                    are eligible to apply in Japan.
                  </li>
                  <li className="list-group-item">
                    <MdDoubleArrow /> Students currently appearing in college or
                    university are preferable.
                  </li>
                  <li className="list-group-item">
                    <MdDoubleArrow /> All Students should study Japanese
                    Language class in this institute for at least 6 months or
                    240 Hours in Course A.
                  </li>
                  <li className="list-group-item">
                    <MdDoubleArrow /> Their forms and necessary documents will
                    be processed at appropriate time. (Please refer to the chart
                    on the next page for the application deadline and the date
                    of the result for corresponding session )
                  </li>
                  <li className="list-group-item">
                    <MdDoubleArrow /> Sponsor must be financially sound to
                    support for the student`s study in Japan.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
             <CommonSideBar />
            </div>

            {/* 
                        {about && (
                            <>
                            {Object.keys(about).length > 0 && <>
                            <div className="col-md-12">
                                <div dangerouslySetInnerHTML={{ __html: about.description }}>
                                </div>
                            </div>

                        </>}
                            </>

                        )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyProcess;
