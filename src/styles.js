import styled from "styled-components";

export const Cards = styled.div`
    overflow-y: auto;
    padding: 50px;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    flex-grow: 1;
`;

export const Wrapper = styled.div`
    display: flex;
    height: 100%;
`

export const Header = styled.div`
    display: flex; 
    padding: 0 20px;
    border-bottom: 1px solid #000;
    gap: 30px;
    height: 60px;
    align-items: center;
    flex-shrink: 0;
`

export const Footer = styled.div`
    height: 50px;
    align-items: center;
    display: flex; 
    padding: 0 20px;
    border-top: 1px solid #000;
    flex-shrink: 0;
`

export const Instructions = styled.div`
    flex-basis: 30%;
    display: flex;
    align-items: center;
    padding: 15px;
    font-size: 20px;
    font-weight: bold;
`

export const LeftSideContent = styled.div`
    flex-basis: 70%;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
`

export const CardItem = styled.div`
    position: relative;
    padding: 30px;
    font-weight: bold; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    width: 200px;
    height: 200px;
    border: 1px solid #000;
    
`

export const RemoveCardButton = styled.button`
    cursor: pointer;
    background: transparent;
    border: none;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 25px;
    width: 35px;
    
    &:hover {
        color: red;
    }
`

export const Button = styled.button`
    background: #fff;
    border: 1px solid blue;
    height: 40px;
    display: inline-flex;
    min-width: 130px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    &:hover {
        background: blue; 
        color: #fff;
    }
`