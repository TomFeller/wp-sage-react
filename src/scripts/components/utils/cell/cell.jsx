import React from 'react';
import styled from 'styled-components';
import {Gutter, Viewport} from "../../style/variables";


class Cell extends React.Component {
    render() {
        return (
            <Wrapper {...this.props}>
                {this.props.children}
            </Wrapper>
        )
    }

}


const Wrapper = styled.div`
     width: ${props => props.min};
     padding: ${props => props.gutter ? props.gutter : Gutter.sm};
     @media screen and (min-width: ${Viewport.xs}) {
         ${props => props.xs && {flex: `0 0 ${props.xs}%`, maxWidth: `${props.xs}%`}}; 
     }
     @media screen and (min-width: ${Viewport.sm}) {
        ${props => props.sm && {flex: `0 0 ${props.sm}%`, maxWidth: `${props.sm}%`}};
     }
     @media screen and (min-width: ${Viewport.md}) {
        ${props => props.md && {flex: `0 0 ${props.md}%`, maxWidth: `${props.md}%`}};
     }
     @media screen and (min-width: ${Viewport.lg}) {
        ${props => props.lg && {flex: `0 0 ${props.lg}%`, maxWidth: `${props.lg}%`}};
     }
`;

export {Cell}