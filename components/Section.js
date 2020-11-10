import React from 'react';
import { Jumbotron, Button, Container, Row, Col, Media  } from 'reactstrap';


const Section = ({title, subtitle,hint,image}) => {

    let { file, description } = image
    return (
    <div>
        <Container>
        <Row>
        <Col xs="12" md={6}>
            <Jumbotron>
            <h1 className="display-8" style={{"word-break": "break-word",}}>{title}</h1>
            <p className="lead">{subtitle}</p>
                <hr className="my-2" />
                <p>{hint}</p>
                <p className="lead">
                <Button color="primary">Read More</Button>
                </p>
            </Jumbotron>
        </Col>
        <Col xs="12" md={6}>
        {/* <Media  src={`https:${file.url}`} /> */}
        {/* <Media  src='/logo-shoesmart.png' /> */}
        </Col>
        </Row>
    
    </Container>
    
    </div>
    
    );
};

export default Section;