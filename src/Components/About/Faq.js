import image1 from "../../assest/images/japnes.jpg";
import Breadcurm from "../Main/Breadcurm";
import Team from "./Team";
import Motivate from "./Motivate";
import { useEffect, useState } from "react";
import { BASE_URL, About_PAGE } from "../../Constant/Constant";
import axios from "axios";
import Loader from "../HomePage/Loader";
const FAQ = () => {
  const [faqs, setFaq] = useState({});
  const [loader, setLoader] = useState(true);
  
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[0])

  useEffect(() => {
    axios.get(`${BASE_URL}/api/faq`).then((response) => {
      setFaq(response.data.data);
      setLoader(false);
    });
  }, [0]);

  return (
    <>
      <Breadcurm
        bread={{
          title: "Frequently Asked Questions About Study in Japan",
          image: image1,
        }}
      />

      <div
        className="container"
        style={{ paddingTop: "30px", paddingBottom: "30px" }}
      >
        <div className="row">
          <div className="col-md-12" >
            <div className="faqs-heading">
              <h3>FAQ's</h3>
            </div>
          </div>
          <div className="col-md-12">

            <div className="accordion" id="accordionPanelsStayOpenExample">
              {!loader ? (
                <>
                  {faqs &&
                    faqs.map((faq) => (
                      <>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingOne"
                          >
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#panelsStayOpen-collapseOne${faq.id}`}
                              aria-expanded="true"
                              aria-controls={`panelsStayOpen-collapseOne${faq.id}`}
                            >
                              {faq.question}
                            </button>
                          </h2>
                          <div
                            id={`panelsStayOpen-collapseOne${faq.id}`}
                            className="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-headingOne"
                          >
                            <div className="accordion-body">{faq.answer}</div>
                          </div>
                        </div>
                      </>
                    ))}
                </>
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
