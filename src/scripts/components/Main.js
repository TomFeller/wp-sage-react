import React from 'react';
import ScrollToTop from "./utils/ScrollToTop";
import Header from "./Header";
import Footer from "./Footer";
import {header_height} from "./style/variables";

class Main extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            theposition: 0
        };

        this.listenToScroll = this.listenToScroll.bind(this);
        this.getUrlParams = this.getUrlParams.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll);
        this.listenToScroll();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    getUrlParams(url) {

        // get query string from url (optional) or window
        let queryString = url ? url.split('#')[1] : window.location.search.slice(1);

        // we'll store the parameters here
        const obj = {};

        // if query string exists
        if (queryString) {

            // stuff after # is not part of query string, so get rid of it
            queryString = queryString.split('#')[0];

            // split our query string into its component parts
            const arr = queryString.split('&');

            for (let i = 0; i < arr.length; i++) {
                // separate the keys and the values
                const a = arr[i].split('=');

                // set parameter name and value (use 'true' if empty)
                let paramName = a[0];
                let paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

                // (optional) keep case consistent
                paramName = paramName.toLowerCase();
                if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

                // if the paramName ends with square brackets, e.g. colors[] or colors[2]
                if (paramName.match(/\[(\d+)?\]$/)) {

                    // create key if it doesn't exist
                    const key = paramName.replace(/\[(\d+)?\]/, '');
                    if (!obj[key]) obj[key] = [];

                    // if it's an indexed array e.g. colors[2]
                    if (paramName.match(/\[\d+\]$/)) {
                        // get the index value and add the entry at the appropriate position
                        const index = /\[(\d+)\]/.exec(paramName)[1];
                        obj[key][index] = paramValue;
                    } else {
                        // otherwise add the value to the end of the array
                        obj[key].push(paramValue);
                    }
                } else {
                    // we're dealing with a string
                    if (!obj[paramName]) {
                        // if it doesn't exist, create property
                        obj[paramName] = paramValue;
                    } else if (obj[paramName] && typeof obj[paramName] === 'string') {
                        // if property does exist and it's a string, convert it to an array
                        obj[paramName] = [obj[paramName]];
                        obj[paramName].push(paramValue);
                    } else {
                        // otherwise add the property
                        obj[paramName].push(paramValue);
                    }
                }
            }
        }

        return Object.keys(obj)[0];
    }
    listenToScroll = () => {
        const scrollElements = document.getElementsByClassName('scroll-element');
        const windowHeight = window.innerHeight;
        let fromTop = document.body.scrollTop || document.documentElement.scrollTop;
        for (let i = 0; i <= scrollElements.length; i++) {
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
            isHomePage
        } = this.props;
        const mobileHeaderHeight = 115;
        console.log('pageData', pageData);
        return (
            <ScrollToTop paddingTop={header_height}
                         paddingTopMobile={mobileHeaderHeight}
                         isHomePage={isHomePage}>

                <Header height={header_height}/>


                <div
                    // style={{minHeight: `calc(100vh - 75px - 30px)`}}
                >

                    <Content {...props}
                             {...pageData}
                             getUrlParams={this.getUrlParams}
                             listenToScroll={this.listenToScroll}
                    />
                </div>

                <Footer/>

            </ScrollToTop>
        )
    }
}

export default Main;