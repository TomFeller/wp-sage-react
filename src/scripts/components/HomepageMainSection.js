import React from 'react';
import {Link} from 'react-router-dom';
import {Element, HBox} from 'react-stylesheet';
import {FontSize, Gutter} from "../style/variables";
import {Container, Row, Col} from 'reactstrap';
import Image from "./utils/image/image";
import Button from "./utils/button/button";
import {MobileHidden, MobileOnly} from '../style/responsive';

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
                      backgroundColor: '#f5f5f5'
                  }}>
                <Container>
                    <Row className={'align-items-center flex-column-reverse flex-md-row'}>

                        <Col xs={12} md={6}>
                            <Element className={'text-center text-md-left px-sm-5'}>
                                <h2 dangerouslySetInnerHTML={{__html: 'DRESS UP YOUR DEVICE'}}
                                    className={'text-center text-md-left'}
                                    style={{fontSize: FontSize.lg, color: '#000000'}}/>
                                <p dangerouslySetInnerHTML={{__html: 'open & close system vaporizer for cannabis oils.'}}
                                   style={{fontSize: FontSize.md, color: '#000000'}}/>

                                <Button marginBottom={Gutter.md}
                                        background={'rgba(255, 255, 255, 0.6)'}
                                        color={'primary'}
                                        className={'text-center text-md-left px-5'}>
                                    <Link to={this.props.href} style={{color: '#151515', fontWeight: 'bold'}}>
                                        more outfits
                                    </Link>
                                </Button>
                            </Element>
                        </Col>
                        <Col xs={12} md={6}>
                            <Image src={this.props.product_image} width={'100%'}/>
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
    minHeight: '100vh',
    borderBottom: '1x #333',
    padding: '50px 0'
};