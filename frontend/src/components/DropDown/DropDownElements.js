import styled from "styled-components";
import background from "../../media/images/buildsbg2.png";

export const BackgroundContainer = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    width: 100wh;
    height: 100vh;
    color: white;
    overflow: hidden;
`

export const DropDownStyle = styled.div`
    width: 10vw;
    height: 10vh;
    postion: absolute;
    text-color: red;
    color: black;
    grid-area: dropdown;
`
export const BuildTitle = styled.div`
    display: flex;
    justify-content: center;
    height: 90vh;
    color: white; 
    overflow: hidden;
    padding-top: 25px;
    grid-area: build;
`
export const RaceTextBox = styled.div`
    position: absolute;
    text-color: black;
    background-color: #000;
    color: #fff;
    opacity: .5;
    justify-content: center;
    grid-area: textbox;
`

export const BuildGrid = styled.div`
    display: grid;
    height: 10vh;
    grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
    grid-template-areas:
        "textbox textbox textbox"
        "build build build"
        "dropdown dropdown dropdown";
    text-align: left;
    grid-gap: 0.25rem;
`
