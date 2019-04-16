import React from 'react';
import ScrollToTop from "../utils/scroll-to-top/scroll-to-top";
import Header from "./header/app-header";
import Footer from "./footer/app-footer";

class AppLayout extends React.Component {
    render() {
        const {
            Content,
            page,
            props,
            paddingTop
        } = this.props;

        console.log('page', page);

        const headerHeight = 90;

        return (
            <ScrollToTop>

                <Header color={'info'}
                        height={headerHeight}/>

                <Content {...props}
                         {...page}/>

                <Footer color={'primary'}/>

            </ScrollToTop>
        )
    }
}

export default AppLayout;