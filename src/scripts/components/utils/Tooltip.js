import React from 'react';
import styled from 'styled-components';
import {FontSize} from "../../style/variables";

class Tooltip extends React.Component {
    render() {
        const {children, fontSize, color, className} = this.props;
        return (
            <TooltipWrapper {...this.props} className={'tool-tip'}>
                <p style={{fontSize: fontSize, color: color}}>{children}</p>
            </TooltipWrapper>
        )
    }

    static defaultProps = {
        color: '#151515',
        background: '#151515',
        fontSize: FontSize.xs
    }
}

export default Tooltip;

const TooltipWrapper = styled.div`
    padding-bottom: .5rem;
    text-align: center;
    position: absolute;
    opacity: 0;
    transition: opacity .2s;
    border-radius: .5rem;
    z-index: 2;
    width: 100%;
    left: 0;
    top: 3rem;
    p {
        font-size: ${props => props.fontSize};
        color: ${props => props.color};    
        margin-bottom: 0;
        position: relative;
        z-index: 1;
        padding: 0 1rem;
       
    }
`;