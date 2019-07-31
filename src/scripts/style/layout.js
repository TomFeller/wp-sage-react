import styled from 'styled-components';
import {Gutter, header_height, Viewport} from './variables';

const PageWrapper = styled.div` 
    
    background-color: ${props => props.background && props.background};
    min-height: 100%;
    position: relative;
    @media screen and(min-width: ${Viewport.sm} {
        padding-top: ${header_height};    
    }        
    
    .carousel-caption {
        bottom: 12rem !important;
    }
    
`;

export {PageWrapper};