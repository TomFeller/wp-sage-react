import styled from 'styled-components';
import {ColorClasses} from "../../../style/colors";
import '../../../style/css/button.css';
const ButtonStyle = styled.button` 
    &.button {
        font-size: ${props => props.size};
        padding: ${props => props.gutter}; 
        border: ${props => props.border};
        ${props => props.block && {display: 'block', width: '100%'}};
        ${props => props.border && {border: props.border}};
        // border-radius: ${props => props.sharp ? '0' : '.5rem'}; 
        outline: 0;
        margin-right: 10px;
        ${props => props.marginBottom && {marginBottom: props.marginBottom}};
        ${ColorClasses};
        position: relative;
        background-color: transparent;
        color: ${props => props.color};
        cursor: pointer;
        z-index: 0;
        &:before { 
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: ${props => props.background};
            transform: skewX(-40deg);
            transition: transform .5s; 
            top: 0;
            left: 0;
            border-radius: 50%;
            z-index: -1;
        }
         &:hover {
             &:before {
                transform: skewX(40deg);
             }
         }
        
    }
`;

export {ButtonStyle}
