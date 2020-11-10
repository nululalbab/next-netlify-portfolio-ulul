import React from 'react';
import { Jumbotron, Button, Container, Row, Col, Media  } from 'reactstrap';


const Section = ({title, subtitle,hint,image}) => {

    let { file, description } = image
    return (
    <div>
        <Container>
        <Row>
        <Col xs="6">
            <Jumbotron>
            {/* <h1 className="display-8">{title}</h1> */}
            <h1 className="display-8">Shoesmart : Better Workflow, Clear Roadmap, and Focused Goal</h1>
            <p className="lead">{subtitle}</p>
                <hr className="my-2" />
                <p>{hint}</p>
                <p className="lead">
                <Button color="primary">Read More</Button>
                </p>
            </Jumbotron>
        </Col>
        <Col xs="6">
        {/* <Media  src={`https:${file.url}`} /> */}
        <Media  src='/logo-shoesmart.png' />
        </Col>
        </Row>
    
    </Container>
    
    </div>
    
    );
};

export default Section;