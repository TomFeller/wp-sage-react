import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Element, HBox, VBox} from 'react-stylesheet';
import {PageWrapper} from "../../style/layout";
import {FontFamily, FontSize, Viewport} from "../../style/style";
import {Gutter} from "../../style/variables";
import Image from "../utils/image/image";
import styled from "styled-components";
import ProductTopSection from "./ProductTopSection";
import '../../style/css/product.css';
import '../../style/css/member.css';
// import ProductMobileSlider from "./ProductMobileSlider";
import {UncontrolledCarousel} from 'reactstrap';
import ProductMobileSlider from "./ProductMobileSlider";

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sectionActive: 0
        };

        this.memberHover = this.memberHover.bind(this);
    }

    memberHover(index) {
        const {sectionActive} = this.state;

        this.setState({
            sectionActive: parseInt(sectionActive) === parseInt(index) ? '' : parseInt(index)
        })

    }

    render() {
        const {title, content, acf} = this.props;
        const {sectionActive} = this.state;
        // const {title, content, acf} = pageData;
        const {inner_sections, main_inner_section} = acf;

        const sections = [inner_sections.product_1, inner_sections.product_2, inner_sections.product_3, inner_sections.product_4, inner_sections.product_5];

        console.log('main_inner_section', main_inner_section);
        return (
            <PageWrapper>
                <Element>
                    {acf.add_main_section && main_inner_section && <ProductTopSection {...main_inner_section}/>}

                    {inner_sections.template !== 'blocks' && <h1 dangerouslySetInnerHTML={{__html: title.rendered}}
                                                                 style={{
                                                                     textAlign: 'center',
                                                                     marginBottom: '0',
                                                                     fontSize: '4rem',
                                                                     padding: `${Gutter.lg} 0`,
                                                                     color: '#000'
                                                                 }}/>
                    }

                    {content.rendered && content.rendered !== '' &&
                    <h2 dangerouslySetInnerHTML={{__html: content.rendered}}
                        className={`text-center product-name-title ${inner_sections.template === 'blocks' ? 'mt-5 mb-5' : ''}`}
                        style={{color: '#000', marginBottom: Gutter.md}}/>}

                    {inner_sections.template === 'grid' ?
                        <Container>
                            {/*<ProductMobileSlider items={sections.map((item, i) => {*/}
                            {/*return ({*/}
                            {/*src: item.image,*/}
                            {/*header: item.title,*/}
                            {/*altText: item.description,*/}
                            {/*caption: item.price*/}
                            {/*})*/}
                            {/*})}/>*/}

                            <Row style={{marginBottom: Gutter.xl}}>
                                <Col md={6}>
                                    <HBox flexWrap={'wrap'} justifyContent={'space-between'}>
                                        {sections.map((section, i) => {
                                            console.log('section', section);
                                            const {title, description, image, price,} = section;
                                            if (title !== '') {
                                                return (
                                                    <Section key={i}
                                                             onClick={() => {
                                                                 i !== sectionActive && this.memberHover(i);
                                                                 window.location.href = `/put-your-skinniz-on/#section-active-item`;
                                                             }}
                                                             className={'section-grid-item'}
                                                             id={`section-grid-item-${i}`}
                                                             style={{
                                                                 ...sectionStyle
                                                             }}>
                                                        <VBox alignItems={'center'} className={'member'}
                                                              style={{border: 0, margin: 'auto'}}>
                                                            <HBox justifyContent={'center'} alignItems={'center'}
                                                                  width={'100%'}
                                                                  position={'relative'}>
                                                                <h3 dangerouslySetInnerHTML={{__html: title}}/>
                                                            </HBox>
                                                        </VBox>
                                                    </Section>

                                                )
                                            }
                                        })}
                                    </HBox>
                                </Col>
                                <Col md={6} id={'section-active-item'}>
                                    <Section active={true}
                                             style={{
                                                 ...sectionStyle,
                                                 display: 'flex',
                                                 // align-items: center;
                                                 // justify-content: center;
                                                 paddingTop: '0',
                                                 paddingBottom: '0',
                                                 width: '100%',
                                                 height: '100%',
                                                 backgroundColor: 'transparent',
                                                 border: '0 !important'
                                             }}>
                                        <Element className={'member'} width={'100%'} border={0}>
                                            <Element position={'relative'}>
                                                <Image src={sections[sectionActive].image}
                                                       width={'100%'}
                                                       className={'member_image'}/>
                                                <h2 dangerouslySetInnerHTML={{__html: sections[sectionActive].price ? sections[sectionActive].price : '69$'}}
                                                    className={'text-center mt-4 d-md-none'}/>
                                            </Element>
                                        </Element>
                                    </Section>
                                </Col>
                            </Row>
                        </Container>
                        : inner_sections.template === 'blocks' ?
                            <VBox alignItems={'center'}>

                                <ProductMobileSlider items={sections.map((item, i) => {
                                    return ({
                                        src: item.image,
                                        header: item.title,
                                        altText: item.description,

                                    })
                                })}/>

                                {sections.map((section, i) => {
                                    const {title, description, image, price} = section;
                                    if (title !== '') {
                                        return (
                                            <Row key={i} className={'productWrapperDesktopFlex'}
                                                 style={{width: '100%'}}>
                                                <Col xs={4} sm={6}
                                                     style={{
                                                         backgroundImage: `url(${image}`,
                                                         backgroundSize: 'cover',
                                                         backgroundPosition: 'center center',
                                                         height: '100vh'
                                                     }}
                                                     className={'px-0'}>
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
                            :
                            <Container fluid>
                                <Element>
                                    <ProductMobileSlider items={sections.map((item, i) => {
                                        return ({
                                            src: item.image,
                                            header: item.title,
                                            altText: item.description,
                                            caption: item.price
                                        })
                                    })}/>

                                    <Row className={'py-5 flex-md-nowrap productWrapperDesktopFlex'}>
                                        {sections.map((section, i) => {
                                            const {title, description, image, price} = section;
                                            return (
                                                <ProductCol key={i} className={'mb-5 px-0 product-col'}>
                                                    <Image src={image}/>
                                                    <Element padding={Gutter.sm} className={'py-5'} background={'#fff'}>
                                                        <h2 dangerouslySetInnerHTML={{__html: title}}/>
                                                        {description && description !== '' &&
                                                        <h4 dangerouslySetInnerHTML={{__html: description}}/>}

                                                        <button style={{
                                                            display: 'block',
                                                            fontSize: FontSize.sm,
                                                            background: '#898989',
                                                            color: '#fff',
                                                            border: 0
                                                        }}
                                                                className={'px-3 mt-2'}
                                                                color={'#fff'}>
                                                            order now
                                                            <span dangerouslySetInnerHTML={{__html: ` ${price}`}}
                                                                  style={{fontSize: FontSize.sm}}/>
                                                        </button>
                                                    </Element>

                                                </ProductCol>
                                            )
                                        })}
                                    </Row>
                                </Element>
                            </Container>
                    }
                </Element>
            </PageWrapper>
        )
    }
}

export default Product;

const sectionStyle = {
    // width: '50%',
    paddingTop: '15%',
    paddingBottom: '15%',
    // backgroundColor: '#999',
    // border: '2rem solid #fff'
}

const Section = styled.div`
    
    padding-top: 15%;
    padding-bottom: 15%;
    // background-color: #999;
    
    
    ${props => props.active && `
        display: flex;
        // align-items: center;
        // justify-content: center;
        padding-top: 0;
        padding-bottom: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
       border: 0 !important;
    `}
    
    @media screen and (min-width: ${Viewport.xs_l}) {
        width: ${props => props.active ? '100%' : '47%'};
    }
    .member {
        &_name {
            font-family: ${FontFamily.title};
            font-size: ${FontSize.sm};
            margin: 1rem 0;
        }
        &_role {
            font-size: ${FontSize.xs};
            margin: 0;
        } 
        &_content {
            font-family: ${FontFamily.content};
            font-size: ${FontSize.sm};
            margin: 0;
            opacity: 0;
            position: absolute;
            top: 0;
            // background: rgba(0,0,0,.8);
            color: #fff;
            padding: ${Gutter.md};
            width: 100%;
            height: 100%;
            transition: .5s opacity;
            cursor: pointer;
        }
        
        &_image {
        
        }
        // @media screen and (min-width: ${Viewport.md}) {
        //     &:hover {
        //         .member_content {
        //             opacity: 1;
        //         }
        //     }
        // }
        
    }
     
`;


const ProductCol = styled.div`
      width: 100%;
      border-right: 1px solid #000;
      
      &:last-child {
        border-right: 0;
      }
      @media screen and (min-width: ${Viewport.sm}) {
        width: 50%;  
      }
      @media screen and (min-width: ${Viewport.md}) {
        width: 20%;  
      }
`;