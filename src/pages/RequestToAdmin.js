import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./RequestToAdmin.css";

const RequestToAdmin = () => {
  const navigate = useNavigate();

  const onUserCancelButtonClick = useCallback(() => {
    navigate("/pharmacy-page");
  }, [navigate]);

  const onUserLoginButtonClick = useCallback(() => {
    navigate("/pharmacy-page");
  }, [navigate]);

  return (
    <div className="request-to-admin">
      <div className="request-to-admin-child" />
      <div className="request-to-admin-item" />
      <div className="user-cancel-button-parent">
        <Button
          className="user-cancel-button9"
          variant="outline-primary"
          onClick={onUserCancelButtonClick}
        >
          Cancel
        </Button>
        <Button
          className="user-cancel-button9"
          variant="outline-primary"
          onClick={onUserLoginButtonClick}
        >
          Send
        </Button>
      </div>
      <div className="user-email">User Email:</div>
      <div className="request-to-admin1">{`Request to admin `}</div>
      <Form className="wrapper25">
        <Form.Control type="email" />
      </Form>
    </div>
  );
};

export default RequestToAdmin;
