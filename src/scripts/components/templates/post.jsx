import React from 'react';
import {FontSize} from "../style/variables";
import {Link} from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Post = ({post, className, id, ...props}) => {
    const classNames = ['post', className].join(className ? ' post-' : '');
    const postImageUrl = props._embedded && props._embedded["wp:featuredmedia"] && props._embedded["wp:featuredmedia"][0].source_url;
    const {title, content, slug} = props;

    return (
        <div id={`post-${id}`} className={classNames}>
            <Card className={'text-right'}>
                <CardImg top width="100%" src={postImageUrl}/>
                <CardBody>
                    <CardTitle>{title.rendered}</CardTitle>
                    {/*<CardText dangerouslySetInnerHTML={{__html: content.rendered}}/>*/}
                    <Link to={`/post/${slug}`}>
                        <Button>קרא עוד</Button>
                    </Link>
                </CardBody>
            </Card>
        </div>
    )
};

export {Post}