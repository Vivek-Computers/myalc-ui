import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import PageNotFound from "../error/PageNotFound";
import Footer from "../footer";
import Header from "../header";
import Nav from "../nav";

const NavContainer = styled.div`
  height: calc(100vh - 58px - 25px);
`;

const ProtectedRoutes = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <NavContainer className="d-flex flex-grow-1">
        <nav className="navbar-light bg-light border-end">
          <Nav />
        </nav>
        <div className="flex-grow-1 p-2 overflow-auto">
          <Routes>
            <Route path="/dashboard" element={<p>Dashboard</p>} />
            <Route path="/learners" element={<p>Learners</p>} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </NavContainer>
      <Footer />
    </div>
  );
};

export default ProtectedRoutes;
