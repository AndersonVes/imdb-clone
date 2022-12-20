import styled from 'styled-components';

export const Wrapper = styled.button`
    display: block;
    background: var(--yellowPrimary);
    width:100%;
    min-width: 200px;
    height: 34px;
    border-radius: 5px;
    color: var(--darkGrey);
    font-weight: bold;
    border: 0;
    font-size: var(--fontMed);
    margin: 20px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;

    :hover {
        opacity: 0.8
    }
`;
