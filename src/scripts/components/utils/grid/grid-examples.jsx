import React from 'react';
import {PageWrapper} from "../../templates/page-wrapper.jsx";
import Grid from "./grid.jsx";
// import {Container} from "../../style/style";
import {Container, Row, Col, Jumbotron, Button} from 'reactstrap';

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
                <Container fluid>
                    <Jumbotron fluid className={'background-primary'}>
                        <h1 className="display-5">Hello, world!</h1>
                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-2" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <p className="lead">
                            <Button color="primary">Learn More</Button>
                        </p>
                    </Jumbotron>
                    <Row>
                        {htmls.map((item, i) => <Col key={i} xs={2} >bla</Col> )}
                    </Row>
                </Container>
            </PageWrapper>
        )
    }
}

export default GridExamples;