import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'reactstrap';
import Image from '../../utils/image/image';
import Text from "../text/text";
import {HBox, Element} from 'react-stylesheet';
import {Cell} from "../cell/cell";

class TemplateDefault extends React.Component {
    render() {
        console.log('his.props', this.props);

        const title = this.props.title.rendered,
            image = this.props._embedded["wp:featuredmedia"] && this.props._embedded["wp:featuredmedia"][0].source_url,
            content = this.props.content.rendered;

        const templateOptions = this.props['acf']['template_default_options'];
        const {align, direction, items_order, image_width, content_width, image_max_width} = templateOptions;
        console.log('templateOptions', templateOptions);
        return (
            <Wrapper {...templateOptions}>
                {direction === 'horizontal' ?
                    <HBox flexWrap={'wrap'}
                          flexDirection={items_order === 'image-content' && 'row-reverse'}
                          width={'100%'}>

                        <Cell {...image_width}>
                            <Text tag={'h1'}>{title}</Text>
                            <Text tag={'p'}>{content}</Text>
                        </Cell>

                        <Cell {...content_width}>
                            <Image src={image}/>
                        </Cell>

                    </HBox>
                    :
                    <Element textAlign={align}>
                        <Text tag={'h1'}>{title}</Text>
                        <Image src={image} maxWidth={image_max_width}/>
                        <Text tag={'p'}>{content}</Text>
                    </Element>
                }


            </Wrapper>
        )
    }

    static defaultProps = {
        imageSize: 3,
    }
}

export default TemplateDefault;

const Wrapper = styled.div`
    display: ${props => props.direction === 'horizontal' ? 'flex' : 'block'}
`;