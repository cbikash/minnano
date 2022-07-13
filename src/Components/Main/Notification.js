import { Toast, ToastContainer } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../Store/uiSlice";

const Notification = ({ message, type, open }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(open ? true : false);

  if (open) {
    setTimeout(() => {
      dispatch(uiActions.closeNotification());
      setShow(false);
    }, 5000);
  }

  return (
    <>
        <Toast
        className="toast"
          onClose={() => setShow(false)}
          show={show}
        >
          <Toast.Header>
            <strong className="me-auto">{type}</strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
     
    </>
  );
};

export default Notification;
