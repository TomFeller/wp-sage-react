import React from 'react';
import styled from 'styled-components';
import {Post} from "../../templates/post";

class Masonary extends React.Component {
    render() {
        const {items} = this.props;
        return (
            <GridWrapper>
                {items.map((item, i) => {
                    return (
                        <div key={i}>
                            <Post id={item.id}
                                  className={item['slug']}
                                  {...item}/>
                        </div>
                    )
                })}
            </GridWrapper>
        )
    }
}

export default Masonary;

const GridWrapper = styled.div`
    column-count: 3;
    column-gap: 1em;
    .item {
      padding: 1em;
      margin: 0 0 1.5em;
    }
`;