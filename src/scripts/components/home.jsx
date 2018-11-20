import React from 'react';
import {PageWrapper} from "./templates/page-wrapper.jsx";

import Welcome from "./homepage-sections/welcome";
import Treatments from "./homepage-sections/treatments";
import Articles from "./homepage-sections/articles";
import Recommendations from "./homepage-sections/recommendations";
import Faq from "./homepage-sections/faq.jsx";

class Home extends React.Component {
    render() {

        const accordion = [
            {
                header: <h2>HEADER</h2>,
                content: <div>CONTENT</div>
            }, {
                header: <h3>HEADER 2</h3>,
                content: <p>CONTENT 2</p>
            }, {
                header: <h4>HEADER 3</h4>,
                content: <section>CONTENT 3</section>
            }, {
                header: <div>HEADER 4</div>,
                content: <div>CONTENT 4</div>
            }];
        return (
            <PageWrapper className={'homepage'}>
                <Welcome/>
                <Recommendations/>
                <Treatments/>
                <Articles/>
                <Faq/>
            </PageWrapper>
        );
    }
}

export default Home;
