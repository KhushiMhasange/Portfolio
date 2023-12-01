import React from "react";
import { Container,Row,Col,Nav, Tab } from "react-bootstrap";
import { Projectcards } from "./Projectcards";
import colorSharp2 from "../assets/images/color-sharp2.png";
import projImg1 from "../assets/images/proj-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import TrackVisibility from "react-on-screen";
import 'animate.css';


export const Projects=()=>{

    const projects = [
      {
        title : "Mental Health Compass",
        description : "Design and development",
        imgUrl: projImg1,
      },
      {
        title : "Text Summarization",
        description : "Design and development",
        imgUrl: projImg2,
      },
      {
        title : "Hair Day",
        description : "Design and development",
        imgUrl: projImg3,
      },
    ];
    return(
     <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                  {({isVisible})=>
                <div className={isVisible ?"animate__animated animate__slideInUp":""}>
                <h2>Projects</h2>
                <p>lorem ipsum</p>
                </div>}
                </TrackVisibility>
                <Tab.Container id="project-tabs" defaultActiveKey = "first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab one</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab second</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Tab third</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project,index)=>{
                                    return(
                                       <Projectcards
                                        key={index}
                                       {...project}
                                       />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    
                    </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="right-gradient"></img>
     </section>
    )
}