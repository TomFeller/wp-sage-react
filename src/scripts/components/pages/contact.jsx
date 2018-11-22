import React from 'react';
import DataStore from '../../flux/stores/DataStore.js'
import {Page} from '../templates/page.jsx';
import {PageWrapper} from "../templates/page-wrapper.jsx";

class Contact extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const pageData = DataStore.getPageBySlug('contact');

        return (
            <PageWrapper
                content={
                    <Page id={pageData.id}
                          className={pageData.slug}
                          {...pageData}
                    />
                }
            />
        );
    }
}

export default Contact;