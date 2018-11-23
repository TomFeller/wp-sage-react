import React from 'react';

class Image extends React.Component {
    render () {
        const {src, width, height} = this.props;
        return (
            <img src={src}
                 width={width ? width : '100%'}
                 height={height ? height : 'initial'}
                 style={{maxWidth: '100%'}}/>
        )
    }
}

export default Image;