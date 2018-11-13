import styled from 'styled-components';
import {Viewport} from "../../style/variables";

const GridWrapper = styled.div`
    display: flex;
    flex-wrap: wrap; 
    .grid {
        border: 2px solid red;
        &_section { 
            border: 2px solid green; 
        }
    }
`;

const GridCell = styled.div`
     width: ${props => props.size.min};
     padding: ${props => props.gutter};
     @media screen and (min-width: ${Viewport.xs}) {
        width: ${props => props.size.xs}; 
     }
     @media screen and (min-width: ${Viewport.sm}) {
        width: ${props => props.size.sm}; 
     }
     @media screen and (min-width: ${Viewport.md}) {
        width: ${props => props.size.md};
     }
     @media screen and (min-width: ${Viewport.lg}) {
        width: ${props => props.size.lg};
     }
`;

export {GridWrapper, GridCell};