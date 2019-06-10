import React from 'react';
import {Link} from 'react-router-dom';
import {Element, VBox, HBox} from 'react-stylesheet';
import {FontSize, Gutter} from "../style/variables";
import {Container, Row, Col} from 'reactstrap';
import Image from "./utils/image/image";
import Button from "./utils/button/button";
import {MobileHidden, MobileOnly} from '../style/responsive';
import BuyButton from "./utils/button/buy-button";

class HomepageMainSection extends React.Component {
    render() {
        return (
            <HBox alignItems={'center'}
                  className={'scroll-element-active'}
                  style={{
                      ...wrapper,
                      // backgroundImage: `url(${this.props.product_image})`,
                      backgroundSize: '50%',
                      backgroundRepeat: 'no-repeat',
                      backgroundAttachment: 'fixed',
                      backgroundPosition: '100% 70%',
                      backgroundColor: this.props.background
                  }}>
                <Container>
                    <Row className={'align-items-center flex-column-reverse flex-md-row'}>

                        <Col>
                            <VBox alignItems={'start'} className={'text-center text-md-left px-sm-5'}
                                  maxWidth={'47rem'}>
                                <Element marginBottom={'10rem'}>
                                    <h2 dangerouslySetInnerHTML={{__html: this.props.title ? this.props.title : 'DRESS UP YOUR DEVICE'}}
                                        className={'text-center text-md-left'}
                                        style={{fontSize: FontSize.lg, color: '#000000'}}/>
                                    <p dangerouslySetInnerHTML={{__html: this.props.description}}
                                       style={{fontSize: FontSize.md, margin: `${Gutter.sm} 0`, color: '#000000'}}/>
                                </Element>

                                <Link to={this.props.href} style={{color: '#151515', fontWeight: 'bold'}}>
                                    <BuyButton marginBottom={Gutter.md}
                                               padding={'2rem 2rem'}
                                               background={'#f2f2f2'}
                                               color={'primary'}
                                               className={'text-center text-md-left px-5'}
                                               block
                                               hidePrice
                                               cta={'more outfits'}>

                                        more outfits

                                    </BuyButton>
                                </Link>

                            </VBox>
                        </Col>
                        <Col>
                            <Image src={this.props.product_image} width={'90%'}/>
                        </Col>
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
    minHeight: '92vh',
    borderBottom: '1x #333',
    padding: '50px 0'
};