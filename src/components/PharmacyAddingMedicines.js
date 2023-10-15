import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./PharmacyAddingMedicines.css";

const PharmacyAddingMedicines = () => {
  const navigate = useNavigate();

  const onUserCancelButtonClick = useCallback(() => {
    navigate("/pharmacy-page");
  }, [navigate]);

  const onUserCancelButton1Click = useCallback(() => {
    navigate("/pharmacy-page");
  }, [navigate]);

  return (
    <div className="pharmacy-adding-medicines">
      <div className="pharmacy-adding-medicines-child" />
      <div className="frame27">
        <div className="how-to-use">How to use:</div>
      </div>
      <Form className="frame28">
        <Form.Control type="text" />
      </Form>
      <div className="frame29">
        <div className="how-to-use">EXP date:</div>
      </div>
      <Form className="frame30">
        <Form.Control type="date" />
      </Form>
      <div className="frame31">
        <div className="how-to-use">Medicine name:</div>
      </div>
      <div className="frame32">
        <div className="how-to-use">MFG date:</div>
      </div>
      <div className="frame33">
        <div className="adding-medicines1">Adding Medicines</div>
      </div>
      <Form className="frame34">
        <Form.Control type="text" />
      </Form>
      <Form className="frame35">
        <Form.Control type="date" />
      </Form>
      <div className="pharmacy-adding-medicines-item" />
      <Button
        className="user-cancel-button7"
        variant="outline-primary"
        onClick={onUserCancelButtonClick}
      >
        Cancel
      </Button>
      <Button
        className="user-cancel-button8"
        variant="outline-primary"
        onClick={onUserCancelButton1Click}
      >
        Submit
      </Button>
    </div>
  );
};

export default PharmacyAddingMedicines;
