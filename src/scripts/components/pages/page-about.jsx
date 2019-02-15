import React from 'react';
import DataStore from '../../flux/stores/DataStore.js'
import {Page} from '../templates/page.jsx';
import {PageWrapper} from "../templates/page-wrapper.jsx";

class PageAbout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const pageData = DataStore.getPageBySlug('about');

        return (
            <PageWrapper>

            </PageWrapper>
        );
    }
}

export default PageAbout;