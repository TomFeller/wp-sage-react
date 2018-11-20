import React from 'react';

class Image extends React.Component {
    render () {
        const {src, width} = this.props;
        return (
            <img src={src} width={width ? width : '100%'} style={{maxWidth: '100%'}}/>
        )
    }
}

export default Image;