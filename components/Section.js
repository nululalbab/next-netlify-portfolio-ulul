import React from 'react';
import { Jumbotron, Button, Container, Row, Col, Media  } from 'reactstrap';


// const contentful = require('contentful-management')
// const contentful = require('contentful')
// const client = contentful.createClient({
//   space: 'oko8esu55bb2',
//   accessToken: 'c_36h8YOehb59S535G0uUT1OMg2-eclhDCLrXwEt1fA'
// })

// client.getEntry('2bEZfMoMsxBrCL7PvfJLBZ')
// .then(
//     (entry) => console.log(entry.fields)
//     // data => (entry)
//     )
// .catch(console.error)

// const contentful = require('contentful-management')

// const client = contentful.createClient({
//   accessToken: 'CFPAT-qYbI-unxRHzKTyabdrOS2g0PVQ419nIA3qhb5rhQ9us'
// })

// client.getSpace('oko8esu55bb2')
// .then((space) => space.getEnvironment('master'))
// .then((environment) => environment.getContentTypes())
// .then((response) => console.log(response.items))
// .catch(console.error)

const Section = ({title, subtitle,hint,image}) => {

    let { file, description } = image
    return (
    <div>
        <Container>
        <Row>
        <Col xs="6">
            <Jumbotron>
            <h1 className="display-8">{title}</h1>
            <p className="lead">{subtitle}</p>
                <hr className="my-2" />
                <p>{hint}</p>
                <p className="lead">
                <Button color="primary">Read More</Button>
                </p>
            </Jumbotron>
        </Col>
        <Col xs="6">
        <img  src={`https:${file.url}`} />
        </Col>
        </Row>
    
    </Container>
    </div>
    );
};

export default Section;