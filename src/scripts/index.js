import React from 'react';
import {render} from 'react-dom';
import DataActions from 'flux/actions/DataActions.js';

import Header from 'components/Header.js';
import Home from 'components/Home.js';
import About from 'components/About.js';
import Contact from 'components/Contact.js';
import Archive from 'components/Archive.js';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import Product from "components/pages/Product";
import Footer from "components/Footer";
import Main from "./components/Main";


class AppInitializer {

    templates = {
        'about': About,
        'contact': Contact,
        'archive': Archive,
        'put-your-skinniz-on': Product,
        'its-all-about-you': Product,
        'dress-up-your-device': Product
    };

    buildRoutes(data) {
        console.log('data', data);
        return data.pages.concat(data.posts).concat(data.products).map((page, i) => {

            const C = this.templates[page.slug];
            return (
                <Route
                    key={i}
                    component={(props) =>
                        <Main Content={C}
                              pageData={page}
                              props={props}/>}
                    path={`/${page.slug}`}
                    page={page}
                    exact
                />
            )
        })
    }

    run() {
        DataActions.getPages((response) => {

            const HomePage = () => {
                return (
                    <Main page={response.pages.find(page => page.name === 'homepage')}
                          isHomePage={true}
                          Content={Home}
                    />
                )
            };
            render(
                <Router>
                    <div>
                        <Switch>
                            <Route path="/" component={HomePage} exact/>

                            {this.buildRoutes(response)}

                            <Route render={() => {
                                return <Redirect to="/"/>
                            }}/>
                        </Switch>
                    </div>
                </Router>

                , document.getElementById('app')
            );
        });
    }
}

new AppInitializer().run();
