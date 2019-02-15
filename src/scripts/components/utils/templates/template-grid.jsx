import React from 'react';
import {Row, Col} from 'reactstrap';

class TemplateGrid extends React.Component {
    render() {
        const {children, width, center} = this.props;
        const {xs, sm, md, lg} = this.props;

        return (
            <div style={{
                width: width && `${width}px`,
                marginRight: center && 'auto',
                marginLeft: center && 'auto'
            }}>
                <Row>
                    {children && children.map((child, c) => {
                        return (
                            <Col xs={xs && xs}
                                 sm={sm && sm}
                                 md={md && md}
                                 lg={lg && lg}
                                 key={c}>
                                {child}
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    }

    static defaultProps = {
        cellSize: 4,
    }
}

export default TemplateGrid;