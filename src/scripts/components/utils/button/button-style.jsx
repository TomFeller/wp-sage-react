import styled from 'styled-components';
import {ColorClasses} from "../../style/colors";

const ButtonStyle = styled.button` 
    &.button {
        font-size: ${props => props.size};
        padding: ${props => props.gutter};
        border: ${props => props.border};
        ${props => props.block && {display: 'block', width: '100%'}};
        ${props => props.border && {border: props.border}};
        border-radius: ${props => props.sharp ? '0' : '.5rem'};
        outline: 0;
        margin-right: 10px;
        ${ColorClasses}
    }
`;

export {ButtonStyle}
