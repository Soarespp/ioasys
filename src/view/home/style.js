import styled from "styled-components";

export const ItemLista = styled.div`
    display: grid;
    grid-template-columns: [col] ${(props) => { if (props.lado === 0) { return 70 } else { return 30 } }}% [col] ${(props) => { if (props.lado === 0) { return 30 } else { return 70 } }}% ;
    border: 4px groove #52b69a;
    border-radius: 5px;
    border-bottom: 3px groove rgba(118, 200, 147, 0.836);
`;