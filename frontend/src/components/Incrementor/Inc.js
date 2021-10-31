import React, { useState } from 'react';
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clamp } from './clamp';
import {
    IncContainer,
    IncButton,
    IncValue
}
from './IncElements';

// - <value> +
const Incrementor = ({min, max, value, onChange,Counter, availPoints,CurrentPoints}) => {
    const clampV = clamp(min, max);
    const disableMin = value === min;
    const disableMax = value === max;

    return (
        <IncContainer>
            <IncButton onClick={() => 
                onChange(clampV(value - 1), (Counter-1), (availPoints+1), (CurrentPoints-1))

            } 
                disabled={disableMin}
                >
                <FontAwesomeIcon icon={faMinusSquare} style={{ width: '60%' }}/>
            </IncButton>
                <IncValue>{value}</IncValue>
                
            <IncButton onClick={ () => onChange(clampV(value + 1),(Counter+1), (availPoints-1), (CurrentPoints+1))} disabled={disableMax}>
                <FontAwesomeIcon icon={faPlusSquare} style={{ width: '60%', margin: '0'}}/>
            </IncButton>
        </IncContainer>
    );
}

export default Incrementor;

