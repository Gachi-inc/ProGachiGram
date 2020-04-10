import styled from 'styled-components';
//import {NavLink as RouterLink} from 'react-router-dom';

export const StyledNews = styled.div`
    margin: 0 auto;
    max-width: var(--content-width);
    padding: 0 var(--padding);
    width: 80%;
`;

export const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 100%;
    margin: 0 auto;
    max-width: var(--content-width);
    padding: 0 var(--padding);
`;



export const Line = styled.hr`
    margin: 20px 0;
    padding: 0;
    height: 0;
    border: none;
    border-top: 1px solid #333;
`;