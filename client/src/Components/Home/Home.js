import React from "react";
import { Carousel } from "react-bootstrap";
import { FaCar, FaComment, FaSearch } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


import "./Home.css";
function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/bmw7.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/showroom.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>OUR SHOWROOM</h3>
            <p>ALL CAR BRANDS</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Car-Repair.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>REPAIR WORKSHOP</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div
        id="section"
        class="col d-flex flex-wrap justify-content-center text-uppercase align-items-center">
        <h1 class="font-weight-bold mx-1">why choose</h1>
        <h1 className="section-title-special mx-1">DasAuto</h1>
      </div>
      <div className="frontPage">
      <p>
        Here at Autoweb Design, we are specialists in Automotive website design
        and digital solutions. We work with everyone from independent car
        dealerships right through to vehicle manufacturers. Our Automotive
        Website Design and Digital Marketing solutions are designed to convert
        and as we are a data driven agency, we are constantly improving our
        platform to ensure car dealers have the very latest in Automotive
        technology. We pride ourselves in providing excellent customer service
        to our customers and aim to build a relationship with each and every one
        of our customers. We have also developed our own automotive e-commerce
        solution which will be available to all of our customers as standard. If
        you are paying a third party for an e-commerce solution on your
        Automotive website, speak to Autoweb Design and see how you can bring it
        all under one roof.
      </p>


      <div className="blockquote">
  <figure className="blockquote__content">
    <img className="blockquote__image" src="https://www.fijiggle.com/sites/default/files/inline-images/AboutMe.PNG" alt="" />
    <blockquote>&ldquo;Top Class Service - Great people to deal with. They understand the motor trade and what we need in order to sell our products.”</blockquote>
    <figcaption>
      <strong>&mdash; Kim Domenick</strong>, UX Engineer
    </figcaption>
  </figure>
</div>
  

<div
        id="section"
        class="col d-flex flex-wrap justify-content-center text-uppercase align-items-center">
        <h1 class="font-weight-bold mx-1">Our</h1>
        <h1 className="section-title-special mx-1">Services</h1>
      </div>
  
      </div>

      <div className="container" style={{ marginTop: "40px", marginBottom: "20px"}}>
        <div id="one" class="col-sm-6 col-lg-3 text-center my-3">
          <a href="/#" id="icoon" class="question-icon mr-3">
            <i class="fas fa-dollar-sign"></i>
            <FaCar />
          </a>
          <h6 id="subtitle" class="text-uppercase font-weight-bold my-3">
            all brands
          </h6>

          <div class="skills-underline"></div>
          <p class="w-75 mx-auto text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            interdum.
          </p>
        </div>
      
        <div id="one" class="col-sm-6 col-lg-3 text-center my-3">
        <a id="icoon">
          <FaComment />
          </a>
          <h6 id="subtitle" class="text-uppercase font-weight-bold my-3">
            free support
          </h6>
          <div class="skills-underline"></div>
          <p class="w-75 mx-auto text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            interdum.
          </p>
        </div>

        <div id="one" class="col-sm-6 col-lg-3 text-center my-3">
        <a id="icoon">
          <BsFillCreditCardFill />
          </a>
          <h6 id="subtitle" class="text-uppercase font-weight-bold my-3">
            caring
          </h6>
          <div class="skills-underline"></div>
          <p class="w-75 mx-auto text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            interdum.
          </p>
        </div>

        <div id="one" class="col-sm-6 col-lg-3 text-center my-3">
          <a id="icoon">
            <BsFillCreditCardFill />
          </a>
          <h6 id="subtitle" class="text-uppercase font-weight-bold my-3">
            affordable
          </h6>
          <div class="skills-underline"></div>
          <p class="w-75 mx-auto text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            interdum.
          </p>
        </div>
      </div>

      <section class="question py-5" id="question">
        <div class="container">
          <div class="row">
            <div class="col-10 mx-auto col-md-6 d-flex justify-content-between p-4 my-2 question-grey">
              <a href="/#" id="icon" class="question-icon mr-3">
                <i class="fas fa-search"></i>
                <FaSearch />
              </a>

              <div class="question-text w-75">
                <h4
                
                  id="reference"
                  class="question-title text-capitalize font-weight-bold"
                >
                  <Link to="/find-car" style={{ color: "black"}}>
                  are you looking for a car?
                  </Link>
                </h4>
                <p id="reference1" class="question-info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  interdum.
                </p>
              </div>
            </div>

            <div class="col-10 mx-auto col-md-6 d-flex justify-content-between p-4 my-2 question-yellow">
              <a href="/#" id="icon" class="question-icon mr-3">
                <i class="fas fa-dollar-sign"></i>
                <AiFillDollarCircle />
              </a>

              <div class="question-text w-75">
                <h4
                  id="reference"
                  class="question-title text-capitalize font-weight-bold"
                >
                  <Link to="/auth/register" style={{color: "black"}}>
                  do you want to sell a car?
                  </Link>
                </h4>
                <p id="reference1" class="question-info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  interdum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
