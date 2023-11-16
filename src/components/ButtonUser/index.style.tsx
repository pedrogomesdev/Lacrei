import styled from "styled-components";

const StyledButton = styled.button`
  width: 187px;
  padding: 0.75rem 1rem;
  border: 2px solid #018762;
  background-color: var(--verde);
  border-radius: 10px;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;

  &:hover,
  &:focus {
    box-shadow: rgba(133, 133, 133, 0.1) 0 4px 12px;
    filter: brightness(1.2);
  }
`;

const StyledSpan = styled.span`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
`;

const ButtonUser = () => {
  return (
    <StyledButton>
      <StyledSpan>Pessoa Usuária</StyledSpan>
    </StyledButton>
  );
};

export default ButtonUser;
