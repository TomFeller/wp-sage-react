import React from 'react'
import DataStore from "../../flux/stores/DataStore";
import {Container} from 'reactstrap';
import Archive from "../templates/archive";

class Articles extends React.Component {
    render() {

        const allArticles = DataStore.getAllArticles();

        return (
            <div className={'treatments'}>
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
            </div>
        )
    }
}

export default Articles;