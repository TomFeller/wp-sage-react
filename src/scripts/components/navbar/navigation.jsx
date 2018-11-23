import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    Dropdown, DropdownItem, DropdownToggle, DropdownMenu
} from 'reactstrap';
import DataStore from "../../flux/stores/DataStore";
import DataActions from "../../flux/actions/DataActions";
import Image from "../utils/image/image";

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
        this.orderingMenu = this.orderingMenu.bind(this);
    }

    componentDidMount() {
        fetch('http://127.0.0.1:88/wordpress/wp-json/menus/v2/header', {
            method: 'GET',
        }).then(
            response => response.json()
        ).then(
            (success) => this.orderingMenu(success)
        ).catch(
            error => console.log(error)
        );
    }

    orderingMenu(fullData) {
        const parents = fullData.filter(item => item.parentId === '0');

        for (let i = 0; i < parents.length; i++) {
            const parent = parents[i];
            parent.children = fullData.filter(item => parseInt(item.parentId) === parent.id);
        }

        this.setState({
            navItems: parents
        })
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        // let allPages = DataStore.getAllPages();
        // allPages = _.sortBy(allPages, [function (page) {
        //     return page.menu_order;
        // }]); // Sort pages by order

        const {navItems} = this.state;
        const {expand, color, itemColor} = this.props;

        return (
            <Wrapper>
                <Navbar expand={expand ? expand : 'md'}>
                    <div className={'px-3'}>
                        <Link to="/" style={{color: itemColor ? itemColor : '#000'}}>
                            <Image src={'http://127.0.0.1:88/wordpress/wp-content/uploads/2017/09/לוגו-לאתר.png'}
                                   width={260}/>
                        </Link>
                    </div>

                    <NavbarToggler onClick={this.toggle}/>

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className={'ml-auto'} navbar>
                            {navItems && navItems.map((nav, p) => {
                                const children = nav.children;
                                if (children.length > 0) {
                                    return (
                                        <NavWithChildren children={children} nav={nav}
                                                         key={p}
                                                         color={itemColor ? itemColor : '#000'}/>
                                    )
                                } else {
                                    return (
                                        <NavItem key={p} className={'mx-2'}>
                                            <Link to={`/${nav.url}`}
                                                  style={{color: itemColor ? itemColor : '#000'}}>
                                                {nav.title}
                                            </Link>
                                            {children.map}
                                        </NavItem>
                                    )
                                }
                            })}
                        </Nav>
                    </Collapse>
                </Navbar>
            </Wrapper>
        )
    }
}

export default Navigation;


class NavWithChildren extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        const {children, nav, color} = this.props;

        return (
            <Dropdown nav
                      isOpen={this.state.dropdownOpen}
                      toggle={this.toggle}
                      className={'mx-2'}>
                <DropdownToggle nav caret style={{color: color, padding: '0'}}>
                    {nav.title}
                </DropdownToggle>
                <DropdownMenu>
                    {children.map((child, c) => {
                        return (
                            <DropdownItem key={c}>
                                <Link to={`/${child.url}`}
                                      style={{color: color}}
                                      className={'px-0'}>
                                    {child.title}
                                </Link>
                            </DropdownItem>
                        )
                    })}
                </DropdownMenu>
            </Dropdown>
        )
    }
}


const Wrapper = styled.div`
    .dropdown-toggle::after {
        margin-right: .5rem;
    }
`;