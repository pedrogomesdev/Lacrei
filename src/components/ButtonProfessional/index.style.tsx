import styled from "styled-components";

const StyledButton = styled.button`
  width: 187px;
  padding: 0.75rem 1rem;
  border: 2px solid #018762;
  border-radius: 10px;
  height: 50px;
  box-shadow: rgba(99, 69, 69, 0.25) 0px 4px 4px;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  transition: all 0.2s ease 0s;

  &:hover,
  &:focus {
    box-shadow: rgba(133, 133, 133, 0.1) 0 4px 12px;
    filter: brightness(1.2);
  }
`;

const StyledSpan = styled.span`
  color: var(--verde);
  font-size: 1.2rem;
  font-weight: bold;
`;

const ButtonProfessional = () => {
  return (
    <StyledButton>
      <StyledSpan>Profissional</StyledSpan>
    </StyledButton>
  );
};

export default ButtonProfessional;
