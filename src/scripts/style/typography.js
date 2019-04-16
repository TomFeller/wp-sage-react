import styled from 'styled-components';
import {Viewport, Gutter, FontSize, Colors, Zindex} from './variables'

const JumboTitle = styled.h2`
    color: ${props => props.color ? props.color : '#fff'};    
    margin: ${Gutter.xs} 0 ${Gutter.md}; 
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: ${props => props.responsive ? FontSize.lg : FontSize.xl};
    
    @media screen and (min-width: ${Viewport.md}) {
        font-size: ${props => props.responsive ? FontSize.xl : FontSize.jumbo};
    }
    @media screen and (min-width: ${Viewport.lg}) {
        font-size: ${FontSize.jumbo};
    }
`;

export {JumboTitle};
