import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
class CarousalPictures extends Component {

    render() {
        return (
            <div className="pic">

                <Carousel>
                    <Carousel.Item>
                        <img
                            src="pictures/as.jpg"
                            alt="EMEYE"
                            width="300px"
                            height="300px"
                        />
                      
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="pictures/b.jpg"
                            alt="Third slide"
                            width="300px"
                            height="300px"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="pictures/a.jpg"
                            alt="Third slide"
                            width="300px"
                            height="300px"
                        />
                    </Carousel.Item>

                </Carousel>
                {/* <h3>And I'm a Photographer</h3>
                        <button>Hire me</button> */}
            </div>



        )
    }
}
export default CarousalPictures;

            // <div>
            //     <Carousel>
            //         <Carousel.Item>
            //             <img

            //                 className="d-block w-100"
            //                 src="maldivas.jpg"
            //                 alt="EMEYE"
            //                 width="30%"
            //                 height="30%"
            //             />
            //             <Carousel.Caption>
            //                 <h3>First slide label</h3>
            //                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            //             </Carousel.Caption>
            //         </Carousel.Item>
            //         <Carousel.Item>
            //             <img
            //                 className="d-block w-100"
            //                 src="mentravel.gif"
            //                 alt="Third slide"
            //                 width="30%"
            //                 height="30%"
            //             />

            //             <Carousel.Caption>
            //                 <h3>Second slide label</h3>
            //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            //             </Carousel.Caption>
            //         </Carousel.Item>
            //         <Carousel.Item>
            //             <img
            //                 className="d-block w-100"
            //                 src="den.jpg"
            //                 alt="Third slide"
            //                 width="30%"
            //                 height="30%"
            //             />

            //             <Carousel.Caption>
            //                 <h3>Third slide label</h3>
            //                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            //             </Carousel.Caption>
            //         </Carousel.Item>
            //     </Carousel>
            // </div>