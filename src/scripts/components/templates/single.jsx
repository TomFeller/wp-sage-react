import React from 'react';
import {Container, PageTitle, PageContent} from '../style/style';
import {Post} from "./post";
import {PageWrapper} from "./page-wrapper";

const Single = ({className, id, ...props}) => {
    const classNames = ['page', className].join(" ");

    return (
        <PageWrapper id={`page-${id}`}
                     className={classNames}>
            <Post {...props}/>
        </PageWrapper>

    )
};


export {Single}
