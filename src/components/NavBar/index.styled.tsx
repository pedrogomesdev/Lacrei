import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const ContainerNav = styled.div`
  padding: 10px 32px;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  @media (min-width: 520px) {
    padding: 10px 32px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (min-width: 520px) {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (min-width: 1040px) {
    padding: 8px 64px;
  }

  background-color: var(--cinza);
`;

const NavLogo = styled.a`
  color: var(--verde);
  font-size: 32px;
  font-weight: 400;
  text-align: center;
`;

const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;

  @media (min-width: 520px) {
    gap: 25px;
  }
  color: black;
`;

const NavLi = styled.li`
  color: black;
  font-weight: 700;

  font-size: 0.875rem;

  &:hover {
    color: #aeaeae;
    transition: all 0.2s ease 0s;
  }

  @media (min-width: 520px) {
    font-size: 1rem;
  }
`;

const NavTextLogo = styled.a`
  color: var(--verde);
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <ContainerNav>
      <NavLogo>
        <Link to="/" className="nav-logo">
          <NavTextLogo>Lacrei</NavTextLogo>
        </Link>
      </NavLogo>
      <NavUl>
        <NavLi>
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/user" activeClassName="active">
            Pessoa Usuária
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/professional" activeClassName="active">
            Profissional
          </NavLink>
        </NavLi>
      </NavUl>
    </ContainerNav>
  );
};

export default Navbar;
