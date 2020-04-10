import styled from 'styled-components';
//import {NavLink as RouterLink} from 'react-router-dom';

export const StyledForms = styled.form`
    margin: 10px auto;
    padding: 0 var(--padding);
    width: min-content;
    color: white;
    border: 1px solid #333;
    border-radius: 25px;
`;

export const FormInpt = styled.input`
    align-items: center;
    display: flex;
    height: 50%;
    margin: 2%;
    padding: 0 var(--padding);
    background-color: var(--color-dark-translucent);
    color: white;
    border-bottom: 1px solid #333;
    &::placeholder{ color: #333};
`;

export const FormSbmt = styled.input.attrs({
    type: 'submit',
    })`
    border-radius: 25px;
    padding: 3%;
    margin: 10% auto;
    `;

export const HLetters = styled.h1`
    font-size: var(--font-size-l);
`