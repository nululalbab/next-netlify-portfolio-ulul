import React from 'react';
import { Jumbotron, Button, Container, Row, Col, Media  } from 'reactstrap';

const Section = (props) => {
    return (
    <div>
        <Container>
        <Row>
        <Col xs="6">
            <Jumbotron>
            <h1 className="display-8">{props.title}</h1>
            <p className="lead">{props.subtitle}</p>
                <hr className="my-2" />
                <p>{props.hint}</p>
                <p className="lead">
                <Button color="primary">Read More</Button>
                </p>
            </Jumbotron>
        </Col>
        <Col xs="6">
            <Media object src={props.picture} alt="Generic placeholder image" />
        </Col>
        </Row>
    
    </Container>
    </div>
    );
};

export default Section;