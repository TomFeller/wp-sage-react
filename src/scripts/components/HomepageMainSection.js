import React from 'react';
import {Link} from 'react-router-dom';
import {Element, HBox} from 'react-stylesheet';
import {FontSize, Gutter} from "../style/variables";
import {Container, Row, Col} from 'reactstrap';
import Image from "./utils/image/image";
import Button from "./utils/button/button";

class HomepageMainSection extends React.Component {
    render() {
        return (
            <HBox alignItems={'center'}
                  className={'scroll-element-active'}
                  style={{
                      ...wrapper,
                      backgroundImage: `url('http://oleo-admin.tf-interactive.com/wp-content/uploads/2019/03/glitter-lights.png')`,
                      backgroundSize: 'cover',
                      backgroundAttachment: 'fixed'
                  }}>
                <Container>
                    <Element className={'text-center text-md-left px-sm-5'}>
                        <h2 dangerouslySetInnerHTML={{__html: 'DRESS UP <br/> YOUR DEVICE'}}
                            className={'text-center text-md-left'}
                            style={{fontSize: FontSize.lg, whiteSpace: 'nowrap', color: '#fff'}}/>
                        <p dangerouslySetInnerHTML={{__html: 'open & close system vaporizer for cannabis oils.'}}
                           style={{fontSize: FontSize.md, color: '#fff'}}/>

                        <Button marginBottom={Gutter.md}
                                background={'rgba(255, 255, 255, 0.6)'}
                                color={'primary'}
                                className={'text-center text-md-left px-5'}>
                            <Link to={this.props.href} style={{color: '#151515', fontWeight: 'bold'}}>
                                more outfits
                            </Link>
                        </Button>
                    </Element>

                    {/*<Col md={6}>*/}
                    {/*<Image src={image.url} width={'100%'}/>*/}
                    {/*</Col>*/}
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