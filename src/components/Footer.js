import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Logo from "../assets/images/icons8-portfolio-50.png";
import NavIcon1 from "../assets/images/nav-icon1.svg";
import NavIcon2 from "../assets/images/nav-icon2.svg";
import NavIcon3 from "../assets/images/nav-icon3.svg";

export  const Footer = () =>{
    return(
        <footer className = "footer">
        <Container>
            <Row className="align-item-center row">
                <Col sm={6} className="portfolio">
                     <img src={Logo} alt="logo"></img>
                     <p>Khushi's Portfolio</p>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                     <div className="social-icon">
                     <a href="https://www.linkedin.com/in/khushi-mhasange-207278226" ><img src = {NavIcon1} alt="socials"/></a>
                    <a href="https://github.com/KhushiMhasange" ><img src = {NavIcon2} alt="github"/></a>                   
                    <a href="https://www.instagram.com/khushi_woke_up/" ><img src = {NavIcon3} alt=""/></a>
                 </div>
                 <p>CopyRight 2023. All Right Reserved</p>
                </Col>
            </Row>
        </Container>
        </footer>
    )
}