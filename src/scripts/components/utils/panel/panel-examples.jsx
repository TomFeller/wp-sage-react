import React from 'react';
import {PageWrapper} from "../../templates/page-wrapper.jsx";
import Panel from "./panel.jsx";
import {PanelBody, PanelImage, PanelHeader, PanelContent, PanelFooter} from "./panel-style";
import {Container, FontSize, H1, H2, H3, H4, H5, H6} from "../../style/style";
import Grid from "../grid/grid";
import Button from "../button/button";

class PanelExamples extends React.Component {
    render() {
        return (
            <PageWrapper>
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
                                    <h2>Bla</h2>
                                    <h3>Blis</h3>
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
            </PageWrapper>
        );
    }
}

export default PanelExamples;