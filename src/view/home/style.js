import styled from "styled-components";

export const ButtonImg = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: url(${props => props.src});  
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin:3px;
`;