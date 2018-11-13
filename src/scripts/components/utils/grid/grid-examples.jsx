import React from 'react';
import {PageWrapper} from "../../templates/page-wrapper.jsx";
import Grid from "./grid.jsx";
import {Container} from "../../style/style";

class GridExamples extends React.Component {
    render() {
        const htmls = [
            <img src={'http://admin.youdoadventures.com/wp-content/uploads/2018/08/barvaz_meshuyash.jpg'}/>,
            <img src={'http://admin.youdoadventures.com/wp-content/uploads/2018/08/nahlieli.jpg'}/>,
            <img src={'http://admin.youdoadventures.com/wp-content/uploads/2018/08/tor_mazui.jpg'}/>,
            <img src={'http://admin.youdoadventures.com/wp-content/uploads/2018/08/barvaz_meshuyash.jpg'}/>,
            <img src={'http://admin.youdoadventures.com/wp-content/uploads/2018/08/nahlieli.jpg'}/>,
            <img src={'http://admin.youdoadventures.com/wp-content/uploads/2018/08/tor_mazui.jpg'}/>,
            <img src={'http://admin.youdoadventures.com/wp-content/uploads/2018/08/barvaz_meshuyash.jpg'}/>,
            <img src={'http://admin.youdoadventures.com/wp-content/uploads/2018/08/nahlieli.jpg'}/>,
            <img src={'http://admin.youdoadventures.com/wp-content/uploads/2018/08/tor_mazui.jpg'}/>,
            <img src={'http://admin.youdoadventures.com/wp-content/uploads/2018/08/barvaz_meshuyash.jpg'}/>,
            <img src={'http://admin.youdoadventures.com/wp-content/uploads/2018/08/nahlieli.jpg'}/>,
            <img src={'http://admin.youdoadventures.com/wp-content/uploads/2018/08/tor_mazui.jpg'}/>,
            <img src={'http://admin.youdoadventures.com/wp-content/uploads/2018/08/barvaz_meshuyash.jpg'}/>,
            <img src={'http://admin.youdoadventures.com/wp-content/uploads/2018/08/nahlieli.jpg'}/>,
            <img src={'http://admin.youdoadventures.com/wp-content/uploads/2018/08/tor_mazui.jpg'}/>,
            <img src={'http://admin.youdoadventures.com/wp-content/uploads/2018/08/barvaz_meshuyash.jpg'}/>,
            <img src={'http://admin.youdoadventures.com/wp-content/uploads/2018/08/nahlieli.jpg'}/>,
            <img src={'http://admin.youdoadventures.com/wp-content/uploads/2018/08/tor_mazui.jpg'}/>
        ];

        return (
            <PageWrapper>
                <Container>
                    <Grid className={'test'}
                          cells={htmls}
                          gutter={'1px'}
                          cellSize={{min: '100%', xs: '50%', sm: '33.33%', md: '25%', lg: '20%' }}>
                        {htmls}
                    </Grid>
                </Container>
            </PageWrapper>
        )
    }
}

export default GridExamples;