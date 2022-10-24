import { Badge } from 'react-bootstrap';
import { FaBell } from 'react-icons/fa';
import styled from 'styled-components';

const NotificationBellContainer = styled.div`
  position: relative;
`;

const NotificationBalloon = styled(Badge)`
  position: absolute;
  top: -7px;
  left: 16px;
`;

const TopNav = () => {
  return (
    <div className="d-flex align-items-center me-5">
      <span className="me-2">Welcome, Shahaji Bhosle</span>
      <NotificationBellContainer>
        <FaBell size={20} className="cursor-pointer" />
        <NotificationBalloon bg="danger">99+</NotificationBalloon>
      </NotificationBellContainer>
    </div>
  );
};

export default TopNav;
