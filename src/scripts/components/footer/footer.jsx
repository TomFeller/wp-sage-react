import React from 'react';
import {Container} from 'reactstrap';
import Navigation from "../navbar/navigation";

class Footer extends React.Component {

    render() {
        const {color} = this.props;
        return (
            <footer id={'site-footer'}
                    className={`site-footer
                    ${color && `bg-${color}`}`}>

                <Container>
                    <Navigation expand={'md'}
                                color={color && color}
                                itemColor={'#fff'}/>
                </Container>

            </footer>
        )
    }
}

export default Footer;