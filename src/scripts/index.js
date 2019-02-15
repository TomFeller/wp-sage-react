import React from 'react';
import {render} from 'react-dom';

import DataActions from 'flux/actions/DataActions.js';

import PageHeader from 'components/layout/header/app-header';
import Home from 'components/home';
import PageAbout from 'components/pages/page-about';
import PageContact from 'components/pages/page-contact';
import Archive from 'components/templates/archive';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import {Single} from "./components/templates/single";
import AccordionExamples from "./components/utils/accordion/accordion-examples.jsx";
import GridExamples from "./components/utils/grid/grid-examples.jsx";
import PanelExamples from "./components/utils/panel/panel-examples";
import ButtonExamples from "./components/utils/button/button-examples";
import ModalExamples from "./components/utils/modal/modal-examples";
import TextExamples from "./components/utils/text/text-examples";
import DataStore from "./flux/stores/DataStore";

;


class AppInitializer {

    templates = {
        'about': PageAbout,
        'contact': PageContact,
        'archive': Archive,
        'accordion-examples': AccordionExamples,
        'grid-examples': GridExamples,
        'text-examples': TextExamples,
        'panel-examples': PanelExamples,
        'button-examples': ButtonExamples,
        'modal-examples': ModalExamples,
        'post': Single
    };

    buildRoutes(data) {
        const allData = data.posts.concat(data.pages);

        console.log('allData', allData);
        return (
            allData.map((post, i) => {
                const isPost = post.type === 'post';
                const C = isPost ? this.templates.post : this.templates[post.slug];

                if (C) {
                    return (
                        <Route
                            key={i}
                            component={(props) => <C {...props}
                                                     {...post}/>}
                            path={isPost ? `/post/${post.slug}` : `/${post.slug}`}
                            exact
                        />
                    )
                }
            })
        )
    }

    run() {
        DataActions.getPages((response) => {
            render(
                <Router>
                    <div>

                        <PageHeader color={'primary'}/>

                        <Switch>
                            <Route path="/" component={Home} exact/>

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
