import styled from "styled-components";

export const IncContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    font-family: 'Helvetica'
`

export const IncButton = styled.button`
    cursor: pointer;
    align-items: center;
    display: flex;
    height: 100%;
    background-color: transparent;
    border: 0;
    padding: 0;
    height: 40px;
    font-size: 3rem;
`

export const IncValue = styled.div`
    margin: 3px 8px 3px;
    padding: 4px 8px;
    min-width: 2rem;
    text-align: center;
    font-size: 1.5rem;
    line-height: 1rem;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Helvetica'
`