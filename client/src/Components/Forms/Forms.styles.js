import styled from 'styled-components';

export const StyledForms = styled.form`
    margin: 0 auto;
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
    background-color: var(--color-dark-translucent);
    color: white;
    border-bottom: 1px solid #333;
    &::placeholder{ color: #333};
`;

export const FormSbmt = styled.input.attrs({
    type: 'input',
    })`
    border-radius: 25px;
    padding: 3%;
    margin: 10% 0% 10% 30%;
    width: 40%;
    text-align: center;
    cursor: pointer;
    `;

export const HLetters = styled.h1`
    font-size: var(--font-size-l);
`