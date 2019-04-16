import React from 'react';
import styled, {keyframes} from 'styled-components';
import {HBox, VBox, Element} from 'react-stylesheet';
import {Container, Row, Col} from 'reactstrap';
import DataStore from '../flux/stores/DataStore.js'
import {PageWrapper, JumboTitle, ResponsiveHalf, Gutter, FontFamily} from '../style/style';
import {FontSize, Viewport} from "../style/variables";
import Image from "./utils/image/image";

class About extends React.Component {
    render() {
        const {homepage} = this.props,
            pageData = DataStore.getPageBySlug('about'),
            featuredImage = pageData['_embedded'] && pageData._embedded['wp:featuredmedia']['0']['source_url'],
            aboutContent = pageData.content.rendered;
        console.log('pageData', pageData);

        //
        // const letters = [aboutContent].map((letter, l) => {
        //     return (
        //         <div className={`letter ${letter === ' ' && 'space'}`}
        //              key={l}
        //              style={{
        //                  transform: `translate(
        //                                                     ${Math.floor((Math.random() * 100) + 1)}px,
        //                                                     ${Math.floor((Math.random() * 100) + 1)}px)`
        //              }}
        //         >{letter}</div>
        //     )
        // });

        return (
            <AboutPage className={'about-us scroll-element'} background={'#fff'}>
                <Container>
                    <div className={'align-items-center'}>
                        {/*<ResponsiveHalf>*/}
                        {/*<VBox justifyContent={'center'} alignItems={'center'} height={'100%'}>*/}
                        {/*<JumboTitle color={'#000'}>{pageData.title.rendered}</JumboTitle>*/}

                        {/*<Element width={'500px'}*/}
                                 {/*maxWidth={'100%'}*/}
                                 {/*padding={Gutter.md}*/}
                                 {/*style={{float: 'right'}}>*/}
                            {/*<Image src={featuredImage}/>*/}
                        {/*</Element>*/}

                        <Col>
                            <AnimatedText style={{fontSize: FontSize.sm, fontFamily: FontFamily.content}}
                                          id={'about-us-content'}
                                          className={'about-us-content scroll-element'}
                                          dangerouslySetInnerHTML={{__html: aboutContent}}/>
                        </Col>
                        {/*</VBox>*/}
                        {/*</ResponsiveHalf>*/}



                    </div>
                </Container>

            </AboutPage>
        );
    }
}

export default About;

const AboutPage = styled.div`
     
    .about-us-content {
        strong {
            color: #ffb100;
            font-size: 2.2rem; 
        }`;

const AnimatedText = styled.div`
    .letter {
        color: #000;     
        margin: ${Gutter.xs} 0 0; 
      
        font-size: ${FontSize.jumbo};
        
         transition: all .5s;
         position: relative;
         // opacity: 0; 
        .active-section & {
            // opacity: 1; 
            transform: translate(0) !important
        }
    }
    .space {
           width: .5rem;
        }
`;


const TextAnimation = styled.div`
    
`;