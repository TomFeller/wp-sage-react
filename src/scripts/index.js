import {render}             from 'react-dom';
import DataActions          from 'flux/actions/DataActions.js';

import Header               from 'components/templates/Header.js';
import Menu               from 'components/templates/Menu.js';
import Home                 from 'components/pages/Home.js';
import About                from 'components/pages/About.js';
import Contact              from 'components/pages/Contact.js';
import Archive              from 'components/pages/Archive.js';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';


class AppInitializer {

    templates = {
        'about': About,
        'contact': Contact,
        'archive': Archive
    }

    buildRoutes(data){
        return data.pages.map((page, i) => {
            return(
                <Route
                    key={i}
                    component={this.templates[page.slug]}
                    path={`/${page.slug}`}
                    exact
                /> 
            )
        })     
    }

    run() {
        DataActions.getPages((response)=>{
            render(
                <Router>
                    <div>
                        <Header />

                        <Switch>
                            <Route path="/" component={ Home } exact />

                            {this.buildRoutes(response)}
                            <Route render={() => { return <Redirect to="/" /> }} />
                        </Switch> 
                    </div>
                </Router>

                , document.getElementById('app')
            );
        });
    }
}

new AppInitializer().run();
