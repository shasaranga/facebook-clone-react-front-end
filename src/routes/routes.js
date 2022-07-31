import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import LoginSuccess from "../components/LoginSuccess";

const AppRoutes = ({fetchUser}) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/login" element={<Login fetchUser={fetchUser} />} />
      <Route path="/login/success" element={<LoginSuccess />} />
      <Route exact path="/login/error">
        Login Unsuccessful. Please try again later
      </Route>
    </Routes>
  );
};

export default AppRoutes;
