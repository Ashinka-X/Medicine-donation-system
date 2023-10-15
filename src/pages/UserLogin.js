import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./UserLogin.css";

const UserLogin = () => {
  const navigate = useNavigate();

  const onUserLoginButtonClick = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  const onUserCancelButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="user-login">
      <div className="user-login-child" />
      <Form className="wrapper4">
        <Form.Control type="text" placeholder="Enter Your Password" />
      </Form>
      <Form className="wrapper5">
        <Form.Control type="text" placeholder="Enter Your Name" />
      </Form>
      <div className="user-login-item" />
      <Button
        className="user-login-button"
        variant="outline-primary"
        onClick={onUserLoginButtonClick}
      >
        Login
      </Button>
      <Button
        className="user-cancel-button1"
        variant="outline-primary"
        onClick={onUserCancelButtonClick}
      >
        Cancel
      </Button>
      <div className="password1">Password:</div>
      <div className="user-name">User name:</div>
      <div className="user-login1">User login</div>
    </div>
  );
};

export default UserLogin;
