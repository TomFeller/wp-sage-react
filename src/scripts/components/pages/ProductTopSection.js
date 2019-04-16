import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Element, HBox, VBox} from 'react-stylesheet';
import {PageWrapper} from "../../style/layout";
import {FontFamily, FontSize, Viewport} from "../../style/style";
import {Gutter} from "../../style/variables";
import Image from "../utils/image/image";
import styled from "styled-components";
import Button from "../utils/button/button";

class ProductTopSection extends React.Component {
    render() {
        const {background_image, colors, title, description, price} = this.props;
        console.log(colors)
        return (
            <Container fluid style={{backgroundColor: colors.background, height: '100vh'}}>
                <Container style={{
                    maxWidth: '140rem',
                    height: '100%',
                    backgroundImage: `url(${background_image})`,
                    backgroundColor: `url(${colors.background})`,
                    backgroundSize: '25%',
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <Element maxWidth={'60rem'} style={{...center, paddingLeft: Gutter.lg, color: '#ffffff'}}
                             className={'pr-5'}>
                        <h1 dangerouslySetInnerHTML={{__html: title}}
                            style={{color: '#fff', fontSize: '4.2rem'}}
                            className={'mb-3 mb-md-5'}/>
                        <h2 dangerouslySetInnerHTML={{__html: description}}
                            style={{color: '#fff', fontSize: '2.2rem', marginBottom: Gutter.lg}}/>


                        <button style={{
                            fontSize: FontSize.md,
                            cursor: 'pointer',
                            backgroundColor: colors.button,
                            width: '100%',
                            fontWeight: 'bold',
                            border: '0'
                        }}>
                            BUY NOW
                            <span dangerouslySetInnerHTML={{__html: price}}
                                  className={'text-center mb-4 px-3'}/>
                        </button>
                    </Element>
                </Container>
            </Container>
        )
    }
}

export default ProductTopSection;

const center = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left',
    height: '100%'
};