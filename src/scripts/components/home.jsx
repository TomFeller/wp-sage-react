import React from 'react';
import {PageWrapper} from "./templates/page-wrapper.jsx";

import Welcome from "./homepage-sections/welcome";
import Treatments from "./homepage-sections/treatments";
import Articles from "./homepage-sections/articles";
import Recommendations from "./homepage-sections/recommendations";
import Faq from "./homepage-sections/faq.jsx";
import Videos from "./homepage-sections/videos";
import MainSlider from "./homepage-sections/main-slider";

class Home extends React.Component {
    render() {
        return (
            <PageWrapper className={'homepage'}>
                <MainSlider/>
                <Welcome/>
                <Recommendations/>
                <Treatments/>
                <Articles/>
                <Videos/>
                <Faq/>
            </PageWrapper>
        );
    }
}

export default Home;
