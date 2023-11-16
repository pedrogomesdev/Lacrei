import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: column;
  padding: 16px 16px 0px;

  @media (min-width: 520px) {
    padding: 32px 32px 0px;
  }

  @media (min-width: 1040px) {
    padding: 64px 64px 0px;
    align-items: start;
    flex-direction: row;
  }
`;

export default Container;
