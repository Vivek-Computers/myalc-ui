import { FaBell } from "react-icons/fa";
import { NotificationBalloon } from "../common-components";

const TopNav = () => {
  return (
    <div className="d-flex align-items-center">
      <span className="me-2">Welcome, Shahaji Bhosle</span>
      <div>
        <FaBell size={20} className="cursor-pointer" />
        <NotificationBalloon>5</NotificationBalloon>
      </div>
    </div>
  );
};

export default TopNav;
