import React from 'react'
import DataStore from "../../flux/stores/DataStore";
import {Container} from 'reactstrap';
import Archive from "../templates/archive";
import {ShadowFrame} from '../style/style';
import Masonary from "../utils/masonary/masonary";

class Articles extends React.Component {
    render() {

        const allArticles = DataStore.getAllArticles();

        return (
            <section className={'section section-articles'}>
                <Container>

                    <Archive max={6}
                             posts={allArticles}
                             postSize={{
                                 sm: 6,
                                 md: 4,
                                 lg: 4

                             }}
                             title={'מאמרים'}/>
                </Container>
            </section>
        )
    }
}

export default Articles;