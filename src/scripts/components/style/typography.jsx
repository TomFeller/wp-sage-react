import styled from 'styled-components';
import {FontSize} from './variables.jsx'


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
    font-weight: 100;
    text-align: center;
    color: #000;
`,
    PageContent = styled.div`
        font-size: ${FontSize.sm};
        color: #000;
`;

export {H1, H2, H3, H4, H5, H6, PageTitle, PageContent};
