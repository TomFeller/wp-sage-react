import React from 'react';
import {Row, Col, Image, Card, Button, Carousel} from 'react-bootstrap';

class TemplateSlider extends React.Component {
    render() {
        const {children, width, center} = this.props;
        const {xs, sm, md, lg} = this.props;

        return (
            <div style={{
                width: width && `${width}px`,
                marginRight: center && 'auto',
                marginLeft: center && 'auto'
            }}>
                <Carousel color={'primary'}>
                    {children.map((child, c) => {
                        return (
                            <Carousel.Item key={c}>
                                {child}
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
        )
    }

    static defaultProps = {
        cellSize: 4,
    }
}

export default TemplateSlider;