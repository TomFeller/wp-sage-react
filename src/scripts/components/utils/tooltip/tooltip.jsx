import React from 'react';
import { Tooltip } from 'reactstrap';

class TooltipItem extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }
    render() {
        const {id, label, placement, target, toolTipContent} = this.props,
            {tooltipOpen} = this.state;
        return (
            <div>
                <div id={id && id}>{label}</div>
                <Tooltip placement={'right'}
                         isOpen={tooltipOpen}
                         target={target}
                         toggle={this.toggle}>
                    {toolTipContent}
                </Tooltip>
            </div>
        )
    }
}

export default TooltipItem;