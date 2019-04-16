// Panel Component

/*
Props:

className: string (create grid-name class )

 */

/*
components:
    <Panel/>
    <PanelImage/>
    <PanelHeader/>
    <PanelBody/>
    <PanelContent/>
    <PanelFooter/>
*/

/* ***** Examples: ***** */


const component = (
    <Panel className={'test'}>
        <PanelImage
            src={'https://wallpaperbrowse.com/media/images/desktop-year-of-the-tiger-images-wallpaper.jpg'}/>
        <PanelBody>
            <PanelHeader>HEADER</PanelHeader>
            <PanelContent>CONTENT</PanelContent>
            <PanelFooter>FOOTER</PanelFooter>
        </PanelBody>
    </Panel>
);