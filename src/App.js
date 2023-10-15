import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserRegistration from "./pages/UserRegistration";
import UserLogin from "./pages/UserLogin";
import UserPage from "./pages/UserPage";
import UserAddingMedicines from "./pages/UserAddingMedicines";
import PharmacyRegistration from "./pages/PharmacyRegistration";
import PharmacyLogin from "./pages/PharmacyLogin";
import PharmacyPage from "./pages/PharmacyPage";
import PharmacyAddingMedicines from "./pages/PharmacyAddingMedicines";
import RequestToAdmin from "./pages/RequestToAdmin";
import AdminLogin from "./pages/AdminLogin";
import AdminPage from "./pages/AdminPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/user-registration":
        title = "";
        metaDescription = "";
        break;
      case "/user-login":
        title = "";
        metaDescription = "";
        break;
      case "/user-page":
        title = "";
        metaDescription = "";
        break;
      case "/user-adding-medicines":
          title = "";
          metaDescription = "";
          break;
      case "/pharmacy-registration":
        title = "";
        metaDescription = "";
        break;
      case "/pharmacy-login":
          title = "";
          metaDescription = "";
          break;
      case "/pharmacy-page":
        title = "";
        metaDescription = "";
        break;
      case "/pharmacy-adding-medicines":
          title = "";
          metaDescription = "";
          break;
      case "/request-to-admin":
          title = "";
          metaDescription = "";
          break;
      case "/admin-login":
          title = "";
          metaDescription = "";
          break;
      case "/admin-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user-registration" element={<UserRegistration />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/user-page" element={<UserPage />} />
      <Route path="/user-adding-medicines" element={<UserAddingMedicines />} />
      <Route path="/pharmacy-registration" element={<PharmacyRegistration />} />
      <Route path="/pharmacy-login" element={<PharmacyLogin />} />
      <Route path="/pharmacy-page" element={<PharmacyPage />} />
      <Route path="/pharmacy-adding-medicines" element={<PharmacyAddingMedicines />} />
      <Route path="/request-to-admin" element={<RequestToAdmin />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-page" element={<AdminPage />} />
    </Routes>
  );
}
export default App;
