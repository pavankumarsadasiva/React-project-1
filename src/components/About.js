import React from "react";
//import Header from "./Header";
//import  Carousel  from "bootstrap"
import Coursel1 from "../Images/cat-1.jpg"
import Coursel2 from "../Images/cat-2.jpg"
import Coursel3 from "../Images/cat-3.jpg"
import { Carousel } from "react-bootstrap"


function About(){
    return(
        <div>
               <h1>About us</h1>
               <Carousel fade>
                    <Carousel.Item style={{height:"500px",}}>
                        <img
                        className="d-block w-100"
                        src={Coursel2}
                        alt="First slide"  style={{backgroundSize:"100% 100%",height:"100%",width:"100%"}}
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height:"500px",}}>
                        <img
                        className="d-block w-100"
                        src={Coursel1}
                        alt="Second slide"  style={{backgroundSize:"100% 100%",height:"100%",width:"100%"}}
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height:"500px",}}>
                        <img
                        className="d-block w-100"
                        src={Coursel3}
                        alt="Third slide"  style={{backgroundSize:"100% 100%",height:"100%",width:"100%"}}
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                 </Carousel>

        </div>
    )
}
export default About;