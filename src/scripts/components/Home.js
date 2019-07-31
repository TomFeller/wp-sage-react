import React from 'react';
import DataStore from '../flux/stores/DataStore.js'
import {PageWrapper} from '../style/style';
import {HBox, VBox, Element} from 'react-stylesheet';
import Contact from "./Contact";
import HomepageSection from "./HomepageSection";
import StoryTabs from "./StoryTabs/story-tabs";
import HomepageMainSection from "./HomepageMainSection";
import LoaderLogo from "./utils/loader-logo/loader-logo";
import './home-style.css';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            activeIndex: 0,
            urlId: this.props.getUrlParams(window.location.href)
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

        console.log('id',this.state.urlId)


        setTimeout(
            () => {
                this.setState({
                    isLoading: false
                });
                let anchor = document.getElementById(this.state.urlId);
                if (anchor) {
                    anchor.scrollIntoView();
                }
            },
            500
        );


    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }


    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next(items) {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items && items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({activeIndex: nextIndex});
    }

    previous(items) {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items && items.length - 1 : this.state.activeIndex - 1;
        this.setState({activeIndex: nextIndex});
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({activeIndex: newIndex});
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
            {first_section, second_section, main_section, inspiration} = pageData.acf,
            {isLoading} = this.state;

        console.log('pageData.acf', pageData.acf);


        console.log('inspiration', inspiration);

        const allInapirations = [
            {
                src: inspiration.item_1.image,
                altText: inspiration.item_1.title,
                caption: inspiration.item_1.subtitle,
                color: inspiration.item_1.text_color,
                backgroundColor: inspiration.item_1.background_color
            }
        ];

        const {activeIndex} = this.state;

        const filterdItems = allInapirations.filter(item => !!item.src);

        const slides = filterdItems.length > 0 ? filterdItems.map((item, i) => {
                return (
                    <CarouselItem key={i}
                                  onExiting={this.onExiting}
                                  onExited={this.onExited}>
                        <img src={item.src} alt={item.altText} width={'100%'}/>
                        <CarouselCaption captionText={item.caption} captionHeader={item.altText} color={item.color}/>
                    </CarouselItem>
                );
            })
            :
            allInapirations.map((item, i) => {
                console.log('item',item);
                return (
                    <CarouselItem
                        key={i}
                        onExiting={this.onExiting}
                        onExited={this.onExited}>
                        <Element width={'100%'}
                                 height={'60rem'}
                                 background={item.backgroundColor}/>
                        <CarouselCaption captionText={item.caption} captionHeader={item.altText} color={item.color}/>
                    </CarouselItem>
                )
            });

        return (
            isLoading ?
                <HBox justifyContent={'center'} alignItems={'center'} width={'100%'} height={'80vh'}>
                    <LoaderLogo/>
                </HBox>
                :
                <PageWrapper className={'homepage'} id={'homepage'}>
                    {/*<h2>Homepage template</h2>*/}
                    {/*<h1>{pageData.title.rendered}</h1>*/}

                    {/*<div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />*/}
                    {/*<div>{pageData.text}</div>*/}
                    {/*<Archive archiveType={'posts'}/>*/}

                    <HomepageMainSection href={'/dress-up-your-device'}
                                         product_image={main_section.image}
                                         background={main_section.background_color}
                                         title={main_section.title}
                                         description={main_section.description}
                                         btn_background={main_section.buy_button.background_color}
                                         btn_color={main_section.buy_button.color}
                                         btn_label={main_section.buy_button.label}
                                         image_size={main_section.image_size}
                    />

                    <HomepageSection data={first_section} background={first_section.background_color}
                                     href={'/its-all-about-you'} id={'welcome-kit'}/>

                    <HomepageSection data={second_section}
                                     background={second_section.background_color}
                                     listenToScroll={this.listenToScroll} href={'/put-your-skinniz-on'}
                                     id={'accessories'}/>


                    <Element id={'inspiration-anchor'} position={'relative'}>
                        <Element id={'blinkiz'} position={'relative'} top={'-80px'} width={'100%'}/>
                        {slides &&
                        <Carousel
                            activeIndex={activeIndex}>

                            {slides}

                        </Carousel>
                        }
                    </Element>

                    <StoryTabs listenToScroll={this.listenToScroll}/>

                    {/*<Map listenToScroll={this.listenToScroll}/>*/}

                    <Contact homepage listenToScroll={this.listenToScroll}/>


                </PageWrapper>
        );
    }
}

export default Home;
