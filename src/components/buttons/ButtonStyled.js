import styled from "styled-components";

const DeleteButtonStyled = styled.button`
  border-radius: 3px;
  height: 2.2em;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export default DeleteButtonStyled;