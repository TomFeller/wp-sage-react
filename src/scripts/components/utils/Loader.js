import React from 'react';
import styled, {keyframes} from 'styled-components';

class Loader extends React.Component {
    render() {
        return (
            <Dots>
                <div className="bounce1"/>
                <div className="bounce2"/>
                <div className="bounce3"/>
            </Dots>
        )
    }
}

export default Loader;

const Bouncing = keyframes`
     0%, 80%, 100% { 
        -webkit-transform: scale(0);
        transform: scale(0);
     } 
     40% { 
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
     }
`;
const Dots = styled.div`
    margin: 240px auto 0;
    width: 70px;
    text-align: center;
    div {
        width: 18px;
        height: 18px;
        background-color: #333;
        border-radius: 100%;
        display: inline-block;
        
        animation: ${Bouncing} 1.4s infinite ease-in-out both;
        &.bounce1 {
             -webkit-animation-delay: -0.32s;
            animation-delay: -0.32s;
        }
        &.bounce2 {
             -webkit-animation-delay: -0.16s;
            animation-delay: -0.16s;
        }
        
    }
    
`;
