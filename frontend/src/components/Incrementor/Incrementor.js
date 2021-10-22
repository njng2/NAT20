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
const Incrementor = ({min, max, value, onChange}) => {
    const clampV = clamp(min, max);
    const disableMin = value === min;
    const disableMax = value === max;

    return (
        <IncContainer>
            <IncButton onClick={() => onChange(clampV(value - 1))} disabled={disableMin}>

                <FontAwesomeIcon icon={faMinusSquare} />
            </IncButton>
                <IncValue>{value}</IncValue>
            <IncButton onClick={ () => onChange(clampV(value + 1))} disabled={disableMax}>
                <FontAwesomeIcon icon={faPlusSquare} />
            </IncButton>
        </IncContainer>
    );
}

export default Incrementor;