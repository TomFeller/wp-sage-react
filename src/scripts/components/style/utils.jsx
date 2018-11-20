import styled from 'styled-components';
import {Viewport, Gutter} from "./variables.jsx";

const ShadowFrame = styled.div`
    background-color:#fff;
    border-radius: 1rem;
    box-shadow: 0 0 40px 3px #000;
    padding: ${Gutter.md}
`;

export {ShadowFrame}