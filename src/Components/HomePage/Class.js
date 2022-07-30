import n5 from "../../assest/images/n5.jpg";
import axios from "axios";
import { useEffect,useState } from "react";
import { BASE_URL } from "../../Constant/Constant";

const Class = () => {
  const [courses, setCourses] = useState([])
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [levels, setLevels] = useState('')
  const [apply, setApply] = useState('')

  const hanndelOnsubmit = async(e) => {
    e.preventDefault();
    try{
         const response = axios.post(`${BASE_URL}/api/apply`,{name,email,phone,levels,apply});
         setName('')
         setEmail('')
         setPhone('')
         setLevels('')
         setApply('')
         
         alert(`${(await response).data.message}`)
    }catch(e){
      console.log(e)
    }
  }

  useEffect(()=> {
    axios.get(`${BASE_URL}/api/list/course`).then(response => (setCourses(response.data)))
  },[0])
  return (
    <>
      <div className="section-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p className="heading-lang primary-color">
                Japanese Language Classes
              </p>
              <br />
              {courses.data  && courses.data.map(data => (
                <div className="lang-sec" key={data.id}>
                <div className="row">
                  <div className="col-md-4">
                    <img src={data.image} className="img-fluid" />
                  </div>
                  <div className="col-md-8">
                  <div dangerouslySetInnerHTML={{ __html: data.content }}>
                                                </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
            <div className="col-md-4">
              <div className="apply-section">
                <div className="card" style={{ width: "100%" }}>
                  <div className="card-header-s">
                    <h2>Interested in studying Japan?</h2>
                    <p>Fill in your details and we’ll call you back!</p>
                  </div>

                  <div className="card-body">
                    <form onSubmit={hanndelOnsubmit}>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Full Name"
                          onChange={({target}) => setName(target.value)} value={name}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Email"
                          onChange={({target}) => setEmail(target.value)} value={email}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Mobile Number"
                          onChange={({target}) => setPhone(target.value)} value={phone}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Education Level
                        </label>
                        <select
                        required
                          className="form-select"
                          aria-label="Default select example"
                          onChange={({target}) => setLevels(target.value)} value={levels}
                        >
                          <option selected>Education Level</option>
                          <option value="Diploma">Diploma</option>
                          <option value="Bachelor">Bachelor</option>
                          <option value="Master">Master</option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Which Intake do you perfer?
                        </label>
                        <select

                          className="form-select"
                          aria-label="Default select example"
                          required
                          onChange={({target}) => setApply(target.value)} value={apply}
                        >
                          <option value="">Which Intake do you perfer?</option>
                          <option value="January">January</option>
                          <option value="April">April</option>
                          <option value="July">July</option>
                          <option value="october">october</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <button className="btn-message shadow" type="submit">
                          Submit Application
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Class;
