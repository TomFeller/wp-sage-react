import React from 'react';
import {SiteContent} from "../../templates/page-wrapper.jsx";
import Panel from "./panel.jsx";
import {PanelBody, PanelImage, PanelHeader, PanelContent, PanelFooter} from "./panel-style";
import {Container, FontSize, H1, H2, H3, H4, H5, H6} from "../../style/style";
import Grid from "../grid/grid";
import Button from "../button/button";

class PanelExamples extends React.Component {
    render() {
        return (
            <SiteContent>
                <Container>
                    <Grid>
                        <Panel className={'test'}>
                            <PanelImage
                                src={'https://wallpaperbrowse.com/media/images/desktop-year-of-the-tiger-images-wallpaper.jpg'}/>
                            <PanelBody>
                                <PanelHeader>HEADER</PanelHeader>
                                <PanelContent>CONTENT</PanelContent>
                                <PanelFooter>FOOTER</PanelFooter>
                            </PanelBody>
                        </Panel>

                        <Panel className={'test'}>
                            <PanelBody>
                                <PanelHeader>
                                    <H2>Bla</H2>
                                    <H3>Blis</H3>
                                </PanelHeader>
                            </PanelBody>

                            <PanelImage
                                src={'https://wallpaperbrowse.com/media/images/desktop-year-of-the-tiger-images-wallpaper.jpg'}/>

                            <PanelBody>
                                <PanelContent>CONTENT</PanelContent>
                                <PanelFooter>
                                    <Button size={FontSize.sm}>click</Button>
                                </PanelFooter>
                            </PanelBody>

                        </Panel>
                    </Grid>
                </Container>
            </SiteContent>
        );
    }
}

export default PanelExamples;