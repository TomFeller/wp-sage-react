import styled from 'styled-components';
import {Viewport, Gutter} from "./variables.jsx";

const ShadowFrame = styled.div`
    background-color:#fff;
    border-radius: 1rem;
    box-shadow: 0 0 40px 10px rgba(0,0,0,.3);
    padding: ${props => props.padding ? props.padding : Gutter.md};
    position: relative;
    overflow: hidden;
`;

export {ShadowFrame}