import React from 'react';
import {Row, Col} from 'reactstrap';
import Grid from "../grid/grid";
import {Cell} from "../cell/cell";
import Image from "../image/image";

class TemplateGrid extends React.Component {
    render() {
        const {children, width, center} = this.props;
        const {xs, sm, md, lg} = this.props;

        const title = this.props.title.rendered,
            image = this.props._embedded["wp:featuredmedia"] && this.props._embedded["wp:featuredmedia"][0].source_url,
            content = this.props.content.rendered;
        const templateOptions = this.props['acf']['template_grid_options'],
            {cells_sizes} = templateOptions;

        console.log(cells_sizes)
        return (
            <div style={{
                width: width && `${width}px`,
                marginRight: center && 'auto',
                marginLeft: center && 'auto'
            }}>
                <Grid cellSize={cells_sizes}>

                    <div>
                        <Image src={image}/>
                    </div>
                    <div>
                        <Image src={image}/>
                    </div>


                </Grid>
            </div>
        )
    }

    static defaultProps = {
        cellSize: 4,
    }
}

export default TemplateGrid;