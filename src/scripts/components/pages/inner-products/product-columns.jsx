import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Element, VBox, HBox} from 'react-stylesheet';
import {Gutter} from "../../../style/variables";
import ProductMobileSlider from "../ProductMobileSlider";
import BuyButton from "../../utils/button/buy-button";
import Image from "../../utils/image/image";
import {Viewport} from "../../../style/style";
import styled from "styled-components";

class ProductColumns extends React.Component {
    render() {
        const {sections} = this.props;
        return (
            <Container fluid>
                <Element className={'px-md-5 mb-5'}>
                    <ProductMobileSlider hideArrows items={sections.map((item, i) => {
                        return ({
                            src: item.image,
                            header: item.title,
                            altText: item.description,
                            caption: item.price,
                            buttonBgColor: item.button_background_color,
                            buttonColor: item.button_text_color,
                            buyButton: true
                        })
                    })}/>

                    <Row className={'pt-5 pt-sm-0 pb-0 flex-md-nowrap productWrapperDesktopFlex'}>
                        {sections.map((section, i) => {
                            const {title, description, image, price, button_background_color, button_text_color} = section;
                            return (
                                <ProductCol key={i} className={'mb-5 mb-md-0 px-0 product-col'}>
                                    <div className={'product-col-image-wrapper'}
                                         style={{backgroundImage: `url(${image})`}}>
                                        <Image src={image} opacity={0}/>
                                    </div>
                                    <Element padding={Gutter.sm} className={'py-5'} background={'#fff'}>
                                        <h2 className={'text-center'} dangerouslySetInnerHTML={{__html: title}}/>
                                        {description && description !== '' &&
                                        <h4 className={'text-center'} dangerouslySetInnerHTML={{__html: description}}/>}

                                        <BuyButton price={price}
                                                   background={button_background_color}
                                                   showMessage={true}
                                                   color={button_text_color}/>
                                    </Element>

                                </ProductCol>
                            )
                        })}
                    </Row>
                </Element>
            </Container>
        )
    }
}

export default ProductColumns;


const ProductCol = styled.div`
      width: 100%;
       
      &:last-child {
        border-right: 0;
      }
      @media screen and (min-width: ${Viewport.sm}) {
        width: 50%;  
      }show-mobile-menu-button
      @media screen and (min-width: ${Viewport.md}) {
        width: 20%;  
      }
`;