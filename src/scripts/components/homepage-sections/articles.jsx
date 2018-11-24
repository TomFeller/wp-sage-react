import React from 'react'
import DataStore from "../../flux/stores/DataStore";
import {Container} from 'reactstrap';
import Archive from "../templates/archive";
import {ShadowFrame} from '../style/style';
import Masonary from "../utils/masonary/masonary";

class Articles extends React.Component {
    render() {

        const allArticles = DataStore.getAllArticles();
        const {list, maxItems} = this.props;
        return (
            <section className={'section section-articles'}>
                <Container>

                    <Archive max={maxItems ? maxItems : 6}
                             posts={allArticles.slice(0, 6)}
                             postSize={{
                                 sm: 6,
                                 md: 4,
                                 lg: 4

                             }}
                             list={list && list}
                             title={'מאמרים'}
                             cardColor={'primary'}/>

                </Container>
            </section>
        )
    }
}

export default Articles;