import styled from 'styled-components';
import {Viewport, Gutter} from "./variables.jsx";

const
    Container = styled.div`
        width: ${props => `100% ${props.fluid ? '!important;' : ';'}`}
        padding:${props =>`0 ${props.noGutters ? '0' : Gutter.sm}`};
        margin: 0 auto;  
        @media screen and (min-width: ${Viewport.sm}) {
            width: ${Viewport.sm};
        }
        @media screen and (min-width: ${Viewport.md}) {
            width: ${Viewport.md};
        }
        @media screen and (min-width: ${Viewport.lg}) {
            width: ${Viewport.lg};
        } 
        @media screen and (min-width: ${Viewport.xl}) {
            width: ${Viewport.xl};
        }
        @media screen and (min-width: ${Viewport.wide}) {
            width: ${Viewport.wide};
         }
        .app-header & {
            @media screen and (max-width: ${Viewport.md}) {
                width: 100%;
            }
        } 
    `;

export {Container};