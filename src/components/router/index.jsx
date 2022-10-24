import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "../error/PageNotFound";
import Login from "../login";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/p/*" element={<ProtectedRoutes />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
