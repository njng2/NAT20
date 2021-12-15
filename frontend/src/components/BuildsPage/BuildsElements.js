import styled from "styled-components";
import background from "../../media/images/dndshop.jpg";
import library from '../../media/images/library.jpg';
import signup from '../../media/images/buildsbg.png';


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
    width: 50%;
    margin: 0 auto;
    height: auto;
    max-height: 40vh;
    margin-top: calc(90vh - 85vh - 20px);
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #999;
    overflow: auto;
`

export const ClassImageBox = styled.div`
    @media(max-width: 650px){
        display: none;
    }
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
    height: 100% 100%;
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
    width: 50%;
    margin: 0 auto;
    height: auto;
    max-height: 70vh;
    margin-top: calc(90vh - 85vh - 20px);
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #999;
    overflow: auto;
`

export const RaceImageBox = styled.div`
    @media(max-width: 650px){
        display: none;
    }
    
`
//***************************************************************************************************************** */
//stats elements

//library elements
export const LibraryContainer = styled.div`
    background-image: url(${library});
    background-position: center;
    position: absolute;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    width: 100%;
    height: 100% 100%;
`


//signup page elements

export const SignUpContainer = styled.div`
background-image: url(${signup});
background-position: center;
position: absolute;
background-attachment: fixed;
background-repeat: no-repeat;
background-size: cover;
justify-content: center;
width: 100%;
height: 100%;
`
//media queries for resizing

export const ResizingTitle = styled.div`

@media(max-width: 650px){
    text-align: left;
`