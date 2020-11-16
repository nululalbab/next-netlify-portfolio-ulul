import {Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Collapsible from 'react-collapsible';

const CardExperiences = (props) => {
  let { file, description } = props.image
  // document.getElementsByClassName('body-text')
  console.log(props.image)
  // if (process.browser) {
  // document.querySelector(".body-text").innerHTML = props.body
  // }
  return (
    <div >
  
      
      <Card  style={{margin: "20px","borderRadius":"20px","border":"0", padding: "20px 50px 20px 50px", boxShadow: "1px 1px 5px #909090"}}>
        <Row className="card-section" >
          <Col lg={5}>
            <CardImg top width="100%" src={file.url} alt={description} />
          </Col>
          <Col lg={1}>
          </Col>
          <Col lg={6} >
            <CardTitle  tag="h5">{props.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{props.subtitle}</CardSubtitle>
            <CardText className="body-text" style={{textAlign: "justify"}}>
            <div
            dangerouslySetInnerHTML={{
              __html: props.body
            }} ></div>
            </CardText>
            <Button> Read More
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default CardExperiences;