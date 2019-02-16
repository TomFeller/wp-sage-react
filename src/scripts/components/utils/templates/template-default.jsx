import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'reactstrap';
import Image from '../../utils/image/image';
import Text from "../text/text";

class TemplateDefault extends React.Component {
    render() {
        console.log('his.props', this.props);

        const title = this.props.title.rendered,
            image = this.props._embedded["wp:featuredmedia"] && this.props._embedded["wp:featuredmedia"][0].source_url,
            content = this.props.content.rendered;

        const templateOptions = this.props['acf']['template_default_options'];
        const {align, direction, items_order} = templateOptions;
        console.log('items_order', items_order)
        return (
            <Wrapper {...templateOptions}>
                {direction === 'horizontal' ?
                    <Row className={'row-reverse'}>
                        <Col sm={7}>
                            <Text tag={'h1'}>{title}</Text>
                            <Text tag={'p'}>{content}</Text>
                        </Col>
                        <Col sm={5}>
                            <Image src={image}/>
                        </Col>
                    </Row>
                    :
                    <div>
                        <Text tag={'h1'}>{title}</Text>
                        <Image src={image}/>
                        <Text tag={'p'}>{content}</Text>
                    </div>
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