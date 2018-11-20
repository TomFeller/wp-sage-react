import React from 'react';
import DataStore from '../../flux/stores/DataStore.js';
import {Post} from "./post";
import {PageTitle} from '../style/style';
import {Row, Col} from 'reactstrap';
import DataActions from "../../flux/actions/DataActions";


class Archive extends React.Component {
    constructor(props) {
        super(props);


    }
    render() {
        const {title, category} = this.props,
            archiveData = category ? DataStore.getPostsByCategory(category) : DataStore.getAllPosts()

        let getArchivePosts = archiveData.map((post, i) => {
            return (
                <Col sm={6} md={4} lg={3} key={i}>
                    <Post id={post.id}
                          className={post['slug']}
                          {...post}/>
                </Col>
            )
        });

        return (
            <div className={'archive'}>

                <h1 className={'archive-title display-1'}>{title}</h1>

                <div className={'archive-posts'}>
                    <Row>
                        {getArchivePosts}
                    </Row>
                </div>

            </div>
        )
    }
}

export default Archive;