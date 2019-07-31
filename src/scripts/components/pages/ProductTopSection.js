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
import {header_height} from "../style/variables";

class ProductTopSection extends React.Component {
    render() {
        const {background_image, image_size, colors, title, description, price} = this.props;
        console.log(image_size);

        const isImageCover = image_size === 'Full Screen';
        const isImageHalf = image_size === 'Half Screen';
        return (
            <Container fluid
                       className={'product-top-section-wrapper'}
                       style={{
                           backgroundColor: colors.background,
                           backgroundImage: isImageCover && `url(${background_image})`,
                           backgroundRepeat: 'no-repeat',
                           backgroundSize: 'cover',
                           backgroundOrigin: 'right center',
                           position: 'relative'
                       }}>
                <Element position={'absolute'} top={0} left={0} width={'100%'} height={'100%'} background={'rgba(0,0,0,0.3)'}/>
                <Row className={'align-items-center mr-0'} style={{height: '100%'}}>

                    <Col sm={6} className={'product-top-section-container'} style={{
                        backgroundColor: `url(${colors.background})`,
                    }}>
                        <Element
                            maxWidth={'60rem'}
                                 style={{...center, paddingLeft: Gutter.lg, color: '#ffffff'}}
                                 className={'product-top-section-center pr-5 pt-3 pt-sm-0'}>
                            <h1 dangerouslySetInnerHTML={{__html: title}}
                                className={'product-top-section-title mb-3 mb-md-5 text-center text-sm-left'}
                            style={{color: colors.titles_color ? colors.titles_color : '#fff'}}/>

                            <h2 dangerouslySetInnerHTML={{__html: description}}
                                className={'text-center text-sm-left'}
                                style={{color: colors.titles_color ? colors.titles_color : '#fff', fontSize: '2.2rem', marginBottom: Gutter.lg}}/>

                            <BuyButton price={price}
                                       background={colors.button_bg}
                                       color={colors.button_txt}
                                       showMessage={true}
                                       width={'auto'}
                                       padding={'.5rem 2rem'}
                                       className={'text-center text-md-left px-5'}/>

                        </Element>
                    </Col>
                    {isImageHalf &&
                    <Col sm={6} style={{height: '100%'}} className={'px-0'}>
                        <BackgroundImage width={'100%'}

                                         url={background_image}
                                         size={'cover'}
                                         height={'100%'}
                                         overflow={'hidden'}
                        />

                    </Col>
                    }
                </Row>
            </Container>
        )
    }
}

export default ProductTopSection;

const center = {};