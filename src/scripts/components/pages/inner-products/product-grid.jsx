import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Element, VBox, HBox} from 'react-stylesheet';
import {Gutter} from "../../../style/variables";
import ProductMobileSlider from "../ProductMobileSlider";
import {FontFamily, FontSize, Viewport} from "../../../style/style";
import BuyButton from "../../utils/button/buy-button";
import Image from "../../utils/image/image";
import styled from "styled-components";

class ProductGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sectionActive: this.props.sectionActive
        }

this.getMultiplyImagesArray = this.getMultiplyImagesArray.bind(this);
        this.memberHover = this.memberHover.bind(this);
    }

    memberHover(index) {
        const {sectionActive} = this.state;

        this.setState({
            sectionActive: parseInt(sectionActive) === parseInt(index) ? '' : parseInt(index)
        })

    }

    getMultiplyImagesArray(group, length) {
        const arr = [];
        for (let i = 0; i < length; i++) {
            arr.push(i === 0 ? group.image : group[`image_${i + 1}`]);
        }

        return arr;
    }
    render() {
        const {sections} = this.props;
        const {sectionActive} = this.state;
        return (
            <Container>
                <Row style={{marginBottom: Gutter.xl}}>
                    <Col md={6}>
                        <HBox flexWrap={'wrap'} justifyContent={'center'}>
                            {sections.map((section, i) => {
                                console.log('section', section);
                                const {title, description, image, price,} = section;
                                if (title !== '') {
                                    return (
                                        <Section key={i}
                                                 onClick={() => {
                                                     i !== sectionActive && this.memberHover(i);
                                                     if (window.innerWidth < 768) window.location.href = `/put-your-skinniz-on/#section-active-item`;
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
                                {sections[sectionActive].number_of_images > 1 ?
                                    <Element position={'relative'}>
                                        <ProductMobileSlider showInDesktop
                                                             items={this.getMultiplyImagesArray(sections[sectionActive], sections[sectionActive].number_of_images)
                                                                 .map((image, i) => {
                                                                     return ({
                                                                         src: image,
                                                                         header: sections[sectionActive].title,
                                                                         // altText: sections[sectionActive].description,
                                                                         caption: sections[sectionActive].price,
                                                                         buyButton: true
                                                                     })
                                                                 })}/>
                                    </Element> :
                                    <Element position={'relative'}>
                                        <Image src={sections[sectionActive].image}
                                               width={'100%'}
                                               className={'member_image'}/>

                                        <BuyButton
                                            price={sections[sectionActive].price ? sections[sectionActive].price : '69'}
                                            background={sections[sectionActive].button_background_color}
                                            color={sections[sectionActive].button_text_color}/>

                                    </Element>
                                }
                            </Element>
                        </Section>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ProductGrid;


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


const sectionStyle = {
    // width: '50%',
    paddingTop: '15%',
    paddingBottom: '15%',
    // backgroundColor: '#999',
    // border: '2rem solid #fff'
}