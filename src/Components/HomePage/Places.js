import japan from "../../assest/images/japan.jpg";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../Constant/Constant";
import axios from "axios";
const Places = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/slider/${202}`).then((response) => {
      setPlaces(response.data);
    });
  }, [0]);
  return (
    <>
      <div className="places">
        <div className="container">
          <div className="row">
            {Object.keys(places).length > 0 ? (
              <>
                {places.data.map((place, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="box-container">
                      <img src={place.image} className=" place-image" />
                      <p className="place-overlay">
                        <span>{place.description}</span>
                      </p>
                    </div>
                  </div>
                ))}{" "}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Places;
