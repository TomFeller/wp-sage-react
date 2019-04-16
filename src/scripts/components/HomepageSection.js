import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {HBox, Element} from 'react-stylesheet';
import {FontSize, Gutter} from "../style/variables";
import {Container, Row, Col} from 'reactstrap';
import Image from "./utils/image/image";
import Button from "./utils/button/button";

class HomepageSection extends React.Component {
    render() {
        const {title, description, image, image_side, cta_button_text} = this.props.data;

        return (
            <HBox style={wrapper} className={'scroll-element'} id={this.props.id && this.props.id}>
                <Row className={`flex-row${image_side === 'Left' && '-reverse'} m-0`} style={{width: '100%'}}>
                    <Col md={6}
                         className={'text-center text-md-left d-flex justify-content-center align-items-center'}
                         style={{background: '#fff', flexDirection: 'column'}}>


                        <Words>
                            {title.split('-').map((word, w) => {
                                return (
                                    <p key={w}
                                       dangerouslySetInnerHTML={{__html: word}}
                                       className={'text-center'}
                                       style={{fontSize: FontSize.lg}}/>
                                )
                            })}
                        </Words>

                        <Button marginBottom={Gutter.md}
                                background={'rgba(0, 0, 0, 0.3)'}
                                color={'primary'}
                                special
                                className={'text-center text-md-left'}>
                            <Link to={this.props.href} style={{color: '#151515', fontWeight: 'bold'}}>
                                {cta_button_text}
                            </Link>
                        </Button>
                    </Col>

                    <Col md={6}
                         className={'d-flex justify-content-center align-items-center'}
                         style={{background: this.props.background}}>
                        <Image src={image.url} width={'400px'}/>
                    </Col>
                </Row>
            </HBox>
        )
    }

    static defaultProps = {
        background: '#fff'
    }
}

export default HomepageSection;

const wrapper = {
    minHeight: '110vh',
    borderBottom: '1x #333',
};

const Words = styled.div`
    p {
        color: #bbbbbb;
    
        b {color: #151515}
        strong {color: #151515}
    }
`;