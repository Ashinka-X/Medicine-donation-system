import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./PharmacyPage.css";

const PharmacyPage = () => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/pharmacy-adding-medicines");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrame1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrame2Click = useCallback(() => {
    navigate("/request-to-admin");
  }, [navigate]);

  return (
    <div className="pharmacy-page">
      <div className="frame20">
        <Button
          className="frame21"
          variant="outline-primary"
          onClick={onFrameClick}
        >
          Add medicines
        </Button>
      </div>
      <div className="frame22">
        <div className="pharmacy-page1">Pharmacy Page</div>
      </div>
      <div className="frame23" onClick={onFrameContainer2Click}>
        <div className="available-medicines1">Available Medicines</div>
        <Button
          className="frame24"
          variant="outline-primary"
          onClick={onFrame1Click}
        >
          Home
        </Button>
      </div>
      <div className="frame25">
        <img className="frame-item" alt="" src="/rectangle-231.svg" />
        <div className="frame-parent3">
          <div className="frame-parent4">
            <div className="medicine-name-container">
              <div className="medicine-name2">Medicine name</div>
            </div>
            <div className="medicine-name-container">
              <div className="medicine-name2">EXP date</div>
            </div>
            <div className="medicine-name-container">
              <div className="medicine-name2">MFG date</div>
            </div>
            <div className="medicine-name-container">
              <div className="medicine-name2">Detail of medicine</div>
            </div>
          </div>
          <div className="frame-parent4">
            <div className="medicine-name-container">
              <div className="medicine-name2">001</div>
            </div>
            <div className="medicine-name-container">
              <div className="medicine-name2">Use name</div>
            </div>
            <div className="medicine-name-container">
              <div className="medicine-name2">Use name</div>
            </div>
            <div className="medicine-name-container">
              <div className="medicine-name2">Use name</div>
            </div>
          </div>
          <div className="frame-parent4">
            <div className="medicine-name-container">
              <div className="medicine-name2">002</div>
            </div>
            <div className="medicine-name-container">
              <div className="medicine-name2">Use name</div>
            </div>
            <div className="medicine-name-container">
              <div className="medicine-name2">Use name</div>
            </div>
            <div className="medicine-name-container">
              <div className="medicine-name2">Use name</div>
            </div>
          </div>
          <div className="frame-parent4">
            <div className="medicine-name-container">
              <div className="medicine-name2">003</div>
            </div>
            <div className="medicine-name-container">
              <div className="medicine-name2">Use name</div>
            </div>
            <div className="medicine-name-container">
              <div className="medicine-name2">Use name</div>
            </div>
            <div className="medicine-name-container">
              <div className="medicine-name2">Use name</div>
            </div>
          </div>
        </div>
      </div>
      <Button
        className="frame26"
        variant="outline-primary"
        onClick={onFrame2Click}
      >
        Send
      </Button>
    </div>
  );
};

export default PharmacyPage;
