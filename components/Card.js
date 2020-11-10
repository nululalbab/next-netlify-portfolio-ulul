import {Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Collapsible from 'react-collapsible';

const CardExperiences = (props) => {
  return (
    <div >
      
      <Card  style={{margin: "20px","borderRadius":"20px","border":"0", padding: "20px 50px 20px 50px", boxShadow: "1px 1px 5px #909090"}}>
        <Row className="card-section" >
          <Col lg={5}>
            <CardImg top width="100%" src="/image-apple.png" alt="Card image cap" />
          </Col>
          <Col lg={1}>
          </Col>
          <Col lg={6} >
            <CardTitle  tag="h5">Apple Developer Academy @UC</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Product Manager</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Collapsible trigger="Read More">
              <p>This is the collapsible content. It can be any element or React component you like.</p>
              <p>It can even be another Collapsible component. Check out the next section!</p>
            </Collapsible>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default CardExperiences;