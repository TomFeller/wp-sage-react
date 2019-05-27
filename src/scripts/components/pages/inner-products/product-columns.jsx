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
                <Element paddingBottom={Gutter.lg} className={'px-md-5'}>
                    <ProductMobileSlider items={sections.map((item, i) => {
                        return ({
                            src: item.image,
                            header: item.title,
                            altText: item.description,
                            caption: item.price,
                            buyButton: true
                        })
                    })}/>

                    <Row className={'py-5 flex-md-nowrap productWrapperDesktopFlex'}>
                        {sections.map((section, i) => {
                            const {title, description, image, price} = section;
                            return (
                                <ProductCol key={i} className={'mb-5 px-0 product-col'}>
                                    <div className={'product-col-image-wrapper'} style={{backgroundImage: `url(${image})`}}>
                                    <Image src={image} opacity={0}/>
                                    </div>
                                    <Element padding={Gutter.sm} className={'py-5'} background={'#fff'}>
                                        <h2 dangerouslySetInnerHTML={{__html: title}}/>
                                        {description && description !== '' &&
                                        <h4 dangerouslySetInnerHTML={{__html: description}}/>}

                                        <BuyButton price={'12'} background={'#cecece'}/>
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