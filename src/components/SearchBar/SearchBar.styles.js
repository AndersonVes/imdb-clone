import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    background: var(--darkGrey);
    padding: 0 20px; 
    `;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 40px;
    background: var(--medGrey);
    margin: 0 auto;
    border-radius: 10px;
    color: var(--white);

    img {
        position: absolute;
        left: 15px;
        top: 14px;
        width: 15px;
    }

    input {
        font-size: var(--fontMed);
        position: absolute;
        left: 0;
        margin: 8px 0;
        padding: 0 0 0 45px;
        border: 0;
        width: 95%;
        background: transparent;
        height: 25px;
        color: var(--white);

        :focus {
            outline: none
        }
    }
`;
