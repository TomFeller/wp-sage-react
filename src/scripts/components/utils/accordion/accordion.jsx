import React from 'react';
import {AccordionWrapper} from './accordion-style';

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.handleHeaderClick = this.handleHeaderClick.bind(this);
        this.state = {
            activeSections: []
        }
    }

    componentDidMount() {
        const {sectionActive, minOne} =  this.props;

        this.setState({
            activeSections: sectionActive ? [sectionActive] : minOne ? [0] : [],
            minOne: minOne
        })
    }

    handleHeaderClick(e) {
        const {activeSections, minOne} = this.state,
            {collapsible} = this.props,
            section = e.target.closest('.accordion_section'),
            index = parseInt(section.getAttribute('data-index')),
            action = activeSections.some(section => section === index) ? 0 : 1, // 0 = close section; 1 = open section;

            updatesSections = () => {
                switch (action) {
                    case 0:
                        if (!(minOne && activeSections.length === 1)) {
                            activeSections.splice(activeSections.indexOf(index), 1);
                        }
                        break;
                    case 1:
                        if (!collapsible) {
                            activeSections.length = 0
                        }
                        activeSections.push(index);
                        break;
                }

                return activeSections;
            };

        this.setState({
            activeSections: updatesSections()
        })
    }

    render() {
        const {sections, className, color} = this.props,
            {activeSections} = this.state;

        const classNames = ['accordion', className].join(className ? ' accordion-' : ''),
            accordionSections = sections.map((section, s) => {
                const isOpen = activeSections.some(section => section === s);
                return (
                    <section className={`accordion_section ${isOpen ? 'active' : ''}`}
                             data-index={s}
                             key={s}>

                        <header className={'accordion_header'}
                                onClick={this.handleHeaderClick}>
                            {section.header}
                        </header>

                        <article className={'accordion_content'}>
                            {section.content}
                        </article>

                    </section>
                )
            });

        return (
            <AccordionWrapper className={classNames} color={color}>
                {accordionSections}
            </AccordionWrapper>
        )
    }

    static defaultProps = {
        colors: {
            header: {color: '#000', background: '#fff'},
            headerActive: {color: '#000', background: '#fff'},
            headerHover: {color: '#000', background: '#fff'},
            content: {color: '#000', background: '#fff'}
        }
    };
}



export default Accordion;

