import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./PharmacyRegistration.css";

const PharmacyRegistration = () => {
  const navigate = useNavigate();

  const onUserCancelButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUserCancelButton1Click = useCallback(() => {
    navigate("/pharmacy-login");
  }, [navigate]);

  return (
    <div className="pharmacy-registration">
      <div className="pharmacy-registration-child" />
      <Form className="wrapper12">
        <Form.Control type="date" />
      </Form>
      <Form className="wrapper13">
        <Form.Control type="text" />
      </Form>
      <Form className="wrapper14">
        <Form.Control type="text" />
      </Form>
      <Form className="wrapper15">
        <Form.Control type="tel" />
      </Form>
      <Form className="wrapper16">
        <Form.Control type="text" />
      </Form>
      <Form className="wrapper17">
        <Form.Control type="text" />
      </Form>
      <div className="license-exp-date">License EXP date:</div>
      <div className="contact-number1">License number:</div>
      <div className="address1">Address:</div>
      <div className="tp">T.P:</div>
      <div className="pharmacy-owner">Pharmacy owner:</div>
      <div className="pharmacy-name">Pharmacy name:</div>
      <div className="pharmacy-registration1">Pharmacy Registration</div>
      <Form className="wrapper18">
        <Form.Control type="email" />
      </Form>
      <div className="pharmacy-e-mail">Pharmacy e-mail:</div>
      <Form className="wrapper19">
        <Form.Control type="password" />
      </Form>
      <div className="password2">Password:</div>
      <div className="pharmacy-registration-item" />

      <Button
        className="user-cancel-button4"
        variant="outline-primary"
        onClick={onUserCancelButtonClick}
      >
        Cancel
      </Button>
      <Button
        className="user-cancel-button5"
        variant="outline-primary"
        onClick={onUserCancelButton1Click}
      >
        Register
      </Button>
    </div>
  );
};

export default PharmacyRegistration;
