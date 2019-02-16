import React from 'react';

import {Gutter} from "../style/variables";

import TemplateDefault from "../utils/templates/template-default";
import TemplateCenter from "../utils/templates/template-center";
import TemplateGrid from "../utils/templates/template-grid";
import TemplateSlider from "../utils/templates/template-slider";
import Text from "../utils/text/text";
import Image from "../utils/image/image";

class Page extends React.Component {

    getTemplateType(template) {
        let Template = '';
        switch (template.type) {
            case 'default':
                Template = TemplateDefault;
                break;
            case 'slider':
                Template = TemplateSlider;
                break;
            case 'center':
                Template = TemplateCenter;
                break;
            case 'grid':
                Template = TemplateGrid;
                break;
        }

        return Template;
    }

    render() {
        const {title, showTitle, acf} = this.props;
        const Template = this.getTemplateType(acf.page_layout);

        console.log(this.props);
        return (
            <div className={'app-section'}
                 style={{padding: `${Gutter.sm} 0`}}>

                {showTitle && <Text tag={'h1'}
                                    className={'text-center'}
                                    dangerouslySetInnerHTML={{__html: title}}/>}

                <Template
                          {...this.props}/>

            </div>
        )
    }

    static defaultProps = {
        title: 'כותרת עמוד',
        children: []
    }
}

export default Page;