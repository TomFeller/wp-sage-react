import React from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';
import classnames from 'classnames';

class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        const {items} = this.props;
        return (
            <div>
                <Nav tabs>
                    {items.map((tab, i) => {
                        return (
                            <NavItem key={i}>
                                <NavLink
                                    className={classnames({active: this.state.activeTab === i})}
                                    onClick={() => {
                                        this.toggle(i);
                                    }}>
                                    {tab.label}
                                </NavLink>
                            </NavItem>
                        )
                    })}
                </Nav>

                <TabContent activeTab={this.state.activeTab}>
                    {items.map((tab, i) => {
                        return (
                            <TabPane key={i} tabId={i}>
                                {tab.content}
                            </TabPane>
                        )
                    })}
                </TabContent>
            </div>
        );
    }
}

export default Tabs;