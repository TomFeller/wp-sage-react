import React from 'react';
import {Container, PageWrapper, PageTitle, PageContent} from '../style/style';

const Page = ({className, id, ...props}) => {

    const classNames = ['page', className].join(" "),
        pageImageUrl = props._embedded && props._embedded["wp:featuredmedia"] && props._embedded["wp:featuredmedia"][0].source_url;

    return (
        <div id={`page-${id}`}
             className={classNames}>

            <PageTitle className={'page-title'}>{props.title.rendered}</PageTitle>

            <div dangerouslySetInnerHTML={{__html: props.content.rendered}}/>

            {pageImageUrl &&
            <div>
                <img src={pageImageUrl}/>
            </div>}

        </div>
    )
};

export {Page}
