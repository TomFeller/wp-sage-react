import React from 'react';
import {Element} from 'react-stylesheet';
import {Container, PageTitle, PageContent, Gutter} from '../style/style';
import {Post} from "./post";
import {SiteContent} from "./page-wrapper";

class Single extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props)
    }

    render() {
        const {type, title, content, _embedded, acf} = this.props;
        const featuredImage = _embedded['wp:featuredmedia'][0]['source_url'];
        const innerFeaturedImage = acf.image;

        return (
            <SiteContent className={`single single-${type}`}
                         paddingTop={'11rem'}>

                <Container>
                    <Element padding={`${Gutter.xl} 0`}>
                        <PageTitle dangerouslySetInnerHTML={{__html: title.rendered}}/>
                    </Element>
                </Container>

                <Container fluid noGutters>
                    <img src={innerFeaturedImage} width={'100%'}/>
                </Container>

                <Container>
                    <PageContent dangerouslySetInnerHTML={{__html: content.rendered}}
                         className={'py-5'}/>
                </Container>

            </SiteContent>
        )
    }
}


export {Single};
