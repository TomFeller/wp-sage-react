import React from 'react';
import styled from 'styled-components';
import {FontSize} from './variables.jsx'
import {Color} from "./colors.jsx";
import {Gutter} from "./variables";


const FontFamily = {
    title: `'Assistant', sans-serif;`,
    description: `'Rubik', sans-serif;`
};


const
    H1 = styled.h1`
        font-size: ${FontSize.xl};
    `,
    H2 = styled.h2`
        font-size: ${FontSize.lg};
    `,
    H3 = styled.h3`
        font-size: ${FontSize.md};
    `,
    H4 = styled.h4`
        font-size: ${FontSize.sm};
    `,
    H5 = styled.h5`
        font-size: ${FontSize.xs};
    `,
    H6 = styled.h6`
        font-size: ${FontSize.xxs};
    `;

const
    PageTitle = styled.h1` 
        font-weight: 700;
        text-align: center;
        color: #000;
    `,
    PageContent = styled.div`
        font-size: ${FontSize.sm};
        color: #000;
    `,
    SectionTitle = styled.h2`
        font-size: ${FontSize.lg};
        font-family: ${FontFamily.title};
        font-weight: 700;
        position: relative;
        padding-bottom: ${Gutter.xs};
        &:after {
            content: '';
            width: 5rem;
            height: .2rem;
            background-color: ${Color.secondary};
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom:0;
        }
    `;

export {H1, H2, H3, H4, H5, H6, PageTitle, PageContent, FontFamily, SectionTitle};
