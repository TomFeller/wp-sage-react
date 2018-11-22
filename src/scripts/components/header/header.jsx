import React from 'react';
import {Container} from 'reactstrap';
import Navigation from "../navbar/navigation";
import {FontSize, Gutter, Zindex} from "../style/style";
import styled from 'styled-components';
import DataActions from "../../flux/actions/DataActions";
import {FaYoutube, FaFacebook} from 'react-icons/fa';
import {HBox, VBox, Element,} from 'react-stylesheet';


class Header extends React.Component {

    render() {
        const {color, fixed} = this.props;


        return (
            <SiteHeader id={'site-header'}
                        className={`site-header ${fixed && 'position-fixed'}
                    ${color && `bg-${color}`}`}>

                <div style={{backgroundColor: '#404040'}}>
                    <Container>
                        <HBox justifyContent={'flex-end'} className={'top-header'}>
                            <HBox alignItems={'center'}>
                                <a href={'tel:052-2263761'} style={{color: '#f4f4f4'}}>052-2263761</a>
                            </HBox>
                            <HBox borderRight={'.1rem solid #f4f4f4'}
                                  paddingRight={Gutter.xs}
                                  marginRight={Gutter.xs}>
                                <Element padding={'.5rem'}>
                                    <FaFacebook color={'#f4f4f4'} size={20}/>
                                </Element>
                                <Element padding={'.5rem'}>
                                    <FaYoutube color={'#f4f4f4'} size={20}/>
                                </Element>
                            </HBox>
                        </HBox>
                    </Container>
                </div>

                <Container>
                    <Navigation expand={'md'}
                                color={color && color}
                                itemColor={'#000'}/>
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