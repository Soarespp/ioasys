import styled from "styled-components";

export const ViewImg = styled.div`
  width: 100%;  
  height: 100%;
  min-width:100px;
  max-height:100px
  border-radius: 3px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;