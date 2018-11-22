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
import DataActions from "../../flux/actions/DataActions";

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
            menuItems: parents
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

        const {menuItems} = this.state;
        const {expand, color, itemColor} = this.props;

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
                            {menuItems && menuItems.map((page, p) => {
                                return (
                                    <NavItem key={p} className={'px-3'}>
                                        <Link key={page.id}
                                              to={`/${page['slug']}`}
                                              style={{color: itemColor ? itemColor : '#000'}}>
                                            {page.title.rendered}
                                        </Link>
                                    </NavItem>
                                )
                            })}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;