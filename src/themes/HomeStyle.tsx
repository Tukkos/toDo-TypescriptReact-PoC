import styled from "styled-components";

export const HomeStyle = styled.div`
    background-color: ${({theme}) => theme.colors.secondary};
    width: 900px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;