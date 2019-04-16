import React from 'react';
import {GridWrapper, GridCell} from './grid-style';

class Grid extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {cells, className, gutter, cellSize, children} = this.props;
console.log(cellSize)
        const classNames = ['grid', className].join(className ? ' grid-' : ''),
            gridContent = children.map((cell, s) => {



                return (
                    <GridCell className={'grid_cell'}
                              data-index={s}
                              key={s}
                              gutter={gutter}
                              size={cellSize}>
                        {cell}
                    </GridCell>
                )
            });

        return (
            <GridWrapper className={classNames}>
                {gridContent}
            </GridWrapper>
        )
    }

    static defaultProps = {
        gutter: '10px',
        cellSize: {
            min: '100%',
            xs: '100%',
            sm: '50%',
            md: '33.3333%',
            lg: '25%'
        }
    };

}


export default Grid;

