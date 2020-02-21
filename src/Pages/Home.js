import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import pic1 from '../Pages/1.jpg';
import pic2 from '../Pages/2.png';
import pic3 from '../Pages/3.png';



class Home extends Component {
    render() {
        return (
            <div className="HomePage">
              <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>React is so Cool :)</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic2}
      alt="Secound slide"
    />

    <Carousel.Caption>
      <h3>Can do almost everything!</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Just Do it!</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        );
    }
}

export default Home;