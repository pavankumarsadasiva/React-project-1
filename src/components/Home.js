import React from "react";

import { Carousel } from "react-bootstrap"


import Coursel1 from "../Images/carousel-1.jpg"
import Coursel2 from "../Images/carousel-2.jpg"
import Coursel3 from "../Images/carousel-3.jpg"

function Home(){

    return(
        <div>
             <Carousel >
                    <Carousel.Item style={{height:"500px",}}>
                        <img
                        className="d-block w-100"
                        src={Coursel1}
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
                        src={Coursel2}
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
                        alt="Third slide" style={{backgroundSize:"100% 100%",height:"100%",width:"100%"}}
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="head1">
                        <div className="head2" >
                            <div>
                                <h3 style={{color:'gray'}}>BECOME A</h3>
                                <h3>UI DEVELOPER</h3>

                            </div>
                            <div style={{paddingLeft: "50px",paddingTop: "20px"}}>
                                <h3 style={{color:"blue" ,fontFamily: "Arial, Helvetica, sans-serif"}}><b>Know More <strong></strong></b></h3>
                            </div>
                        </div>
                        <div className="head3" >
                            <div>
                                <h3 style={{color:"gray"}}>BECOME A</h3>
                                <h3>UI DEVELOPER</h3>

                            </div>
                            <div style={{paddingLeft: "50px",paddingTop: "20px"}}>
                                <h3 style={{color:"blue" ,fontFamily: "Arial, Helvetica, sans-serif"}}><b>Know More <strong></strong></b></h3>
                            </div>
                        </div>
                        <div className="head4" >
                            <div>
                                <h3 style={{color:"gray"}}>BECOME A</h3>
                                <h3>UI DEVELOPER</h3>

                            </div>
                            <div style={{paddingLeft: "50px",paddingTop:" 20px"}}>
                                <h3 style={{color:"blue" ,fontFamily: "Arial, Helvetica, sans-serif"}}><b>Know More <strong></strong></b></h3>
                            </div>
                        </div>
                </div>
                <div>
                        <h2 style={{fontFamily: "Arial, Helvetica, sans-serif",marginTop: "20px", marginLeft: "50px"}}><b>TRENDING COURESES</b></h2>
                        <div style={{display: "flex",marginLeft: "10px",marginTop:" 40px",justifyContent:"space-around"}}>
                                <div className="course" style={{backgroundColor: "whitesmoke" ,width:"300px"}}>
                                    <div className="courese1" style={{display:"flex ", background:"linear-gradient(to right,orange,rgb(255, 0, 200),lime) ",padding: "10px"}}>
                                        <i className="fa-brands fa-angular" style= {{fontSize: "50px", color:"white",marginTop: "30px"}}></i>
                                        <h2 style={{paddingLeft: "10px",color:" white"}}>ANGULAR<br/>DEVELOPMENT<br/>COURSE</h2>
                                    </div>
                                    <div style={{padding:"10px",textAlign:"left"}}>
                                        <p>
                                            Angular Docslink Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.
                                                These Angular docs help you learn .
                                        </p>
                                    </div>
                                    <hr />
                                    <div style={{padding: "10px"}}>
                                        <h3>Reviews</h3>
                                        <div style={{display: "flex"}}>
                                            <div style={{paddingTop:"20px ",color:" rgb(247, 247, 57)"}}>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                
                                            </div>
                                            <div style={{paddingLeft:"50px"}}>
                                                <h3>5.0 (257)</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                        
                        
                                <div className="course" style={{backgroundColor: "whitesmoke",width:"300px"}}>
                                    <div className="courese1" style={{display:"flex ", background:"linear-gradient(to right,orange,lime,yellow) ",padding: "10px"}}>
                                        <i className="fa-brands fa-angular" style= {{fontSize: "50px", color:"white",marginTop: "30px"}}></i>
                                        <h2 style={{paddingLeft: "10px",color:" white"}}>ANGULAR<br/>DEVELOPMENT<br/>COURSE</h2>
                                    </div>
                                    <div style={{padding:"10px",textAlign:"left"}}>
                                        <p>
                                            Angular Docslink Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.
                                                These Angular docs help you learn .
                                        </p>
                                    </div>
                                    <hr />
                                    <div style={{padding: "10px"}}>
                                        <h3>Reviews</h3>
                                        <div style={{display: "flex"}}>
                                            <div style={{paddingTop:"20px ",color:" rgb(247, 247, 57)"}}>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                
                                            </div>
                                            <div style={{paddingLeft:"50px"}}>
                                                <h3>5.0 (257)</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course" style={{backgroundColor: "whitesmoke",width:"300px"}}>
                                    <div className="courese1" style={{display:"flex ", background:"linear-gradient(to right,lime,pink,rgb(255, 0, 200)) ",padding: "10px"}}>
                                        <i className="fa-brands fa-angular" style= {{fontSize: "50px", color:"white",marginTop: "30px"}}></i>
                                        <h2 style={{paddingLeft: "10px",color:" white"}}>ANGULAR<br/>DEVELOPMENT<br/>COURSE</h2>
                                    </div>
                                    <div style={{padding:"10px",textAlign:"left"}}>
                                        <p>
                                            Angular Docslink Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.
                                                These Angular docs help you learn .
                                        </p>
                                    </div>
                                    <hr />
                                    <div style={{padding: "10px"}}>
                                        <h3>Reviews</h3>
                                        <div style={{display: "flex"}}>
                                            <div style={{paddingTop:"20px ",color:" rgb(247, 247, 57)"}}>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                
                                            </div>
                                            <div style={{paddingLeft:"70px",paddingTop:"10px"}}>
                                                <h3>5.0 (257)</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        
                </div>
                <div>
                <div style={{display: "flex",marginLeft: "10px",marginTop:" 40px",justifyContent:"space-around"}}>
                                <div className="course" style={{backgroundColor: "whitesmoke" ,width:"300px"}}>
                                    <div className="courese1" style={{display:"flex ", background:"linear-gradient(to right,orange,rgb(255, 0, 200),lime) ",padding: "10px"}}>
                                        <i className="fa-brands fa-angular" style= {{fontSize: "50px", color:"white",marginTop: "30px"}}></i>
                                        <h2 style={{paddingLeft: "10px",color:" white"}}>ANGULAR<br/>DEVELOPMENT<br/>COURSE</h2>
                                    </div>
                                    <div style={{padding:"10px",textAlign:"left"}}>
                                        <p>
                                            Angular Docslink Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.
                                                These Angular docs help you learn .
                                        </p>
                                    </div>
                                    <hr />
                                    <div style={{padding: "10px"}}>
                                        <h3>Reviews</h3>
                                        <div style={{display: "flex"}}>
                                            <div style={{paddingTop:"20px ",color:" rgb(247, 247, 57)"}}>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                
                                            </div>
                                            <div style={{paddingLeft:"50px"}}>
                                                <h3>5.0 (257)</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                        
                        
                                <div className="course" style={{backgroundColor: "whitesmoke",width:"300px"}}>
                                    <div className="courese1" style={{display:"flex ", background:"linear-gradient(to right,orange,lime,yellow) ",padding: "10px"}}>
                                        <i className="fa-brands fa-angular" style= {{fontSize: "50px", color:"white",marginTop: "30px"}}></i>
                                        <h2 style={{paddingLeft: "10px",color:" white"}}>ANGULAR<br/>DEVELOPMENT<br/>COURSE</h2>
                                    </div>
                                    <div style={{padding:"10px",textAlign:"left"}}>
                                        <p>
                                            Angular Docslink Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.
                                                These Angular docs help you learn .
                                        </p>
                                    </div>
                                    <hr />
                                    <div style={{padding: "10px"}}>
                                        <h3>Reviews</h3>
                                        <div style={{display: "flex"}}>
                                            <div style={{paddingTop:"20px ",color:" rgb(247, 247, 57)"}}>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                
                                            </div>
                                            <div style={{paddingLeft:"50px"}}>
                                                <h3>5.0 (257)</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course" style={{backgroundColor: "whitesmoke",width:"300px"}}>
                                    <div className="courese1" style={{display:"flex ", background:"linear-gradient(to right,lime,pink,rgb(255, 0, 200)) ",padding: "10px"}}>
                                        <i className="fa-brands fa-angular" style= {{fontSize: "50px", color:"white",marginTop: "30px"}}></i>
                                        <h2 style={{paddingLeft: "10px",color:" white"}}>ANGULAR<br/>DEVELOPMENT<br/>COURSE</h2>
                                    </div>
                                    <div style={{padding:"10px",textAlign:"left"}}>
                                        <p>
                                            Angular Docslink Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.
                                                These Angular docs help you learn .
                                        </p>
                                    </div>
                                    <hr />
                                    <div style={{padding: "10px"}}>
                                        <h3>Reviews</h3>
                                        <div style={{display: "flex"}}>
                                            <div style={{paddingTop:"20px ",color:" rgb(247, 247, 57)"}}>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                
                                            </div>
                                            <div style={{paddingLeft:"50px"}}>
                                                <h3>5.0 (257)</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                </div>

         </div>
       
    )
}
export default Home;











































