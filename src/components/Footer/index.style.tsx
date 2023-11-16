import styled from "styled-components";
import Redes from "../../assets/img/redes.svg";
import { NavLink } from "react-router-dom";

const NavFooter = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 16px 0px 8px;
  gap: 3px;
  margin: 0px 16px;

  @media (min-width: 520px) {
    padding: 32px 0px 8px;
    gap: 20px;
    margin: 0px 32px;
  }

  @media (min-width: 1040px) {
    margin: 0px 64px;
  }
`;

const FooterUl = styled.ul`
  display: flex;
  flex-direction: column;

  @media (min-width: 520px) {
    flex-direction: row;
    gap: 2.5rem;
  }
`;

const FooterLi = styled.li`
  font-size: 0.9rem;
  color: black;

  &:hover {
    color: #aeaeae;
    transition: all 0.2s ease 0s;
    font-weight: bold;
  }

  @media (min-width: 520px) {
    font-size: 1rem;
  }

  &.active:active {
    color: var(--verde);
  }
`;

const Linha = styled.div`
  width: 100%;
  height: 1px;
  background-color: #b0e0d3;
  position: relative;
  bottom: 20px;
`;

const Socias = styled.div``;

const Creditos = styled.p`
  font-size: 0.75rem;
`;

const Footer = () => {
  return (
    <NavFooter>
      <Linha></Linha>
      <FooterUl>
        <FooterLi>
          <NavLink to="/" activeClassName="active-footer" exact>
            Home
          </NavLink>
        </FooterLi>
        <FooterLi>
          <NavLink to="/user" activeClassName="active-footer">
            Pessoa Usuária
          </NavLink>
        </FooterLi>
        <FooterLi>
          <NavLink to="/professional" activeClassName="active-footer">
            Profissional
          </NavLink>
        </FooterLi>
      </FooterUl>
      <Socias>
        <img src={Redes} alt="Redes Sociais" />
      </Socias>
      <Creditos>Desafio Front-end Lacrei</Creditos>
    </NavFooter>
  );
};

export default Footer;
