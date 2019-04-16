import React from 'react';

const PageWrapper = ({content, className, ...props}) => {
    const classNames = ['site-content', className].join(" ");

    return (
        <div id={'site-content'}{...props}
             className={classNames}
             style={pageWrapper}>
            {props.children}
        </div>
    )
};

export {PageWrapper}

const pageWrapper = {};