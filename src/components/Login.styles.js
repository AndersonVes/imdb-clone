import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    max-width: 320px;
    padding: 20px;
    color: var(--darkGrey);
    text-align: left;

    label {
        width: 100%
    }
    input {
        border: 1px solid #a6a6a6;
        border-top-color: #949494;
        border-radius: 3px;
        box-shadow: 0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset;
        outline: 0;
        width: 100%;
        height: 30px;
        margin: 10px 0;
        padding: 10px;
    }

    .error {
        color: red
    }
`;
