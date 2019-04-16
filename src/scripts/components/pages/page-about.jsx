import React from 'react';
import DataStore from '../../flux/stores/DataStore.js';
import {HBox, Element} from 'react-stylesheet';
import {Container, Row, Col} from 'reactstrap';
import {PageWrapper} from "../templates/page-wrapper.jsx";
import Text from "../utils/text/text";
import Image from "../utils/image/image";
import Page from "../templates/page";

class PageAbout extends React.Component {
    render() {
        const pageData = DataStore.getPageBySlug('about');

        return (
            <PageWrapper>
                <Container>
                    <Page {...pageData}/>
                </Container>
            </PageWrapper>
        );
    }
}

export default PageAbout;