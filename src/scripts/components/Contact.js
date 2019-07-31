import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';
import DataStore from '../flux/stores/DataStore.js'
import {PageWrapper, JumboTitle, Colors, Gutter} from '../style/style';
import {FontSize, Viewport} from "../style/variables";
import {Element, HBox, VBox} from 'react-stylesheet';
import Form from "./utils/form/form";
import Field from "./utils/form/field";
import TextArea from "./utils/form/textarea";
import Button from "./utils/button/button";
import Circle from "./utils/shapes/circle";
import FaPhone from "react-icons/lib/fa/phone";
import MdLocationOn from "react-icons/lib/md/location-on";
import Text from "./utils/text/text";

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
           isFormOpen: window.location.href.includes('#contact-us')
        };

        this.handleChange = this.handleChange.bind(this);
        this.openForm = this.openForm.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }

    handleChange(e) {
        const target = e.target,
            name = target.name,
            value = target.value;

        this.setState({
            [name]: value
        })
    }
    handleSend(e) {
        e.preventDefault();
        this.setState({
            isFormSuccess: true
        })
    }
    openForm() {
        this.setState({
            isFormOpen: true
        })
    }

    render() {
        const {homepage} = this.props;
        const pageData = DataStore.getPageBySlug('contact');
        const featuredImage = pageData['_embedded'] && pageData._embedded['wp:featuredmedia']['0']['source_url'];

        const {name, email, message, isFormOpen, isFormSuccess} = this.state;
        const free_text = pageData.acf.free_location_text;

        return (
            <PageWrapper className={'contact-us scroll-element'}

                         padding={homepage && '5rem'}
                         after={true}
                         style={{
                             display: 'flex',
                             // flexDirection: 'column',
                             alignItems: 'center',
                             height: '100vh',
                             background: '#f5f5f5',
                             backgroundImage: `url(${featuredImage})`,
                             backgroundPosition: 'center center',
                             backgroundSize: 'cover',
                             position: 'relative'
                         }}>
                <div id={'contact-us'} style={{position: 'absolute', top: '-50px'}}></div>
                <Element
                    width={'100%'}
                    height={'100%'}
                    position={'absolute'}
                    top={0}
                    right={0}
                    opacity={'.4'}
                    zIndex={'0'}
                    background={'#000'}/>

                <Container>
                    <VBox justifyContent={'center'}>
                        <div>
                            <h2 style={{textAlign: 'center', color: '#fff', fontSize: FontSize.lg}}>
                                {pageData.title.rendered}
                            </h2>

                            {/*<ContactUsTitle>Contact Us</ContactUsTitle>*/}

                            <div style={contactDetails} dangerouslySetInnerHTML={{__html: pageData.content.rendered}}/>
                            <div style={contactDetails}>{pageData.text}</div>

                            <Circle size={'90'} background={'#f6f2ec'} margin={`${Gutter.xl} auto ${Gutter.sm}`}
                                    onClick={this.openForm} pointer>
                                <img width="50"
                                     src={'http://oleo-admin.tf-interactive.com/wp-content/uploads/2019/06/Oleo_icons-07.png'}/>
                            </Circle>
                            <p style={{textAlign: 'center', color: '#ffffff', fontSize: FontSize.sm, cursor: 'pointer'}}
                               onClick={this.openForm}>Write us</p>
                        </div>

                        <Element maxWidth={'500px'} width={'100%'} height={isFormOpen ? '260px' : 0}
                                 transition={'height .5s'} overflow={'hidden'}
                                 margin={`${Gutter.md} auto ${Gutter.lg}`}>
                            {isFormSuccess ?
                                <HBox justifyContent={'center'} alignItems={'center'} background={'#fff'} padding={Gutter.md} borderRadius={'1rem'}>
                                    <p style={{fontSize: FontSize.md, textAlign: 'center'}}>Thank you! <br/> We will contact you shortly...</p>
                                </HBox>
                                :
                                <Form className={'text-center'}>
                                    <Field
                                        // label={'Name'}
                                        placeholder={'your name'}
                                        name={'name'}
                                        value={name}
                                        backgroundColor={'rgba(255, 255, 255, .8)'}
                                        color={'#000'}
                                        change={this.handleChange}/>
                                    <Field
                                        // label={'Email'}
                                        placeholder={'your email'}
                                        name={'email'}
                                        value={email}
                                        backgroundColor={'rgba(255, 255, 255, .8)'}
                                        color={'#000'}
                                        change={this.handleChange}/>
                                    <TextArea
                                        // label={'Your Message'}
                                        placeholder={'your message'}
                                        name={'message'}
                                        rows={3}
                                        backgroundColor={'rgba(255, 255, 255, .8)'}
                                        color={'#000000'}
                                        value={message}
                                        change={this.handleChange}/>
                                    <HBox justifyContent={'flex-end'}>
                                        <Button style={{backgroundColor: '#fde7e2', marginRight: '0'}}
                                                onClick={this.handleSend}>Send</Button>
                                    </HBox>
                                </Form>
                            }
                        </Element>
                    </VBox>


                    <HBox marginTop={isFormOpen ? '5rem' : '10rem'} alignItems={'center'}
                          style={{transition: '.5s margin-top'}}>
                        <MdLocationOn size={30} color={'#fff'}/>
                        <h2 style={{
                            fontSize: '1.8rem',
                            color: '#fff',
                            paddingLeft: Gutter.sm
                        }}>
                            {free_text}
                        </h2>
                    </HBox>

                </Container>
            </PageWrapper>
        );
    }
}

export default Contact;


const contactDetails = {
    fontSize: FontSize.sm,
    color: '#fff'
};

const ContactUsTitle = styled.div`
    display: flex;
    justify-content: center;
    .letter {
        color: #fff;     
        margin: ${Gutter.xs} 0 ${Gutter.md}; 
        text-align: center;
        font-family: Roboto
        font-weight: 900;
        font-size: ${FontSize.lg};
        @media screen and (min-width: ${Viewport.md}) {
            font-size: ${FontSize.xl};
        }
        @media screen and (min-width: ${Viewport.lg}) {
            font-size: ${FontSize.jumbo};
        }
        &.space {
            width: 3rem;
        }
         transition: all .5s;
         position: relative;
         // opacity: 0; 
        .active-section & {
            // opacity: 1; 
            transform: translate(0) !important
        }
    }
    
`;
