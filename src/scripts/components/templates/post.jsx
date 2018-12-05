import React from 'react';
import {Element, HBox} from 'react-stylesheet';
import {Link} from 'react-router-dom';
import {FontSize} from "../style/variables";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Post = ({post, className, id, ...props}) => {
    const classNames = ['post', className].join(className ? ' post-' : '');
    const postImageUrl = props._embedded && props._embedded["wp:featuredmedia"] && props._embedded["wp:featuredmedia"][0].source_url;
    const {title, content, excerpt, slug, cardColor, imageHeight} = props;
    let type = props.type === 'letters_articles' ? 'articles' : props.type;

    return (
        <div id={`post-${id}`} className={classNames}>
            <Card className={`text-right ${cardColor ? `bg-${cardColor}` : ''}`}>
                <Element height={imageHeight ? imageHeight : '51.8rem'} overflow={'hidden'}>
                    <CardImg top
                             src={postImageUrl}/>
                </Element>
                <CardBody>
                    <CardTitle dangerouslySetInnerHTML={{__html: title.rendered}}/>
                    <CardText dangerouslySetInnerHTML={{__html: excerpt.rendered}}
                              style={imageHeight && cardTextHeight}/>
                    <HBox justifyContent={'flex-end'}>
                        <a href={`/${type}/${slug}`}>
                            <Button size={'sm'}>קרא עוד</Button>
                        </a>
                    </HBox>
                </CardBody>
            </Card>
        </div>
    )
};

export {Post}


const cardTextHeight = {
    height: '5.7rem',
    overflow: 'hidden'
}