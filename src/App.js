import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { logout, selectUser } from "./features/userSlice";
import ErrorLayout from "./layouts/ErrorLayout";
import MainRoutes from './routes/MainRoute'
const { default: LoginLayout } = require("./layouts/LoginLayout");
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const decodedJwt = parseJwt(token);
      if (decodedJwt.exp * 1000 < Date.now()) {
        logOut();
      }
    }
  }, []);
  return (
    <>
    {user ? (
        <>
          <Routes>
            <Route path="/*" element={<Sidebar children={<MainRoutes />} />} />
            <Route path="/error" element={<ErrorLayout />} />
          </Routes>
        </>
      ) : (
        <LoginLayout />
      )}
    </>
  );
}

export default App;
