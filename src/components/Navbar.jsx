import styled from "@emotion/styled";

const StyledNavbar = styled.nav`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled.span`
  font-size: 20px;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLink>Home</StyledLink>
      <StyledLink>About</StyledLink>
      <StyledLink>Login</StyledLink>
    </StyledNavbar>
  );
};

export default Navbar;
