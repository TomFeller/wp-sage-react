import React from 'react';
import Image from "./image/image";

class SiteLogo extends React.Component {
    render() {
        const {width} = this.props;
        return (
            <Image width={width ? width : '100px'}
                   src={'http://oleo-admin.tf-interactive.com/wp-content/uploads/2019/04/oleo_logsimbol_big.png'}
                   style={{display: ' block', margin: 'auto'}}/>
        )
    }
}

export default SiteLogo;