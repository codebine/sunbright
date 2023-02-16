/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../CSS/Main.css'
import image1 from '../Images/banner11.jpg'
import image2 from '../Images/building2.jpg'
import image3 from '../Images/building.jpg'
import image4 from '../Images/development.jpg'
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
   tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
   
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    }
  };

  return (
    <div className='Home'>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} alt="Find" className='img-fluid'  ></img>
            <div class="carousel-caption">
              <h3>Digital Transformation Services</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image2} alt="Find" className='img-fluid' ></img>
            <div class="carousel-caption">
              <h3>The Data Platform That Simplifies Data Integration</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image3} alt="Find" className='img-fluid' ></img>
            <div class="carousel-caption">
              <h3>Innovative Solutions</h3>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      {/* Carousel */}
      <div className="container">
        <div className='Headin'><h1 className='my-5'>Our Services</h1></div>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className="container">
            <Carousel responsive={responsive}
          
            >
              
              <div>
                <div className="card">
                  <div class="btn-square2 bg-light rounded-circle mb-4">
                    <i className="fa fa-lightbulb-o" ></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Digital Transformation</h5>
                    <p className="card-text">We have development experience, knowledge, and tech expertise, we are confident that our team can give you game-changing advice.</p>
                    <div className="text-center">
                      <Link to="/Services" className='btn btn-primary btn-sm'>Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div class="btn-square2 bg-light rounded-circle mb-4">
                    <i className="fa fa-desktop" ></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">AI & ML</h5>
                    <p className="card-text">We always keep up with the latest Web Development technologies to create high-quality Web Applications in a constantly changing business environment.</p>
                    <div className="text-center">
                      <Link to="/Services" className='btn btn-primary btn-sm'>Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div class="btn-square2 bg-light rounded-circle mb-4">
                    <i className="fa fa-mobile" ></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Mobile App Development</h5>
                    <p className="card-text">Sun Bright has immense experience creating feature-rich & high-performing Mobile Apps for iOS and Android platforms.</p>
                    <div className="text-center">
                      <Link to="/Services" className='btn btn-primary btn-sm'>Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div class="btn-square2 bg-light rounded-circle mb-4">
                    <i className="fa fa-laptop" ></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Custom Software Development</h5>
                    <p className="card-text">Every feature included in each product is designed to boost your company’s value, customer base, and profitability.</p>
                    <div className="text-center">
                      <Link to="/Services" className='btn btn-primary btn-sm'>Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div class="btn-square2 bg-light rounded-circle mb-4">
                    <i className="fa fa-book" ></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">AR & VR</h5>
                    <p className="card-text">We develop, engineer, and integrate custom AR/VR software solutions to suit business needs for gaming, healthcare, automotive, construction, and academic markets.</p>
                    <div className="text-center">
                      <Link to="/Services" className='btn btn-primary btn-sm'>Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div class="btn-square2 bg-light rounded-circle mb-4">
                    <i className="fa fa-cloud" ></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Cloud Services</h5>
                    <p className="card-text">Cloud computing services are changing how businesses and public institutions use information technology. Today cloud services are available to meet most any IT need.</p>
                    <div className="text-center">
                      <Link to="/Services" className='btn btn-primary btn-sm'>Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div class="btn-square2 bg-light rounded-circle mb-4">
                    <i className="fa fa-bar-chart" ></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Analytics</h5>
                    <p className="card-text">Analytics software includes tools for measuring the performance of digital content. Analytical tools can be used to convert business data into reports, dashboards, and other visualizations.</p>
                    <div className="text-center">
                      <Link to="/Services" className='btn btn-primary btn-sm'>Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
          {/* Row -Text */}
          <div className='row d-flex justify-content-center align-items-center mt-5'>
            <div className="col-sm-6">
              <div className='Tex'>
                <h1>What We Do?</h1>
                <p className="lh-2">Custom software development consulting and application management has evolved. There is no longer a one-size-fits-all approach. You need a custom software solution for your unique business challenges. We’re here to build what you need. Sun Bright is a team of developers, architects, and project managers with experience and a singular focus. Using our experience and consideration, we create a custom look and functionality for your software to push your business technology forward in the industry.</p>
              </div>
            </div>

            <div className='col-sm-6'>
              <img src={image4} className="img-fluid" alt="..."></img>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home
