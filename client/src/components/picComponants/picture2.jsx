import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'
class CarousalPictures2 extends Component {
 
    render() {
        return (
            <div className="pic">
                
                    <Carousel>
                        <Carousel.Item>
                            <img
                                src="pictures/maldivas.jpg"
                                alt="EMEYE"
                                width="300px"
                                height="300px"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src="pictures/den.jpg"
                                alt="Third slide"
                                width="300px"
                                height="300px"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src="pictures/den.jpg"
                                alt="Third slide"
                                width="300px"
                                height="300px"
                            />
                        </Carousel.Item>

                    </Carousel>
                  


            </div>



        )
    }
}
export default CarousalPictures2;


//button
//             <div>
//                 <Button variant="primary" size="lg" active>
//                     Primary button
//                     glyphicon glyphicon-search
//                 </Button>{' אגכךלשגדךלכחל'}
//             </div>
//         )


//     }
// }

// export default Name;