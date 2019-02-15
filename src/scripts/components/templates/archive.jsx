import React from 'react';
import DataStore from '../../flux/stores/DataStore.js';
import {Post} from "./post";
import {PageTitle} from '../style/style';
import {Row, Col} from 'reactstrap';
import DataActions from "../../flux/actions/DataActions";
import TemplateGrid from "../utils/templates/template-grid";


class Archive extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        const {title, category} = this.props,
            archiveData = category ? DataStore.getPostsByCategory(category) : DataStore.getAllPosts();

        return (
            <div className={'archive'}>

                {title && <h1 className={'archive-title display-1'}>{title}</h1>}

                <TemplateGrid sm={6} md={4} lg={3} >
                    {archiveData.map((post, i) => {
                        return (
                            <Post id={post.id}
                                  key={i}
                                  className={post['slug']}
                                  {...post}/>
                        )
                    })}
                </TemplateGrid>

            </div>
        )
    }
}

export default Archive;