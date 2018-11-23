import React from 'react';
import {HBox} from 'react-stylesheet';
import {Link} from 'react-router-dom';
import {FontSize} from "../style/variables";
import {
Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Post = ({post, className, id, ...props}) => {
    const classNames = ['post', className].join(className ? ' post-' : '');
    const postImageUrl = props._embedded && props._embedded["wp:featuredmedia"] && props._embedded["wp:featuredmedia"][0].source_url;
    const {title, content, excerpt, slug, cardColor} = props;

    return (
        <div id={`post-${id}`} className={classNames}>
            <Card className={`text-right ${cardColor ? `bg-${cardColor}` : ''}`}>
                <CardImg top width="100%" src={postImageUrl}/>
                <CardBody>
                    <CardTitle dangerouslySetInnerHTML={{__html: title.rendered}}/>
                    <CardText dangerouslySetInnerHTML={{__html: excerpt.rendered}}/>
                    <HBox justifyContent={'flex-end'}>
                        <Link to={`/post/${slug}`}>
                            <Button>קרא עוד</Button>
                        </Link>
                    </HBox>
                </CardBody>
            </Card>
        </div>
    )
};

export {Post}