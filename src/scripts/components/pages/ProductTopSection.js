import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Element, HBox, VBox} from 'react-stylesheet';
import {PageWrapper} from "../../style/layout";
import {FontFamily, FontSize, Viewport} from "../../style/style";
import {Gutter} from "../../style/variables";
import Image from "../utils/image/image";
import styled from "styled-components";
import Button from "../utils/button/button";
import BuyButton from "../utils/button/buy-button";
import {MobileOnly} from "../../style/responsive";
import '../../style/css/product.css';
import BackgroundImage from "../utils/image/background-image";

class ProductTopSection extends React.Component {
    render() {
        const {background_image, colors, title, description, price} = this.props;
        console.log(colors)
        return (
            <Container fluid className={'product-top-section-wrapper'
            } style={{backgroundColor: colors.background,}}>
                <Container className={'product-top-section-container'} style={{
                    backgroundImage: `url(${background_image})`,
                    backgroundColor: `url(${colors.background})`,
                }}>
                    <Element maxWidth={'60rem'}
                             style={{...center, paddingLeft: Gutter.lg, color: '#ffffff'}}
                             className={'product-top-section-center pr-5 pt-3 pt-sm-0'}>
                        <h1 dangerouslySetInnerHTML={{__html: title}}
                            className={'product-top-section-title mb-3 mb-md-5 text-center text-sm-right'}/>

                        <BackgroundImage width={'100%'} className={'d-sm-none'}
                                         url={background_image}
                                         size={'contain'}
                                         height={'50vh'} overflow={'hidden'}/>

                        <h2 dangerouslySetInnerHTML={{__html: description}}
                            style={{color: '#fff', fontSize: '2.2rem', marginBottom: Gutter.lg}}/>


                        <BuyButton price={59} background={colors.button_bg} color={colors.button_txt}/>

                    </Element>
                </Container>
            </Container>
        )
    }
}

export default ProductTopSection;

const center = {

};