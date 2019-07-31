import React from 'react';
import {Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import {HBox, Element} from 'react-stylesheet';
import FaCodepen from 'react-icons/lib/fa/codepen';
import FaPhone from 'react-icons/lib/fa/phone';
import FaGroup from 'react-icons/lib/fa/group';
import FaShoppingBasket from 'react-icons/lib/fa/shopping-basket';
import FaMapSigns from 'react-icons/lib/fa/map-signs';
import GoDash from 'react-icons/lib/go/dash';
import {Gutter} from "../style/variables";
import Circle from "./utils/shapes/circle";
import styled from 'styled-components';
import SiteLogo from "./utils/SiteLogo";
import {MobileHidden} from '../style/responsive'
import Tooltip from "./utils/Tooltip";
import '../style/css/site-navigation.css';
import Button from "./utils/button/button";
import IconSwitcher from "./utils/icon-switcher/IconSwitcher";


class SiteNavigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTooltip = this.toggleTooltip.bind(this);
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.state = {
            tooltipOpen: false,
            mobileMenuOpen: false
        };
    }

    toggleMobileMenu() {
        this.setState({
            mobileMenuOpen: !this.state.mobileMenuOpen
        })
    }

    toggleTooltip(e) {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        const navItems = [
            {
                id: 0,
                icon: 'http://oleo-admin.tf-interactive.com/wp-content/uploads/2019/06/Oleo_icons-01.png',
                title: 'welcome kit',
                href: '/its-all-about-you'
            }, {
                id: 1,
                icon: 'http://oleo-admin.tf-interactive.com/wp-content/uploads/2019/06/Oleo_icons-02.png',
                href: '/dress-up-your-device',
                title: 'skinniz',
            }, {
                id: 2,
                // icon: 'https://admin.youdoadventures.com/wp-content/uploads/2019/06/icons-05.png',
                icon_1: 'http://oleo-admin.tf-interactive.com/wp-content/uploads/2019/06/Oleo_icons-03.png',
                icon_2: 'http://oleo-admin.tf-interactive.com/wp-content/uploads/2019/06/Oleo_icons-04.png',
                icon_3: 'http://oleo-admin.tf-interactive.com/wp-content/uploads/2019/06/Oleo_icons-05.png',
                href: '/put-your-skinniz-on',
                title: 'accessories'
            }, {
                id: 3,
                icon: 'http://oleo-admin.tf-interactive.com/wp-content/uploads/2019/06/Oleo_icons-06.png',
                href: '/#our-story',
                title: 'our story'
            }, {
                id: 4,
                icon: 'http://oleo-admin.tf-interactive.com/wp-content/uploads/2019/06/Oleo_icons-08.png',
                href: '/#blinkiz',
                title: 'blinkiz'
            }, {
                id: 5,
                icon: 'http://oleo-admin.tf-interactive.com/wp-content/uploads/2019/06/Oleo_icons-07.png',
                href: '/#contact-us',
                title: 'contact'
            }
        ];
        const {tooltipOpen, mobileMenuOpen} = this.state;

        return (
            <div style={{marginTop: '.9rem'}}>
                <NavigationWrapper className={`navigation-wrapper ${mobileMenuOpen ? 'open' : ''}`}>
                    <Container>
                        <HBox justifyContent={'space-around'} overflow={'visible'} alignItems={'center'}
                              className={'nav-slider'}>
                            {navItems.map((item, i) => {
                                return (
                                    <div key={i}
                                         style={{order: i, zIndex: 100 - i}} className={'flip-icon text-center'}>

                                        {item.icon ?
                                            <a href={item.href ? `${item.href}` : 'javascript:void(0)'}
                                               onMouseOver={this.toggleTooltip} className={'text-center'}
                                               id={`tooltip-${i}`}>
                                                <Circle size={50}
                                                    // border={'1px solid #000'}
                                                    // padding={Gutter.sm}
                                                        margin={'0 auto'}
                                                        background={'transparent'} //fef5f0
                                                        pointer>
                                                    <img src={item.icon} width={30}/>
                                                </Circle>
                                            </a>
                                            :
                                            <IconSwitcher item={item}
                                                          icon_1={item.icon_1}
                                                          icon_2={item.icon_2}
                                                          icon_3={item.icon_3}
                                                          i={i}
                                                          toggleTooltip={this.toggleTooltip}/>
                                        }
                                        <Tooltip direction={'right'}
                                            // className={'mobile-hidden'}
                                                 toggle={this.toggleTooltip}>
                                            {item.title}
                                        </Tooltip>
                                    </div>
                                )
                            })}
                            <MobileHidden style={{order: 2, flex: '16.6667% 0 0'}} className={'mobile-hidden'}>
                                <div>
                                    <a href={'/#'} style={{order: 2, padding: '0 10px'}}>
                                        <SiteLogo width={'120px'}/>
                                    </a>
                                </div>
                            </MobileHidden>

                        </HBox>
                    </Container>

                </NavigationWrapper>
                <button onClick={this.toggleMobileMenu}
                        className={'d-sm-none mobile-only show-mobile-menu-button'}>
                    <GoDash size={24} color={'#999'}/>
                </button>
            </div>
        )
    }
}

export default SiteNavigation;
//
// const FlipIcon = styled.div`
//     padding: 0 ${Gutter.sm} 0;
//     max-width: 16.6667%;
//     transition: transform .2s;
//     position: relative;
//
//     .tool-tip {
//         visibility: hidden;
//     }
//     a:hover {
//         transform: scale(.9);
//         .circle {
//             background-color: #fff !important;
//         }
//         & + .tool-tip {
//             opacity: 1;
//             visibility: visible;
//         }
//     }
//     p {
//         white-space: nowrap;
//     }
//
// `;

const NavigationWrapper = styled.div`
    width: 100%; 
    z-index: 1;
    background: #ffffff;
    overflow: visible;
    a:focus {
        background: #fff;
    }
    .scroll & {
    //     position: fixed;
    //     top: 0; 
    }
`;