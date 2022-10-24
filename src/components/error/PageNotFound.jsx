import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GradientContainer } from "../common-components";

const FourOFour = styled.h1`
  text-shadow: -4px 2px 7px rgb(0 0 0 / 60%);
  font-size: 56px;
`;

const PageNotFound = () => {
  return (
    <GradientContainer>
      <div className="text-center user-select-none">
        <FourOFour>404</FourOFour>
        <p>The page you are looking for is not available</p>
        <Link to="/p/dashboard">
          <Button variant="outline-primary">Take me to Dashboard</Button>
        </Link>
      </div>
    </GradientContainer>
  );
};

export default PageNotFound;
