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
                    return <img src={item.icon_1} width={30}/>;
                case 2:
                    return <img src={item.icon_2} width={30}/>;
                case 3:
                    return <img src={item.icon_3} width={40}/>;
                case 4:
                    return <img src={item.icon_4} width={30}/>;
            }
        };

        return (
            <a href={item.href ? `${item.href}` : 'javascript:void(0)'}
               onMouseOver={toggleTooltip} id={`tooltip-${i}`}>
                <Circle size={50}
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