import styled from "@emotion/styled";
import Navbar from "./Navbar";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  color: #fff;
  padding: 20px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Header</h1>
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
