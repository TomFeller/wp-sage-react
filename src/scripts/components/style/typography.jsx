import React from 'react';
import styled from 'styled-components';
import {FontSize} from './variables.jsx'

const
    H1 = styled.h1`
        font-size: ${props => props.size ? props.size : FontSize.lg};
    `,
    H2 = styled.h2`
        font-size: ${props => props.size ? props.size : FontSize.lg};
    `,
    H3 = styled.h3`
        font-size: ${props => props.size ? props.size : FontSize.md};
    `,
    H4 = styled.h4`
        font-size: ${props => props.size ? props.size : FontSize.sm};
    `,
    H5 = styled.h5`
        font-size: ${props => props.size ? props.size : FontSize.xs};
    `,
    H6 = styled.h6`
        font-size: ${props => props.size ? props.size : FontSize.xxs};
    `,
    P = styled.p`
        font-size: ${props => props.size ? props.size : FontSize.sm};
    `,
    Label = styled.label`
        font-size: ${props => props.size ? props.size : FontSize.sm};
    `;

export {H1, H2, H3, H4, H5, H6, P, Label};
