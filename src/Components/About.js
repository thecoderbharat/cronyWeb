import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
      }

      return (
         <section id="testimonials">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Bharat Dixit Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>WHO WE ARE</h2>

                  <p>
                     Founded in 2013 by Gaurav Hinduja and Sashank Rishyasringa, Capital Float is the leading Fintech lender to digital India. From financing the dynamic growth of the SMEs to offering innovative point-of-sale financing for consumers, we are leading the charge in addressing the country’s enormous credit problem.

                     Powered by rigorous innovation and technological advancements, and with the acquisition of India’s leading Personal Finance Management App – Walnut in 2018, we’re proud to be recognized as a trailblazer in India’s Fintech revolution. We passionately serve our customers with cutting-edge financial products and strive to help them #BreakLimits.
               </p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>Bulwargx</span><br />
                           <span>{street}<br />
                              {city} {state}, {zip}
                           </span><br />
                           <span>9716827120</span><br />
                           <span>bharat.dixit8@gmail.com</span>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           {/* <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a> */}
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <section id="have-a-project" className="have-project">

               <section id="" data-stellar-background-ratio="0.7" class="sectionM">
                  <div class="text-center">
                     <div class="parallax-overlay"></div>
                     <div class="container">
                     {/* <div style={{ width: '100%', height: 20 }}> </div> */}
                     <h2 class="paragraph"><big style={{ paddingTop: 20 }} class="white"></big><br />
                        <small class="black"> Need help in making your dream into reality?</small></h2>
                     <p className="paragraph">Allow us to fulfill your idea &amp; give you a working product. We will help you each step of the way!</p>
                     <p className="paragraph"><a class="get-start-btn" style={{  borderRadius: 5, padding: 8 }} href="#contact" rel="noopener noreferrer">Apply Now</a></p>


                     </div>

                  </div>
               </section>
            </section>

            {/* <section class="great-started section-padding">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12 col-sm-12">
                        <div class="great-started-text text-center">
                           <h4>We Are Ready to Help You</h4>
                           <h2>Get the Best Solution for Your Business</h2>
                           <a class="get-start-btn smoth-scroll" href="#home">great-started</a>
                        </div>
                     </div>
                  </div>
               </div>
            </section> */}

         </section>
      );
   }
}

export default About;
