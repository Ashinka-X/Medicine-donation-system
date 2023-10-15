import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./UserPage.css";

const UserPage = () => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrame1Click = useCallback(() => {
    navigate("/user-adding-medicines");
  }, [navigate]);

  return (
    <div className="user-page">
      <div className="frame5">
        <div className="available-medicines">Available Medicines</div>
      </div>
      <div className="frame6">
        <div className="user-page1">User Page</div>
      </div>
      <Button
        className="frame7"
        variant="outline-primary"
        onClick={onFrameClick}
      >
        Home
      </Button>
      <div className="frame8">
        <img className="frame-child" alt="" src="/rectangle-23.svg" />
        <div className="frame-parent">
          <div className="frame-group">
            <div className="medicine-name-wrapper">
              <div className="medicine-name">Medicine name</div>
            </div>
            <div className="medicine-name-wrapper">
              <div className="medicine-name">EXP date</div>
            </div>
            <div className="medicine-name-wrapper">
              <div className="medicine-name">MFG date</div>
            </div>
            <div className="medicine-name-wrapper">
              <div className="medicine-name">Detail of medicine</div>
            </div>
          </div>
          <div className="frame-group">
            <div className="medicine-name-wrapper">
              <div className="medicine-name">001</div>
            </div>
            <div className="medicine-name-wrapper">
              <div className="medicine-name">Use name</div>
            </div>
            <div className="medicine-name-wrapper">
              <div className="medicine-name">Use name</div>
            </div>
            <div className="medicine-name-wrapper">
              <div className="medicine-name">Use name</div>
            </div>
          </div>
          <div className="frame-group">
            <div className="medicine-name-wrapper">
              <div className="medicine-name">002</div>
            </div>
            <div className="medicine-name-wrapper">
              <div className="medicine-name">Use name</div>
            </div>
            <div className="medicine-name-wrapper">
              <div className="medicine-name">Use name</div>
            </div>
            <div className="medicine-name-wrapper">
              <div className="medicine-name">Use name</div>
            </div>
          </div>
          <div className="frame-group">
            <div className="medicine-name-wrapper">
              <div className="medicine-name">003</div>
            </div>
            <div className="medicine-name-wrapper">
              <div className="medicine-name">Use name</div>
            </div>
            <div className="medicine-name-wrapper">
              <div className="medicine-name">Use name</div>
            </div>
            <div className="medicine-name-wrapper">
              <div className="medicine-name">Use name</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame9">
        <Button
          className="frame10"
          variant="outline-primary"
          onClick={onFrame1Click}
        >
          Add medicines
        </Button>
      </div>
    </div>
  );
};

export default UserPage;
