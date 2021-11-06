import styled from "styled-components";
import background from "../../media/images/buildsbg2.png";
import library from '../../media/images/library.jpg';

//classes elements
// export const BGContainer = styled.div`
//     background-image: url(${background});
//     background-repeat: no-repeat;
//     background-size: cover;
//     justify-content: center;
//     width: 100wh;
//     height: 120vh;
//     color: white;
//     overflow: hidden;
// `

export const ClassSectionStyle = styled.div`
    width: 10vw;
    height: 10vh;
    postion: absolute;
    color: black;
`
export const ClassTitle = styled.div`
    display: flex;
    justify-content: center;
    height: 90vh;
    color: white; 
    overflow: hidden;
    padding-top: 25px;
`
export const ClassTextBox = styled.div`
    position: absolute;
    text-color: black;
    background-color: #000;
    color: #fff;
    opacity: .5;
    justify-content: center;
`

export const ClassImageBox = styled.div`
    position: absolute;
    left: 150px;
    justify-content: center;
`

//***************************************************************************************************************** */
//dropown stuff below this

export const BackgroundContainer = styled.div`
    background-image: url(${background});
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center center;
    width: 100%;
    height: 100%;
    color: white;
`

export const DropDownStyle = styled.div`
    width: 10vw;
    height: 10vh;
    postion: absolute;
    color: black;
    
`
export const BuildTitle = styled.div`
    display: flex;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    height: 100vh;
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

export const RaceImageBox = styled.div`
    position: absolute;
    left: 150px;
    height: 100vh;
    
`
//***************************************************************************************************************** */
//stats elements

export const LibraryContainer = styled.div`
    background-image: url(${library});
    background-position: center;
    position: absolute;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    width: 100%;
    height: 100%;
`