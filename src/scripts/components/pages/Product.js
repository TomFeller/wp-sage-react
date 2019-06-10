import React from 'react';
import {Element, HBox, VBox} from 'react-stylesheet';
import {PageWrapper} from "../../style/layout";
import {Gutter} from "../../style/variables";
import ProductTopSection from "./ProductTopSection";
import '../../style/css/product.css';
import '../../style/css/member.css';
import ProductBlocks from "./inner-products/product-blocks";
import ProductGrid from "./inner-products/product-grid";
import ProductColumns from "./inner-products/product-columns";

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sectionActive: 0
        };

        this.memberHover = this.memberHover.bind(this);
        this.getMultiplyImagesArray = this.getMultiplyImagesArray.bind(this);
    }

    memberHover(index) {
        const {sectionActive} = this.state;

        this.setState({
            sectionActive: parseInt(sectionActive) === parseInt(index) ? '' : parseInt(index)
        })

    }

    getMultiplyImagesArray(group, length) {
        const arr = [];
        for (let i = 0; i < length; i++) {
            arr.push(i === 0 ? group.image : group[`image_${i + 1}`]);
        }

        return arr;
    }

    render() {
        const {title, content, acf} = this.props;
        const {sectionActive} = this.state;
        const {inner_sections, main_inner_section} = acf;
        const sections = [inner_sections.product_1, inner_sections.product_2, inner_sections.product_3, inner_sections.product_4, inner_sections.product_5];

        return (
            <PageWrapper>
                <Element>
                    {acf.add_main_section && main_inner_section && <ProductTopSection {...main_inner_section}/>}

                    {inner_sections.template !== 'blocks' && <h1 dangerouslySetInnerHTML={{__html: title.rendered}}
                                                                 style={{
                                                                     textAlign: 'center',
                                                                     marginBottom: '0',
                                                                     marginTop: Gutter.lg,
                                                                     fontSize: '4rem',
                                                                     padding: `${Gutter.sm} 0`,
                                                                     color: '#000'
                                                                 }}/>
                    }

                    {content.rendered && content.rendered !== '' &&
                    <h2 dangerouslySetInnerHTML={{__html: content.rendered}}
                        className={`text-center product-name-title ${inner_sections.template === 'blocks' ? 'mt-5 mb-5' : ''}`}
                        style={{color: '#000', marginBottom: Gutter.md, fontSize: '2.5rem'}}/>}

                    {inner_sections.template === 'grid' ?
                        <ProductGrid sections={sections} sectionActive={sectionActive}/> :
                        inner_sections.template === 'blocks' ?
                            <ProductBlocks sections={sections}/> :
                            <ProductColumns sections={sections}/>
                    }

                </Element>
            </PageWrapper>
        )
    }
}

export default Product;

