import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AdminPage.css";

const AdminPage = () => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="admin-page">
      <img className="admin-page-child" alt="" src="/rectangle-232.svg" />
      <div className="admin-page-item" />
      <div className="admin-page1">Admin Page</div>
      <div className="frame-parent8">
        <div className="frame-parent9">
          <div className="address-wrapper">
            <div className="use-name18">Use name</div>
          </div>
          <div className="address-wrapper">
            <div className="use-name18">Address</div>
          </div>
          <div className="address-wrapper">
            <div className="use-name18">T.P</div>
          </div>
          <div className="address-wrapper">
            <div className="use-name18">E-mail</div>
          </div>
        </div>
        <div className="frame-parent9">
          <div className="address-wrapper">
            <div className="use-name18">001</div>
          </div>
          <div className="address-wrapper">
            <div className="use-name18">Use name</div>
          </div>
          <div className="address-wrapper">
            <div className="use-name18">Use name</div>
          </div>
          <div className="address-wrapper">
            <div className="use-name18">Use name</div>
          </div>
        </div>
        <div className="frame-parent9">
          <div className="address-wrapper">
            <div className="use-name18">002</div>
          </div>
          <div className="address-wrapper">
            <div className="use-name18">Use name</div>
          </div>
          <div className="address-wrapper">
            <div className="use-name18">Use name</div>
          </div>
          <div className="address-wrapper">
            <div className="use-name18">Use name</div>
          </div>
        </div>
        <div className="frame-parent9">
          <div className="address-wrapper">
            <div className="use-name18">003</div>
          </div>
          <div className="address-wrapper">
            <div className="use-name18">Use name</div>
          </div>
          <div className="address-wrapper">
            <div className="use-name18">Use name</div>
          </div>
          <div className="address-wrapper">
            <div className="use-name18">Use name</div>
          </div>
        </div>
      </div>
      <Button
        className="frame36"
        variant="outline-primary"
        onClick={onFrameClick}
      >
        Home
      </Button>
    </div>
  );
};

export default AdminPage;
