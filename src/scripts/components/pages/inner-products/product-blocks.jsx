import React from 'react';
import {Row, Col} from 'reactstrap';
import {Element, VBox, HBox} from 'react-stylesheet';
import {Gutter} from "../../../style/variables";
import ProductMobileSlider from "../ProductMobileSlider";

class ProductBlocks extends React.Component {
    render() {
        const {sections} = this.props;
        return (
            <VBox alignItems={'center'}>
                <Element marginBottom={Gutter.md}>
                    <ProductMobileSlider items={sections.map((item, i) => {
                        return ({
                            src: item.image,
                            caption: item.title,
                            altText: item.description,

                        })
                    })}/>
                </Element>
                {sections.map((section, i) => {
                    const {title, description, image, price} = section;
                    if (title !== '') {
                        return (
                            <Row key={i}
                                 className={`productWrapperDesktopFlex flex-row`} //${i % 2 ? '-reverse' : ''}
                                 style={{width: '100%'}}>
                                <Col xs={4} sm={6}
                                     style={{
                                         // backgroundImage: `url(${image}`,
                                         backgroundSize: 'contain',
                                         backgroundRepeat: 'no-repeat',
                                         backgroundPosition: 'center center',
                                         minHeight: '50vh'
                                     }}
                                     className={'px-0 d-flex align-items-center'}>
                                    <img src={image} width={'100%'}/>
                                </Col>
                                <Col xs={8} sm={6}
                                     className={'d-flex flex-direction-column align-items-center justify-content-center px-3 px-md-5'}
                                     style={{flexDirection: 'column'}}>
                                    <h2 dangerouslySetInnerHTML={{__html: title}}
                                        className={'mb-4'}/>
                                    <h3 dangerouslySetInnerHTML={{__html: description}}
                                        className={'text-center'}/>
                                </Col>
                            </Row>
                        )
                    }
                })}

                {/*<Element padding={Gutter.lg}>*/}
                {/*<Button background={'#151515'} color={'#fff'}>Order Now</Button>*/}
                {/*</Element>*/}
            </VBox>
        )
    }
}

export default ProductBlocks;