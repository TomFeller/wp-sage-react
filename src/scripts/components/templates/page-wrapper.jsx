import React from 'react';
import styled from 'styled-components';
import {Gutter} from "../style/style";

const SiteContent = ({content, className, ...props}) => {
    const classNames = ['site-content', className].join(" ");

    return (
        <Wrapper id={'site-content'}
                 className={classNames}
                 {...props}>
            {props.children}
        </Wrapper>
    )
};

export {SiteContent}

const Wrapper = styled.div`
    padding-top: ${props => props.paddingTop ? props.paddingTop : '14rem'};
    &.homepage {
        .section { 
            padding: ${Gutter.xl} 0;
            
            &-welcome {
                padding-top: 10rem;
            }
         }
    }
`;