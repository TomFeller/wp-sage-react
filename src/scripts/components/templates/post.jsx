import React from 'react';
import {FontSize} from "../style/variables";
import {Link} from 'react-router-dom';

const Post = ({post, className, id, ...props}) => {
    const classNames = ['post', className].join(className ? ' post-' : '');
    const postImageUrl = props._embedded["wp:featuredmedia"] && props._embedded["wp:featuredmedia"][0].source_url;
    const {title, content, slug} = props;

    return (
        <div style={postWrapper} id={`post-${id}`} className={classNames}>

            <h2 style={postTitle}>{title.rendered}</h2>

            <div dangerouslySetInnerHTML={{__html: content.rendered}}
                 style={postContent}/>

            {postImageUrl &&
            <div style={postImage}>
                <img src={postImageUrl}/>
            </div>
            }

            <Link to={`/post/${slug}`}>קרא עוד</Link>

        </div>
    )
};

export {Post}

const postWrapper = {

};

const
    postTitle = {
        fontSize: FontSize.lg,
        fontWeight: '100',
        textAlign: 'center',
        color: '#000'
    },
    postContent = {
        fontSize: FontSize.sm,
        fontWeight: '100',
        textAlign: 'center',
        color: '#000'
    },
    postImage = {};
