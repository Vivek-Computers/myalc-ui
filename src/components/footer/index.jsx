import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: 10px;
  margin: 10px;
`;

const Footer = () => {
  return (
    <footer className="bg-light border-top">
      <StyledSpan>
        &copy; Vivek Computers. All rights reserved by Vivek Computers,
        Parbhani.
      </StyledSpan>
    </footer>
  );
};

export default Footer;
