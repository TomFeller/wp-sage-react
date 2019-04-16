import styled from 'styled-components';
import {Gutter, FontSize, Colors} from './variables';

const Button = styled.button`
    border: ${p => p.border ? p.border : '.2rem solid #fff'};
    color: ${p => p.color ? p.color : '.2rem solid #fff'};
    padding: ${Gutter.sm}; 
    background-color: ${p => p.backgroundColor ? p.backgroundColor : 'transparent'};
    font-size: ${p => p.fontSize ? p.fontSize : FontSize.sm};
    font-weight: 100;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 5rem;
    box-shadow: none;
    outline: none !important;
    text-shadow: none;
    font-weight: bold;
    &:hover {
        background-color: ${p => p.backgroundColor ? p.backgroundColor : '#0975c1'};
        border-color: transparent !important;
        color: #fff; 
        font-weight: 600;
    }
    &:focus {
        background-color: ${p => p.backgroundColor ? p.backgroundColor : '#0975c1'};
        border-color: transparent !important;
        color: #fff; 
        font-weight: 600;
    }
`;

export {Button};