import React from 'react';
import DataStore from '../flux/stores/DataStore.js'
import classnames from "classnames";
import Archive from "./templates/archive";
import {PageWrapper} from "./templates/page-wrapper.jsx";
import {Container} from "./style/style";

class Home extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('home');

        return (
            <PageWrapper content={
                <Container>
                    <Archive title={'Archive'}/>
                </Container>
            }/>
        );
    }
}

export default Home;
