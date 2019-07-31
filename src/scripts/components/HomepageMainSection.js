import React from 'react';
import {Link} from 'react-router-dom';
import {Element, VBox, HBox} from 'react-stylesheet';
import {FontSize, Gutter} from "../style/variables";
import {Container, Row, Col} from 'reactstrap';
import Image from "./utils/image/image";
import Button from "./utils/button/button";
import {MobileHidden, MobileOnly} from '../style/responsive';
import BuyButton from "./utils/button/buy-button";
import BackgroundImage from "./utils/image/background-image";
import Text from "./utils/text/text";

class HomepageMainSection extends React.Component {
    render() {
        const {image_size, product_image} = this.props;

        const isImageCover = image_size === 'Full Screen';
        const isImageHalf = image_size === 'Half Screen';


        return (
            <HBox alignItems={'center'}
                  className={'scroll-element-active'}
                  style={{
                      ...wrapper,
                      backgroundImage: isImageCover && `url(${product_image})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      // backgroundAttachment: 'fixed',
                      backgroundPosition: 'center center',
                      backgroundColor: this.props.background
                  }}>
                <Container className={'product-top-section-wrapper'} fluid={isImageCover || isImageHalf}>
                    <Row className={'align-items-center flex-column-reverse flex-md-row'} style={{height: '100%'}}>
                        <Col sm={6} className={'d-flex pl-sm-5 pr-0 justify-content-center'}>
                            <VBox alignItems={'start'} className={'text-center text-md-left px-sm-5'}
                                  width={'60rem'}
                                  maxWidth={'100%'}>
                                <Element className={'product-top-section-titles'}>
                                    <h2 dangerouslySetInnerHTML={{__html: this.props.title ? this.props.title : 'DRESS UP YOUR DEVICE'}}
                                        className={'text-center text-md-left main-title'}/>
                                    <p dangerouslySetInnerHTML={{__html: this.props.description}}
                                       style={{fontSize: FontSize.md, margin: `${Gutter.sm} 0`, color: '#000000'}}/>
                                </Element>

                                <Link to={this.props.href}
                                      style={{color: '#151515', fontWeight: 'bold', textAlign: 'center'}}>
                                    <BuyButton marginBottom={Gutter.md}
                                               padding={'.5rem 2rem'}
                                               background={this.props.btn_background}
                                               color={this.props.btn_color}
                                               // margin={'0 5rem 0 0'}
                                               className={'text-center text-md-left px-5 mr-auto ml-auto ml-sm-0 mr-md-4'}
                                        // block
                                        // maxWidth={'auto'}
                                               width={'auto'}
                                               hidePrice
                                               cta={'more outfits'}>

                                        {this.props.btn_label}

                                    </BuyButton>
                                </Link>

                            </VBox>
                        </Col>
                        {isImageHalf &&
                        <Col sm={6} style={{height: '100%'}} className={'px-0'}>
                            <BackgroundImage width={'100%'}
                                             url={product_image}
                                             size={'cover'}
                                             height={'100%'}
                                             overflow={'hidden'}
                            />
                        </Col>
                        }

                        {!isImageCover && !isImageHalf &&
                        <Col className={'text-center text-sm-right pr-sm-5 pl-0'}>
                            <Image src={this.props.product_image} width={'70%'}/>
                        </Col>
                        }
                    </Row>
                </Container>
            </HBox>
        )
    }

    static defaultProps = {
        background: '#fff'
    }
}

export default HomepageMainSection;

const wrapper = {
    height: '92vh',
    borderBottom: '1x #333',
    padding: '0 0 5rem'
};