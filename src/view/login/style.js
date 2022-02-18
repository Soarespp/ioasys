import styled from "styled-components";

export const Logo = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: url(${props => props.src});  
  background-repeat: no-repeat;
  background-size: cover;
`;
//   background-image: url(${props => props.src});
// background-image: url("./../../img/ioasys.png");  