import React from 'react';
import DataStore from '../../flux/stores/DataStore.js'
import {Page} from '../templates/page.jsx';
import {SiteContent} from "../templates/page-wrapper.jsx";

class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const pageData = DataStore.getPageBySlug('about');

        return (
            <SiteContent
                content={
                    <Page id={pageData.id}
                          className={pageData.slug}
                          {...pageData}/>
                }
            />
        );
    }
}

export default About;