import React from 'react';
import {Button, Popover, PopoverHeader, PopoverBody} from 'reactstrap';

class PopoverItem extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        const {
                target,
                label,
                placement,
                title,
                content,
                className,
                color
            } = this.props,
            {popoverOpen} = this.state,
            id = 'popover-' + target;

        return (
            <div>
                <Button className={className}
                        color={color}
                        id={id}
                        onClick={this.toggle}>
                    {label}
                </Button>

                <Popover placement={placement}
                         isOpen={popoverOpen}
                         target={id}
                         toggle={this.toggle}>
                    <PopoverHeader>{title}</PopoverHeader>
                    <PopoverBody>{content}</PopoverBody>
                </Popover>

            </div>
        );
    }
}

export default PopoverItem;