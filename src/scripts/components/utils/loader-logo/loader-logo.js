import React from 'react';
import './loader-logo.css';

class LoaderLogo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: 0
        }


    }

    componentDidMount() {
        setInterval(() => this.changeActive, 300);
    }


    changeActive() {
        const active = this.state.active + 1;
        this.setState({
            active: active > 4 ? 1 : active
        })
    }

    render() {
        const {active} = this.state;
        return (
            <div className='logo-animation'>
                <div className={`logo-animation-item ${active === 1 && 'active'}`}>
                    <div/>
                </div>
                <div className={`logo-animation-item ${active === 2 && 'active'}`}>
                    <div/>
                </div>
                <div className={`logo-animation-item ${active === 4 && 'active'}`}>
                    <div/>
                </div>
                <div className={`logo-animation-item ${active === 3 && 'active'}`}>
                    <div/>
                </div>
            </div>
        )
    }
}

export default LoaderLogo;