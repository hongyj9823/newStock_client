import styled from 'styled-components';

export const ErrorMessage = styled.div`
    ${({big}) =>`
    color : red;
    font-size : ${big ? "3em" : "2em"};
    pdding : 0.125rem;
    border : 2px solid red;
    background-color : White;
    font-weight : bold;
    `}
`;

export default ErrorMessage;