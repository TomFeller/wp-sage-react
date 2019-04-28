import React from 'react';
import Circle from "../shapes/circle";

class IconSwitcher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIcon: 1
        };



        this.switchIcon = this.switchIcon.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(() => this.switchIcon(), 2000);
    }

    switchIcon() {
        const {activeIcon} = this.state;

        this.setState({
            activeIcon: activeIcon + 1 >= 4 ? 1 : activeIcon + 1
        })

    }

    render() {
        const {toggleTooltip, item, i} = this.props;
        const {activeIcon} = this.state;

        const icon = () => {
            switch (activeIcon) {
                case 1:
                    return <item.icon_1 size={20} color={'#000'}/>;
                case 2:
                    return <item.icon_2 size={20} color={'#000'}/>;
                case 3:
                    return <item.icon_3 size={20} color={'#000'}/>;
                case 4:
                    return <item.icon_4 size={20} color={'#000'}/>;
            }
        };

        return (
            <a href={item.href ? `${item.href}` : 'javascript:void(0)'}
               onMouseOver={toggleTooltip} id={`tooltip-${i}`}>
                <Circle size={40}
                    // border={'1px solid #000'}
                    // padding={Gutter.sm}
                        margin={'0 auto'}
                        background={'transparent'}
                        pointer>
                    {icon()}
                </Circle></a>
        )
    }
}

export default IconSwitcher;