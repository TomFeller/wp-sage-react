import React from 'react';
import DataStore from '../flux/stores/DataStore.js'
import Archive from "./Archive";
import {Gutter, PageWrapper, ResponsiveHalf} from '../style/style';
import About from "./About";
import {HBox, VBox, Element} from 'react-stylesheet';
import Contact from "./Contact";
import Team from "./Team";
import Footer from "./Footer";
import Loader from "./utils/Loader";
import HomepageSection from "./HomepageSection";
import AnimatedTabs from "./utils/animated-tabs/animated-tabs";
import StoryTabs from "./StoryTabs/story-tabs";
import Map from "./Map";
import {Colors} from "../style/variables";
import BackgroundImage from "./utils/image/background-image";
import HomepageMainSection from "./HomepageMainSection";
import LoaderLogo from "./utils/loader-logo/loader-logo";


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        };

        this.handleScroll = this.handleScroll.bind(this);
    }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        setTimeout(
            () => {
                this.setState({
                    isLoading: false
                })
            },
            1000
        );

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let supportPageOffset = window.pageXOffset !== undefined;
        let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
        let contactSection = document.getElementById('contact-us');
        let aboutSection = document.getElementById('about-us-content');
        let scroll = {
            x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
            y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
        };

        let fromTop = getPosition(aboutSection);

        function getPosition(element) {
            let xPosition = 0;
            let yPosition = 0;

            while (element) {
                xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
                yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
                element = element.offsetParent;
            }

            return {x: xPosition, y: yPosition - window.innerHeight};
        }

        if (scroll.y > fromTop.y + 450) { // 3000px (arbitrary - put whatever point you need there.)
            // target element to change attribute
            contactSection && contactSection.setAttribute('class', 'active-section');//change the attribute.
        } else {
            contactSection && contactSection.classList.remove('active-section');
        }
    }

    listenToScroll = () => {
        const scrollElements = document.getElementsByClassName('scroll-element');
        const windowHeight = window.innerHeight;
        let fromTop = document.body.scrollTop || document.documentElement.scrollTop;
        for (let i = 0; i <= scrollElements.length; i++) {
            // var current = $('#service-section-' + i);

            // console.log('scrollElements',scrollElements[0])
            // console.log('scrollElements',scrollElements[1])
            let current = scrollElements[i];
            if (current && fromTop + windowHeight - 200 >= current.offsetTop) {
                current.classList.add('scroll-element-active');
            }
        }
    };

    render() {
        const pageData = DataStore.getPageBySlug('home'),
            {first_section, second_section, product_image} = pageData.acf,
            {isLoading} = this.state;


        console.log('product_image', product_image);
        return (
            isLoading ?
                <HBox justifyContent={'center'} alignItems={'center'} width={'100%'} height={'80vh'}>
                    <LoaderLogo/>
                </HBox>
                :
                <PageWrapper className={'homepage'}>
                    {/*<h2>Homepage template</h2>*/}
                    {/*<h1>{pageData.title.rendered}</h1>*/}

                    {/*<div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />*/}
                    {/*<div>{pageData.text}</div>*/}
                    {/*<Archive archiveType={'posts'}/>*/}

                    <HomepageMainSection href={'/dress-up-your-device'} product_image={product_image}/>

                    <HomepageSection data={first_section} background={Colors.peach} href={'/its-all-about-you'} id={'welcome-kit'}/>

                    <HomepageSection data={second_section} background={Colors.peach}
                                     listenToScroll={this.listenToScroll} href={'/put-your-skinniz-on'} id={'accessories'}/>

                    <HBox justifyContent={'center'} alignItems={'flex-start'} id={'inspiration'}>
                        <BackgroundImage
                            url={'http://oleo-admin.tf-interactive.com/wp-content/uploads/2019/03/oleo_image.jpeg'}
                            attachment={'fixed'}
                            height={'655px'}/>
                    </HBox>

                    <StoryTabs listenToScroll={this.listenToScroll}/>

                    {/*<Map listenToScroll={this.listenToScroll}/>*/}

                    <Contact homepage listenToScroll={this.listenToScroll}/>


                </PageWrapper>
        );
    }
}

export default Home;
