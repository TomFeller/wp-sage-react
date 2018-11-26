import React from 'react';
import DataStore from '../../flux/stores/DataStore.js';
import {Post} from "./post";
import {Color, FontSize, H2, SectionTitle} from '../style/style';
import {Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';

class Archive extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        const {title, category, posts, max, postSize, list, cardColor, imageHeight} = this.props,
            archiveData = posts ? posts : category ? DataStore.getPostsByCategory(category) : DataStore.getAllPosts();

        let getArchivePosts = archiveData.map((post, i) => {
            console.log('post');
            if (max && i < max) {
                if (list) {
                    return (
                        <Col xs={12} key={i}>
                            <Link to={post.link}
                                  style={{
                                      fontSize: FontSize.xxs,
                                      color: Color.white,
                                      fontWeight: 'bold'}}>
                                <p dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
                            </Link>
                        </Col>
                    )
                } else {
                    return (
                        <Col sm={postSize && postSize.xs ? postSize.xs : 12}
                             md={postSize && postSize.md ? postSize.md : 6}
                             lg={postSize && postSize.lg ? postSize.lg : 6}
                             key={i}
                             className={'my-3'}>
                            <Post id={post.id}
                                  className={post['slug']}
                                  cardColor={cardColor && cardColor}
                                  imageHeight={imageHeight}
                                  {...post}/>
                        </Col>
                    )
                }
            }
        });

        return (
            <div className={'archive'}>

                <SectionTitle
                    className={`archive-title display-3 text-center mt-3 ${list ? 'mb-3' : 'mb-5'}`}>{title}</SectionTitle>

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
