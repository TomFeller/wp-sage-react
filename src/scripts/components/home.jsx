import React from 'react';
import DataStore from '../flux/stores/DataStore.js'
import classnames from "classnames";
import Archive from "./templates/archive";
import {PageWrapper} from "./templates/page-wrapper.jsx";
import {Jumbotron, Container, Button} from 'reactstrap';

import {PageTitle} from "./style/typography";

class Home extends React.Component {
    render() {
        const pageData = DataStore.getPageBySlug('homepage');
        const {title, content, excerpt} = pageData;
        return (
            <PageWrapper>
                <Container>
                    <PageTitle> {title.rendered}</PageTitle>

                    <Archive/>
                </Container>
            </PageWrapper>
        );
    }
}

export default Home;
