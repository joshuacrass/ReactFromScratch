import styled from "@emotion/styled";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  color: #fff;
  padding: 20px;
`;

const Navbar = styled.nav`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled.span`
  font-size: 20px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Header</h1>
      <Navbar>
        <StyledLink>Home</StyledLink>
        <StyledLink>About</StyledLink>
        <StyledLink>Login</StyledLink>
      </Navbar>
    </StyledHeader>
  );
};

export default Header;
