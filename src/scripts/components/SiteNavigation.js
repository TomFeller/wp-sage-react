import React from 'react';
import {Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import {HBox, Element} from 'react-stylesheet';
import FaCodepen from 'react-icons/lib/fa/codepen';
import FaPhone from 'react-icons/lib/fa/phone';
import FaGroup from 'react-icons/lib/fa/group';
import FaShoppingBasket from 'react-icons/lib/fa/shopping-basket';
import FaMapSigns from 'react-icons/lib/fa/map-signs';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import {Gutter} from "../style/variables";
import Circle from "./utils/shapes/circle";
import styled from 'styled-components';
import SiteLogo from "./utils/SiteLogo";
import {MobileHidden} from '../style/responsive'
import Tooltip from "./utils/Tooltip";
import '../style/css/site-navigation.css';
import Button from "./utils/button/button";


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
                icon: FaCodepen,
                title: 'oleovape',
                href: '/dress-up-your-device'
            }, {
                id: 1,
                icon: FaGroup,
                href: '/#our-story',
                title: 'our story'
            }, {
                id: 2,
                icon: FaMapSigns,
                href: '/#our-team',
                title: 'team'
            }, {
                id: 3,
                icon: FaShoppingBasket,
                href: '/its-all-about-you',
                title: 'accessories'
            }, {
                id: 4,
                icon: FaMapSigns,
                href: '/#inspiration',
                title: 'inspiration'
            }, {
                id: 5,
                icon: FaPhone,
                href: '/#contact-us',
                title: 'contact'
            }
        ];
        const {tooltipOpen, mobileMenuOpen} = this.state;

        return (
            <div>
            <NavigationWrapper className={`navigation-wrapper ${mobileMenuOpen ? 'open' : ''}`}>
                <Container>
                    <HBox justifyContent={'space-around'} overflow={'visible'} alignItems={'center'}
                          className={'nav-slider'}>
                        {navItems.map((item, i) => {
                            return (
                                <div key={i}
                                     style={{order: i, zIndex: 100 - i}} className={'flip-icon'}>
                                    <a href={item.href ? `${item.href}` : 'javascript:void(0)'}
                                       onMouseOver={this.toggleTooltip} id={`tooltip-${i}`}>
                                        <Circle size={40}
                                            // border={'1px solid #000'}
                                            // padding={Gutter.sm}
                                                margin={'0 auto'}
                                                background={'transparent'}
                                                pointer>
                                            <item.icon size={20} color={'#000'}/>
                                        </Circle>
                                    </a>

                                    <Tooltip direction={'right'}
                                        // className={'mobile-hidden'}
                                             toggle={this.toggleTooltip}>
                                        {item.title}
                                    </Tooltip>
                                </div>
                            )
                        })}
                        <MobileHidden style={{order: 2}} className={'mobile-hidden'}>
                            <Link to={'/'} style={{order: 2, padding: '0 10px'}}>
                                <SiteLogo width={'120px'}/>
                            </Link>
                        </MobileHidden>

                    </HBox>
                </Container>

            </NavigationWrapper>
            <button onClick={this.toggleMobileMenu} className={'d-sm-none mobile-only show-mobile-menu-button'}>
            <FaAngleDown size={30}/>
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