import React from 'react'
import {PopUpBox,Box,CloseIcon} from './PopUpElements'


const PopUp = (props) => {
    return(props.trigger) ? (
        <PopUpBox>
            <Box>
                <CloseIcon>
                <button onClick = {() => props.setTrigger(false)}>Close</button>
                </CloseIcon>
                {props.children}
            </Box>
        </PopUpBox>
    ): "";
};

export default PopUp;