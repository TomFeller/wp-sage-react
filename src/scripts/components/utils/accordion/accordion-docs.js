// Accordion Component

/*
Props:

sections: Array with Object -> [{header: 'header'; content: 'content'}]. Examples below  required
className: string (create accordion-name class )
collapsible: boolean
minOne: boolean -> define if minimum 1 section should be open;
sectionActive: Number
colors: header, headerActive, headerHover, content (color, background each)
 */


/* ***** Examples: ***** */

const objects = [{
    title: 'first title',
    content: 'first content'
}, {
    title: 'second title',
    content: 'second content'
}];

const htmls = [{
    header: <h2>HEADER</h2>,
    content: <Bla/>
}, {
    header: <h3>HEADER 2</h3>,
    content: <p>CONTENT 2</p>
}, {
    header: <h4>HEADER 3</h4>,
    content: <section>CONTENT 3</section>
}, {
    header: <div>HEADER 4</div>,
    content: <div>CONTENT 4</div>
}];

const component = (
    <Accordion sections={htmls}
               className={'test'}
               collapsible
               minOne/>
);