import React from 'react';
import {Row, Col} from 'reactstrap';
import {Element, VBox, HBox} from 'react-stylesheet';
import {Gutter} from "../../../style/variables";
import ProductMobileSlider from "../ProductMobileSlider";

class ProductBlocks extends React.Component {
    render() {
        const {sections} = this.props;
        const {sentence_font_size, special_sentence} = this.props;
        return (
            <VBox alignItems={'center'}>


                <h2 style={{fontSize: sentence_font_size ? sentence_font_size : '2rem', color: '#000000',  marginBottom: 0, textAlign: 'center'}} className={'py-5 pb-md-0'}>
                    {special_sentence}
                </h2>

                <Element marginBottom={Gutter.md}>
                    <ProductMobileSlider items={sections.map((item, i) => {
                        return ({
                            src: item.image,
                            caption: item.title,
                            altText: item.description,

                        })
                    })}/>
                </Element>
                <Element>
                {sections.map((section, i) => {
                    const {title, description, image, price, button_background_color, button_text_color} = section;
                    if (title !== '') {
                        return (
                            <Row key={i}
                                 className={`productWrapperDesktopFlex flex-row`} //${i % 2 ? '-reverse' : ''}
                                 style={{width: '100%', minHeight: '50vh'}}>
                                <Col xs={4} sm={6}
                                     style={{
                                         // backgroundImage: `url(${image}`,
                                         backgroundSize: 'contain',
                                         backgroundRepeat: 'no-repeat',
                                         backgroundPosition: 'center center',
                                         // minHeight: '50vh',
                                         // maxWidth: '59rem'
                                     }}
                                     className={'px-0 d-flex align-items-center'}>
                                    <img src={image} width={'auto'} style={{maxWidth: i === 2 ? '30rem' : i === 3 ? '29rem' : '40rem', display: 'block', margin: 'auto'}} />
                                </Col>
                                <Col xs={8} sm={6}
                                     className={'d-flex flex-direction-column align-items-center justify-content-center px-3 px-md-5'}
                                     style={{flexDirection: 'column'}}>
                                    <h2 dangerouslySetInnerHTML={{__html: title}}
                                        className={'mb-4'}/>
                                    <h3 dangerouslySetInnerHTML={{__html: description}}
                                        className={'text-center mb-0'}/>
                                </Col>
                            </Row>
                        )
                    }
                })}
                </Element>

                {/*<Element padding={Gutter.lg}>*/}
                {/*<Button background={'#151515'} color={'#fff'}>Order Now</Button>*/}
                {/*</Element>*/}
            </VBox>
        )
    }
}

export default ProductBlocks;