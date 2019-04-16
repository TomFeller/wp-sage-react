import React from 'react';
import ScrollToTop from "./utils/ScrollToTop";
import Header from "./Header";
import Footer from "./Footer";

class Main extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            theposition: 0
        };

        this.listenToScroll = this.listenToScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll);
        this.listenToScroll();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
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
        const {
            Content,
            pageData,
            props,
        } = this.props;

        const {createNewAdventureAfterLogin, loginModalActive, shareModalActive, reviewsModalActive, reviewData} = this.state;


        const headerHeight = 75;
        const mobileHeaderHeight = 115;
        console.log('pageData', pageData);
        return (
            <ScrollToTop paddingTop={headerHeight} paddingTopMobile={mobileHeaderHeight}>

                <Header height={headerHeight}/>


                <Content {...props}
                         {...pageData}
                         listenToScroll={this.listenToScroll}
                />


                <Footer />

            </ScrollToTop>
        )
    }
}

export default Main;