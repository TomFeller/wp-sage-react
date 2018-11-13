import React from 'react';
import DataStore from '../../flux/stores/DataStore.js';
import {Post} from "./post";
import {PageTitle} from '../style/style';
import Grid from "../utils/grid/grid";

class Archive extends React.Component {
    render() {
        const {title} = this.props,
            archiveData = DataStore.getAllPosts();

        let getArchivePosts = archiveData.map((post, i) => {
            return (
                    <Post key={i}
                          id={post.id}
                          className={post.slug}
                          {...post}/>
            )
        });

        return (
            <div className={'archive'}>

                <PageTitle className={'archive-title'}>{title}</PageTitle>

                <div className={'archive-posts'}>
                    <Grid cells={getArchivePosts}/>
                </div>

            </div>
        )
    }
}

export default Archive;