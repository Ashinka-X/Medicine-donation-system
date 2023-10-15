import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onDonarButtonClick = useCallback(() => {
    navigate("/pharmacy-registration");
  }, [navigate]);

  const onAdminButtonClick = useCallback(() => {
    navigate("/admin-login");
  }, [navigate]);

  const onUserButtonClick = useCallback(() => {
    navigate("/user-registration");
  }, [navigate]);

  const onDonateMedicineButtonClick = useCallback(() => {
    navigate("/pharmacy-registration");
  }, [navigate]);

  const onGetMedicineButtonClick = useCallback(() => {
    navigate("/user-registration");
  }, [navigate]);

  return (
    <div className="home-page">
      <div className="frame">
        <div className="online-medicine-donation-container">
          <span>ONLINE MEDICINE DONATION</span>
          <span className="span">{` `}</span>
        </div>
      </div>
      <div className="frame1">
        <Button
          className="donar-button"
          variant="outline-primary"
          onClick={onDonarButtonClick}
        >
          Pharmacy
        </Button>
        <Button
          className="admin-button"
          variant="outline-primary"
          onClick={onAdminButtonClick}
        >
          Admin
        </Button>
        <Button
          className="user-button"
          variant="outline-primary"
          onClick={onUserButtonClick}
        >
          User
        </Button>
        <Button className="home-button" variant="outline-primary">
          Home
        </Button>
      </div>
      <div className="frame2">
        <div className="frame3">
          <div className="frame4">
            <button
              className="donate-medicine-button"
              onClick={onDonateMedicineButtonClick}
            >
              <div className="donate-medicines">
                <p className="donate">{`   Donate `}</p>
                <p className="donate">Medicines</p>
              </div>
            </button>
            <button
              className="get-medicine-button"
              onClick={onGetMedicineButtonClick}
            >
              <div className="get-medicines">
                <p className="donate">{`     Get `}</p>
                <p className="donate">Medicines</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="our-services">Our Services</div>
    </div>
  );
};

export default HomePage;
