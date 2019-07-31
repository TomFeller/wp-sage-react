import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {HBox, VBox, Element} from 'react-stylesheet';
import IoIosCartOutline from 'react-icons/lib/io/ios-cart-outline';

import '../style/css/site-header.css';

// import DataStore from '../flux/stores/DataStore.js'
import {Colors, Container, FontSize, Gutter, Zindex} from '../style/style';
import {header_height, Viewport} from "../style/variables";
import SiteLogo from "./utils/SiteLogo";
import SiteNavigation from "./SiteNavigation";


import {MobileOnly} from '../style/responsive';


class Header extends React.Component {
    render() {
        return (
            <header id="site-header" className="site-header">
                <Element width={'100%'} className={'pt-3 py-sm-0'}>
                    <div className={'d-sm-none'}>
                        <a href={'/#'}>
                            <HBox width={'100%'}
                                  justifyContent={'center'}
                                  alignItems={'center'}
                                  background={'#fff'}>
                                <SiteLogo/>
                            </HBox>
                        </a>
                    </div>

                    <SiteNavigation/>
                </Element>
                {/*{allPages.map((page) => {*/}
                {/*if(page.slug != 'home'){*/}
                {/*return(*/}
                {/*<Link */}
                {/*key={page.id} */}
                {/*to={`/${page.slug}`}*/}
                {/*style={{marginRight: '10px'}}*/}
                {/*>*/}
                {/*{page.title.rendered}*/}
                {/*</Link>*/}
                {/*)                     */}
                {/*}*/}
                {/*})}*/}

            </header>
        );
    }
}

export default Header;

const SiteHeader = styled.header`
     position: fixed;
    top: 0;
    left: 0;
    background-color: #fff; //Colors.main;
    width: 100%;
    z-index: ${Zindex.modal};
    display: flex;
    align-items: center;
    @media screen and (min-width: ${Viewport.sm}) {
       
        height: ${header_height}; 
        padding: ${Gutter.sm} 0;
    }
    .scroll & {
        // position: fixed;
        top: 0;
        box-shadow: 0 0 1px 0px rgba(0,0,0,0.5);
`;

const MenuIcon = styled.div`
    width: 4rem;
    height: 4rem;
    border: .2rem solid #000;
    border-radius: 50%;
    padding: 1.1rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    cursor: pointer;
    transform-origin: center center;
    transition: transform .3s;
    .line { 
        width: .3rem;
        height: 100%;
        background-color: #000;
        position: relative;
        margin: 0 .2rem;
    }
    &:hover {
        transform: scale(.9) rotate(180deg);
    }`
    ,

    DotsLogo = styled.div`
        display: flex; 
        .dot {
            width: .8rem;
            height: .8rem;
            background-color: #000;
            border-radius: 50%;
            margin: .3rem;
        }
    `;