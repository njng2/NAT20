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
    color: black;
`
export const BuildTitle = styled.div`
    display: flex;
    justify-content: center;
    height: 90vh;
    color: white; 
    overflow: hidden;
    padding-top: 25px;
`
export const RaceTextBox = styled.div`
    position: absolute;
    text-color: black;
    background-color: #000;
    color: #fff;
    opacity: .5;
    justify-content: center;
`

