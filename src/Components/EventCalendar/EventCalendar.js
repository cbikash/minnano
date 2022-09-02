import Breadcurm from "../Main/Breadcurm";
import image1 from "../../assest/images/japnes.jpg";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../Constant/Constant";

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[0])

  useEffect(() => {
    axios.get(`${BASE_URL}/api/list/events/list`).then((response) => {
      setEvents(response.data.data);
      console.log(response.data.data);
    });
    // setLoading(false)
  }, [0]);

  const eventClick = (e) => {
    alert(e.event.title)
  }

  return (
    <>
      <Breadcurm bread={{ title: "Event Calendar", image: image1 }} />
      <div className="container" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="col-md-3">
            <div className="header"><h5>This Month's Events:</h5></div>
            <hr></hr>

            <ul className=" list-item-custom">
              {events.map((event) => (
                <li className=" " key={event.id}>
                  {" "}
                  <a
                    className=""
                    tabIndex={0}
                    role="button"
                    data-toggle="popover"
                    data-trigger="focus"
                    title={event.description}
                  >
                   {event.title}
                  </a>
                 </li>
              ))}
            </ul>
          </div>
          <div className="col-md-9">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={events}
              headerToolbar={{
                left: "prev,next,today",
                center: "title",
                right: "dayGridMonth",
              }}
              eventClick= {(info)=>eventClick(info)}

  
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCalendar;
