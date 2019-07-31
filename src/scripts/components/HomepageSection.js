import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {HBox, Element} from 'react-stylesheet';
import {FontSize, Gutter} from "../style/variables";
import {Container, Row, Col} from 'reactstrap';
import Image from "./utils/image/image";
import Button from "./utils/button/button";
import '../style/css/homepage-section.css';
import BuyButton from "./utils/button/buy-button";

class HomepageSection extends React.Component {
    render() {
        const {title, description, video, image, image_side, cta_button_text,} = this.props.data;

        console.log('video',video)
        return (
            <HBox style={wrapper}
                  className={'homepage-section-wrapper scroll-element'} id={this.props.id && this.props.id}>
                <Row className={`flex-row${image_side === 'Left' && '-reverse'} m-0`} style={{width: '100%'}}>
                    <Col xs={6} md={6}
                         className={'text-left text-md-center d-flex justify-content-center align-items-md-center'}
                         style={{background: '#fff', flexDirection: 'column'}}>
                        <Words className={'words'}>
                            {title.split('-').map((word, w) => {
                                return (
                                    <p key={w}
                                       dangerouslySetInnerHTML={{__html: word}}
                                    />
                                )
                            })}
                        </Words>

                        <Link to={this.props.href} style={{color: '#151515', fontWeight: 'bold', textAlign: 'center'}}>
                        <BuyButton marginBottom={Gutter.md}
                                   background={'#fde7e2'}
                                   color={'#000000'}
                            // special
                            cta={cta_button_text}
                                   hidePrice
                                   padding={'.5rem 2rem'}
                                   width={'auto'}
                                   className={'text-center text-md-left'}>

                                {cta_button_text}

                        </BuyButton>
                        </Link>
                    </Col>

                    <Col xs={6} md={6}
                         className={'d-flex justify-content-center align-items-center'}
                         style={{
                             overflow: 'hidden',
                             backgroundImage: `url(${image.url})`,
                             backgroundSize: 'cover',
                             backgroundPosition: 'center center'
                         }}>
                        {video.url &&
                        <video id={'homepage-video'}
                               autoPlay
                               muted
                               loop
                               style={{
                                   // opacity: '.6',
                                   position: 'absolute',
                                   left: '50%', top: '50%',
                                   transform: 'translate(-50%, -50%)'
                               }}>
                            <source
                                src={video.url}
                                type="video/mp4"/>
                        </video>
                        }
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
    borderBottom: '1x #333',
};

const Words = styled.div`
    margin-bottom: 3rem;
    p {
        color: #bbbbbb;
        font-size: 3.3rem;
        b {color: #151515}
        strong {color: #151515}
    }
`;