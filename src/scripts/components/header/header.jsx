import React from 'react';
import {Container} from 'reactstrap';
import Navigation from "../navbar/navigation";
import {FontSize, Gutter, Zindex} from "../style/style";
import styled from 'styled-components';
import DataActions from "../../flux/actions/DataActions";

class Header extends React.Component {

    render() {
        const {color, fixed} = this.props;



        return (
            <SiteHeader id={'site-header'}
                    className={`site-header ${fixed && 'position-fixed'}
                    ${color && `bg-${color}`}`}>

                <Container>
                    <Navigation expand={'md'}
                                color={color && color}
                                itemColor={'#fff'}/>
                </Container>

            </SiteHeader>
        )
    }
    static defaultProps = {
        fixed: ''
    }
}

export default Header;

const SiteHeader = styled.header`
    width: 100%;
    top: 0;
    z-index: ${Zindex.lg} 
`;