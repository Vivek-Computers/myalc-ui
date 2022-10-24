import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdSpaceDashboard, MdLogout } from "react-icons/md";
import { FaUsers, FaUserTag } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";

const NavUl = styled.ul`
  list-style: none;
  margin: 10px 0 0 0;
  padding: 0;
  min-width: 200px;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 7px 15px;
  text-decoration: none;
  color: var(--text-black);
  font-size: 14px;
  font-weight: 500;

  &:hover {
    color: var(--text-black);
    background-color: var(--background-gray);
  }

  &.active {
    color: var(--white);
    background-color: var(--site-red);
  }
`;

const Nav = () => {
  return (
    <NavUl>
      <li>
        <StyledNavLink to="/p/dashboard">
          <MdSpaceDashboard size={20} className="me-2" />
          Dashborad
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/p/learners">
          <FaUsers size={20} className="me-2" />
          Learners
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/p/enquiries">
          <FaUserTag size={20} className="me-2" />
          Enquiries
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/p/courses">
          <GiBookshelf size={20} className="me-2" />
          Courses
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/p/logout">
          <MdLogout size={20} className="me-2" />
          Logout
        </StyledNavLink>
      </li>
    </NavUl>
  );
};

export default Nav;
