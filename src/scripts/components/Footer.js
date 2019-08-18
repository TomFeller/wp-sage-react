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
                        <a href={'/#'}>
                            <SiteLogo/>
                        </a>
                        <Element className={'mt-4'}>
                            {/*<ShareIcons size={18} color={'#000'}/>*/}
                            <p style={{fontWeight: 'bold', textAlign:'center'}}>Designed and developed by Oléo Vape™ in Tel-Aviv</p>
                            <VBox justifyContent={'center'} alignItems={'center'}>
                                <p className={'mb-0'} style={{fontSize: '1rem'}}>Design - (Patent Pending 63868)
                                </p>
                                {/*<a href={'/'}*/}
                                      {/*style={{color: '#000', fontSize: '1rem'}}*/}
                                      {/*className={'px-3 my-4 text-center'}>terms & conditions</a>*/}
                                <p className={'mb-0'} style={{fontSize: '1rem'}}>Filling method – (Patent Pending USPTO 62/844,204)
                                </p>
                            </VBox>
                        </Element>

                        <HBox justifyContent={'center'} alignItems={'center'}>

                            <p className={'mb-0 text-center'} style={{fontSize: FontSize.xxs}}>© 2019  Oléo Vape™ All rights reserved.</p>
                        </HBox>
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