import Fade from 'react-reveal/Fade';
import { Row, Col, Media  } from 'reactstrap';




const About = (props) => {

    
    return (
        <div className='about'>
            <div className='about-content'>
            <Row style={{margin: "20px"}}>
            <Col xs="12" md="4" lg="4"  className="about-image">
            <img src="/profile.png" alt='about iamge' className="image-about"></img> 
            </Col>
            <Col xs="12" md="8"lg="8" className="my-auto">
            <Fade bottom>
            <h1><Fade bottom cascade>About.</Fade></h1>
                <p>Hello, thank you for visiting my page. Allow me introduce myself, you can call me Ulul, I love to make innovation with technology to help people since 8th grade, usually I spend my day on movie-binge and gaming, but I rather go outside and take photo when people eat delicious meal or just a slurp of cofee.</p>
            </Fade>
            </Col>
        </Row>
        
        
        </div>
        <style jsx>{`
        .container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        }
        `}</style>
    </div>
    
    );
};

export default About;