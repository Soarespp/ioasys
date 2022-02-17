import styled from "styled-components";

export const Logo = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${props => props.src});  
  background-repeat: no-repeat;
  background-size: cover;
`;
//   background-image: url(${props => props.src});
// background-image: url("./../../img/ioasys.png");  