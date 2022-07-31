import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { setAuthUser, setIsAuthenticated } from "./app/slices/userSlice";
import { fetchAuthUser } from "./app/utils/fetch-utils";
import "video-react/dist/video-react.css";
import AppRoutes from "./routes/routes";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const fetchUser = useCallback(async () => {
    const response = await fetchAuthUser();
    if (response && response.data) {
      dispatch(setIsAuthenticated(true));
      dispatch(setAuthUser(response.data));
      navigate("/");
    } else {
      dispatch(setIsAuthenticated(false));
      navigate("/login", { replace: true });
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
    fetchUser();
  }, []);

  return (
    <div className="app">
      <AppRoutes fetchUser = {fetchUser}/>
      
    </div>
  );
}

export default App;
