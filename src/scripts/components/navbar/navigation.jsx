import React from 'react';
import {Link} from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import DataStore from "../../flux/stores/DataStore";

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function (page) {
            return page.menu_order;
        }]); // Sort pages by order

        const {expand, color, itemColor} = this.props;


        console.log('allPages', allPages);
        return (
            <div>
                <Navbar color={color ? color : 'light'}
                        expand={expand ? expand : 'md'}
                        light>

                    <div className={'px-3'}>
                        <Link to="/" style={{color: itemColor ? itemColor : '#000'}}>Home</Link>
                    </div>

                    <NavbarToggler onClick={this.toggle}/>

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className={'ml-auto'} navbar>
                            {allPages.map((page, p) => {
                                if (page['slug'] === 'about' || page['slug'] === 'contact') {
                                    return (
                                        <NavItem key={p} className={'px-3'}>
                                            <Link key={page.id}
                                                  to={`/${page['slug']}`}
                                                  style={{color: itemColor ? itemColor : '#000'}}>
                                                {page.title.rendered}
                                            </Link>
                                        </NavItem>
                                    )
                                }
                            })}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;