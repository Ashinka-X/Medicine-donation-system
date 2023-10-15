import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./UserAddingMedicines.css";

const UserAddingMedicines = () => {
  const navigate = useNavigate();

  const onUserCancelButtonClick = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  const onUserCancelButton1Click = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  return (
    <div className="user-adding-medicines">
      <div className="user-adding-medicines-child" />
      <div className="user-adding-medicines-item" />
      <Button
        className="user-cancel-button2"
        variant="outline-primary"
        onClick={onUserCancelButtonClick}
      >
        Cancel
      </Button>
      <div className="frame11">
        <div className="adding-medicines">Adding Medicines</div>
      </div>
      <div className="frame12">
        <div className="age">Medicine name:</div>
      </div>
      <div className="frame13">
        <Form className="wrapper8">
          <Form.Control type="text" />
        </Form>
      </div>
      <div className="frame14">
        <div className="gender"> Gender:</div>
      </div>
      <div className="frame15">
        <Form className="wrapper8">
          <Form.Control type="text" />
        </Form>
      </div>
      <div className="frame16">
        <div className="age">Age:</div>
      </div>
      <div className="frame17">
        <Form className="wrapper8">
          <Form.Control type="number" />
        </Form>
      </div>
      <div className="frame18">
        <div className="age">Amount of medicines:</div>
      </div>
      <div className="frame19">
        <Form className="wrapper8">
          <Form.Control type="text" />
        </Form>
      </div>
      <Button
        className="user-cancel-button3"
        variant="outline-primary"
        onClick={onUserCancelButton1Click}
      >
        Submit
      </Button>
    </div>
  );
};

export default UserAddingMedicines;
