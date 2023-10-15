import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./UserRegistration.css";

const UserRegistration = () => {
  const navigate = useNavigate();

  const onUserCancelButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUserRegisterButtonClick = useCallback(() => {
    navigate("/user-login");
  }, [navigate]);

  return (
    <div className="user-registration">
      <div className="user-registration-child" />
      <Form className="wrapper">
        <Form.Control type="text" />
      </Form>
      <Form className="container">
        <Form.Control type="text" />
      </Form>
      <Form className="rectangle-form">
        <Form.Control type="text" />
      </Form>
      <Form className="wrapper1">
        <Form.Control type="text" />
      </Form>
      <Form className="wrapper2">
        <Form.Control type="text" />
      </Form>
      <Form className="wrapper3">
        <Form.Control type="text" />
      </Form>
      <div className="user-registration-item" />
      <Button
        className="user-cancel-button"
        variant="outline-primary"
        onClick={onUserCancelButtonClick}
      >
        Cancel
      </Button>
      <Button
        className="user-register-button"
        variant="outline-primary"
        onClick={onUserRegisterButtonClick}
      >
        Register
      </Button>
      <div className="address">Address:</div>
      <div className="contact-number">Contact number:</div>
      <div className="password">Password:</div>
      <div className="e-mail">E-mail:</div>
      <div className="last-name">Last name:</div>
      <div className="first-name">First name:</div>
      <div className="user-registration1">User Registration</div>
    </div>
  );
};

export default UserRegistration;
