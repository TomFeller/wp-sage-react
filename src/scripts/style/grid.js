import styled from 'styled-components';
import {Viewport, Gutter} from "./variables";

const
    Container = styled.div`
        width: 100%;
        padding: ${props => props.noGutter ? '0' : `0 ${Gutter.sm}`};
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
    `,
    ResponsiveHalf = styled.div`
        width: 100%;
        padding: ${Gutter.sm};
        @media screen and (min-width: ${Viewport.md}) {
            width: 50%;
            padding: ${props => props.padding ? props.padding : Gutter.sm};
        }
    `;


export {Container, ResponsiveHalf};