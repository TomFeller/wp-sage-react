import React from 'react';
import {Container} from 'reactstrap';
import Navigation from "../navbar/navigation";

class Header extends React.Component {

    render() {
        const {color} = this.props;
        return (
            <header id={'site-header'}
                    className={`site-header
                    ${color && `bg-${color}`}`}>

                <Container>
                    <Navigation expand={'md'}
                                color={color && color}
                                itemColor={'#fff'}/>
                </Container>

            </header>
        )
    }
}

export default Header;