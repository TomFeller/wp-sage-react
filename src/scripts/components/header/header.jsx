import React from 'react';
import {Link} from 'react-router-dom';
import DataStore from '../../flux/stores/DataStore.js'

class Header extends React.Component {

    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function (page) {
            return page.menu_order;
        }]); // Sort pages by order

        return (
            <header id="site-header" className="site-header" style={{marginBottom: '10px'}}>

                <Link to="/">Home</Link>

                {allPages.map((page) => {
                    if (page['slug'] !== 'home') {
                        return (
                            <Link key={page.id}
                                  to={`/${page.slug}`}
                            style={{fontSize: '1.5rem', padding: '0 .5rem'}}>
                                {page.title.rendered}
                            </Link>
                        )
                    }
                })}

            </header>
        )
    }
}

export default Header;