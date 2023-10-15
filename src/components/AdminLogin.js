import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();

  const onUserCancelButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUserLoginButtonClick = useCallback(() => {
    navigate("/admin-page");
  }, [navigate]);

  return (
    <div className="admin-login">
      <div className="admin-login-child" />
      <div className="admin-login-item" />
      <div className="user-cancel-button-group">
        <Button
          className="user-cancel-button10"
          variant="outline-primary"
          onClick={onUserCancelButtonClick}
        >
          Cancel
        </Button>
        <Button
          className="user-cancel-button10"
          variant="outline-primary"
          onClick={onUserLoginButtonClick}
        >
          Login
        </Button>
      </div>
      <div className="password4">Password:</div>
      <div className="user-name1">User name:</div>
      <div className="admin-login1">Admin login</div>
      <Form className="wrapper26">
        <Form.Control type="text" />
      </Form>
      <Form className="wrapper27">
        <Form.Control type="password" />
      </Form>
    </div>
  );
};

export default AdminLogin;
