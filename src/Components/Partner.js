import React, { Component } from 'react';
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
// import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
// import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
// import 'react-awesome-slider/dist/styles.css';
// const AutoplaySlider = withAutoplay(AwesomeSlider);


class Partner extends Component {
   render() {

      if (this.props.data) {
         var projects = this.props.data.financeServices.map(function (projects) {
            var projectImage = 'images/portfolio/2.jpg';
            return <div className="redA">
               <div class="single-service-box">
                  <div class="service-icon">
                     <i class="fa fa-briefcase"></i>
                  </div>
                  <div class="service-content">
                     <h4>{projects.title}</h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenati.</p>
                  </div>
               </div>
            </div>
         })
      }


      return (
         <section id="about" class="our-services-area gry-bg section-padding">
            <div class="container">
               <div class="row">
                  <div class="col-sm-12">
                     <div class="section-title text-center">
                        <h1 style={{ color: 'white' }}>Our Finance Services</h1>
                        <span></span>
                        <p style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elitsed ation Lorem ipsum
                            <br />dolor sit amet.Veniam quis notru exercit.</p>
                     </div>
                  </div>
               </div>
               <div class="row">
                  {/* <!-- START SINGLE SERVICE BOX --> */}
                  {/* <div className="twelve columns collapsed"> */}

                     {/* <h1>Check Out Some of Our Finance Services.</h1> */}

                     <div className="bgrid-quarters s-bgrid-thirds cf">
                        {projects}
                     </div>
                  {/* </div> */}
                  {/* <!-- END SINGLE SERVICE BOX --> */}
               </div>
            </div>
         </section>
      );
   }
}

export default Partner;
