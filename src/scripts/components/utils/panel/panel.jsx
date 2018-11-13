import React from 'react';
import {PanelWrapper, PanelHeader, PanelContent, PanelFooter} from './panel-style';
import {Gutter} from "../../style/style";

class Panel extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {header, content, footer, className, gutter, children} = this.props;
        const classNames = ['panel', className].join(className ? ' panel-' : '');


        return (
            <PanelWrapper className={classNames} gutter={gutter}>
                {children}
            </PanelWrapper>
        )
    }

    static defaultProps = {
        gutter: Gutter.sm
    };

}


export default Panel;

