import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';

class TemplateDefault extends React.Component {
    render() {
        const {children, width, center} = this.props;
        const imageSize = 12 / this.props.imageSize;
        const contentSize = 12 - imageSize; 

        return (
            <div style={{
                width: width && `${width}px`,
                marginRight: center && 'auto',
                marginLeft: center && 'auto'
            }}>
            <Row>
                <Col sm={imageSize}>
                    {children[0]}
                </Col>
                <Col sm={contentSize}>
                    {children[1]}
                </Col>
            </Row>
            </div>
        )
    }

    static defaultProps = {
        imageSize: 3,
        children: [
            <Image src={'http://admin.youdoadventures.com/wp-content/uploads/2018/07/default-thumbnail.jpg'}
                   width={'100%'}/>,
            <div>
                <h2 dangerouslySetInnerHTML={{__html: 'Title'}}/>
                <h4 dangerouslySetInnerHTML={{__html: 'Subtitle'}}/>

                <p dangerouslySetInnerHTML={{__html: 'Description'}}/>
            </div>]
    }
}

export default TemplateDefault;