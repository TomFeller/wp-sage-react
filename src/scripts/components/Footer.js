import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {HBox, VBox, Element} from 'react-stylesheet';

// import DataStore from '../flux/stores/DataStore.js'
import {Container} from 'reactstrap';
import {FontSize, Gutter, Zindex} from '../style/style';
import ShareIcons from "./utils/ShareIcons";
import OurPartners from "./utils/OurPartners";
import {Colors} from "../style/variables";
import SiteLogo from "./utils/SiteLogo";

class Footer extends React.Component {
    render() {
        return (
            <footer id="site-footer" className="site-footer" style={siteFooter}>
                <Container fluid>
                    <HBox justifyContent={'space-between'}
                          alignItems={'center'}
                          flexWrap={'wrap'}
                          className={'d-block'}>

                        {/*<OurPartners/>*/}
                        <Link to={'/'}>
                        <SiteLogo/>
                        </Link>
                        <Element className={'mt-4'}>
                            <ShareIcons size={18} color={'#000'}/>
                            <Link to={'/'} style={{width: '100%', display: 'block', color: '#000', fontSize: FontSize.xs,}}
                                  className={'my-4 text-center'}>terms & conditions</Link>
                        </Element>


                        <p className={'text-center'}>© 2019 oleo vape™ LLC. All rights reserved.</p>
                    </HBox>
                </Container>


            </footer>
        );
    }
}

export default Footer;

const siteFooter = {
    backgroundColor: '#fff',
    borderTop: '.1rem solid #999',
    padding: `${Gutter.sm} 0`,
    zIndex: Zindex.modal
};
const DotsLogo = styled.div`
    display: flex;
    .dot {
        width: 1.2rem;
        height: 1.2rem;
        background-color: #000;
        border-radius: 50%;
        margin: .3rem;
    }
    `;