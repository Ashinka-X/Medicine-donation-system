import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./PharmacyLogin.css";

const PharmacyLogin = () => {
  const navigate = useNavigate();

  const onUserLoginButtonClick = useCallback(() => {
    navigate("/pharmacy-page");
  }, [navigate]);

  const onUserCancelButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="pharmacy-login">
      <div className="pharmacy-login-child" />
      <div className="pharmacy-login-item" />
      <Button
        className="user-login-button1"
        variant="outline-primary"
        onClick={onUserLoginButtonClick}
      >
        Login
      </Button>
      <Button
        className="user-cancel-button6"
        variant="outline-primary"
        onClick={onUserCancelButtonClick}
      >
        Cancel
      </Button>
      <div className="password3">Password:</div>
      <div className="pharmacy-name1">Pharmacy name:</div>
      <div className="pharmacy-login1">Pharmacy login</div>
      <Form className="wrapper20">
        <Form.Control type="text" />
      </Form>
      <Form className="wrapper21">
        <Form.Control type="password" />
      </Form>
    </div>
  );
};

export default PharmacyLogin;
