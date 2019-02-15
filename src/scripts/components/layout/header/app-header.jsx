import React from 'react';
 import Navigation from "../../navbar/navigation";

import {Container, Row, Col, Button, } from 'reactstrap';
import {HBox, Element} from 'react-stylesheet';

class Header extends React.Component {

    render() {
        const {color} = this.props;
        return (
            <header id={'app-header'} className={'app-header'}>
                <Container>
                    <HBox justifyContent={'space-between'}>
                        <Element>
                            <Button color={'primary'}>vds</Button>
                        </Element>

                        <Element>
                            <img src={''} className="app-logo" alt="logo" width={100}/>
                        </Element>

                        <Element>
                            <Button color={'secondary'}>Gellor</Button>
                        </Element>
                    </HBox>
                </Container>
            </header>
        )
    }
}

export default Header;