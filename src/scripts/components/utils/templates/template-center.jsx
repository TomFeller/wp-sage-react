import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';

class TemplateCenter extends React.Component {
    render() {
        const {children, width} = this.props;

        return (
            <div className={'text-center'}
                 style={{width: width && `${width}px`, marginLeft: 'auto', marginRight: 'auto'}}>
                {children}
            </div>
        )
    }

    static defaultProps = {
        children: [
            <h4>title</h4>,
            <Image src={'http://admin.youdoadventures.com/wp-content/uploads/2018/07/default-thumbnail.jpg'}
                   width={'40rem'}/>,
            <div>
                <h2 dangerouslySetInnerHTML={{__html: 'Title'}}/>
                <h4 dangerouslySetInnerHTML={{__html: 'Subtitle'}}/>

                <p dangerouslySetInnerHTML={{__html: 'Description'}}/>
            </div>]
    }
}

export default TemplateCenter;