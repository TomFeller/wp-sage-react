import React from 'react';
import {render} from 'react-dom';

import DataActions from 'flux/actions/DataActions.js';

import Header from 'components/header/header';
import Home from 'components/home';
import About from 'components/pages/about';
import Contact from 'components/pages/contact';
import Archive from 'components/templates/archive';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import Single from 'components/templates/single';
import AccordionExamples from "./components/utils/accordion/accordion-examples.jsx";
import GridExamples from "./components/utils/grid/grid-examples.jsx";
import PanelExamples from "./components/utils/panel/panel-examples";
import ButtonExamples from "./components/utils/button/button-examples";
import ModalExamples from "./components/utils/modal/modal-examples";
import TextExamples from "./components/utils/text/text-examples";
import Footer from "./components/footer/footer";
import SvgBackground from "./components/utils/svg/svg-background";


class AppInitializer {

    templates = {
        'about': About,
        'contact': Contact,
        'archive': Archive,
        'accordion-examples': AccordionExamples,
        'grid-examples': GridExamples,
        'text-examples': TextExamples,
        'panel-examples': PanelExamples,
        'button-examples': ButtonExamples,
        'modal-examples': ModalExamples,
        'post': Single,
        'article': Single,
        'treatments': Single,
    };

    buildRoutes(data) {
        const allData = data.posts
            .concat(data.pages)
            .concat(data.treatments)
            .concat(data.articles)
            .concat(data.recommendations)
            .concat(data.videos);

        return (
            allData.map((post, i) => {
                const {type, slug} = post;
                const isPost = post.type === 'post';
                const isTreatment = post.type === 'treatments';
                const C = isTreatment ? this.templates.treatments : isPost ? this.templates.post : this.templates[slug];

                const pathname = isTreatment ? `/treatments/${slug}` : isPost ? `/post/${slug}` : `/${slug}`;

                return (
                    <Route
                        key={i}
                        component={(props) => <C {...props}
                                                 {...post}/>
                        }
                        path={pathname}
                        exact
                    />
                )
            })
        )
    }

    run() {
        DataActions.getPages((response) => {
            render(
                <Router>
                    <div>

                        <Header color={'primary'} fixed/>

                        <Switch>
                            <Route path="/" component={Home} exact/>

                            {this.buildRoutes(response)}
                            <Route render={() => {
                                return <Redirect to="/"/>
                            }}/>
                        </Switch>

                        <Footer color={'secondary'}/>
                    </div>
                </Router>

                , document.getElementById('app')
            );
        });
    }
}

new AppInitializer().run();
