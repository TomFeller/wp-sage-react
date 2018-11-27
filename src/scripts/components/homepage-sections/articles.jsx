import React from 'react'
import DataStore from "../../flux/stores/DataStore";
import {Container} from 'reactstrap';
import Archive from "../templates/archive";
import {ShadowFrame} from '../style/style';
import Masonary from "../utils/masonary/masonary";
import DataActions from "../../flux/actions/DataActions";

class Articles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allArticles: []
        }

    }
    componentDidMount() {
        DataActions.getAllArticles((allArticles) => {
            this.setState({
                allArticles: allArticles
            })
        });
    }

    render() {

        const {allArticles} = this.state;
        const {list, maxItems} = this.props;
        return (
            <section className={'section section-articles'}>
                <Container>

                    <Archive max={maxItems ? maxItems : 6}
                             posts={allArticles.slice(0, 6)}
                             postSize={{
                                 sm: 6,
                                 md: 6,
                                 lg: 4

                             }}
                             list={list && list}
                             title={'מאמרים'}
                             cardColor={'primary'}
                             imageHeight={230}/>

                </Container>
            </section>
        )
    }
}

export default Articles;