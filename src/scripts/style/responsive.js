import React from 'react';
import styled from 'styled-components';
import {Viewport} from "./style";

const MobileOnly = styled.div`
    @media screen and (min-width: ${Viewport.sm}) {
        display: none !important;
     } 
     background: red
`;

const MobileHidden = styled.div`
    ${props => props.style};
    display: none !important;
    @media screen and (min-width: ${Viewport.sm}) {
        display: block !important;
     }
`;

export {MobileOnly, MobileHidden}
