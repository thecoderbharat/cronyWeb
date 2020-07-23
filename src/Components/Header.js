import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

var linkStyle;
var linkStyle2;
var linkStyle3;
var linkStyle4;
var linkStyle5;
var linkStyle6;
var linkStyle7 = { backgroundColor: 'transparent', borderWidth: 1, borderRadius: 5, borderColor: 'white' };

class Header extends Component {
   constructor(props) {
      super(props)
      this.state = {
         hover: false
      }
   }

   // toggleHover() {
   //    this.setState({ hover: !this.state.hover })
   // }
   hoverEvent = () => {
      // alert('hii');
      this.setState({  hover: true });
      linkStyle = {  cursor: 'pointer', backgroundColor: 'gray', borderRadius: 5 }
      return linkStyle;
   }

   hoverNotEvent = () => {
      // alert('byee');
      this.setState({  hover: true });
      linkStyle = { backgroundColor: 'transparent', borderRadius: 5 }
      return linkStyle;
   }

   hoverEvent2 = () => {
      // alert('hii');
      this.setState({  hover: true });
      linkStyle2 = {  cursor: 'pointer', backgroundColor: 'gray', borderRadius: 5 }
      return linkStyle;
   }

   hoverNotEvent2 = () => {
      // alert('byee');
      this.setState({  hover: true });
      linkStyle2 = { backgroundColor: 'transparent', borderRadius: 5 }
      return linkStyle;
   }

   hoverEvent3 = () => {
      // alert('hii');
      this.setState({  hover: true });
      linkStyle3 = {  cursor: 'pointer', backgroundColor: 'gray', borderRadius: 5 }
      return linkStyle;
   }

   hoverNotEvent3 = () => {
      // alert('byee');
      this.setState({  hover: true });
      linkStyle3 = { backgroundColor: 'transparent', borderRadius: 5 }
      return linkStyle;
   }

   hoverEvent4 = () => {
      // alert('hii');
      this.setState({  hover: true });
      linkStyle4 = {  cursor: 'pointer', backgroundColor: 'gray', borderRadius: 5 }
      return linkStyle;
   }

   hoverNotEvent4 = () => {
      // alert('byee');
      this.setState({  hover: true });
      linkStyle4 = { backgroundColor: 'transparent', borderRadius: 5 }
      return linkStyle;
   }

   hoverEvent5 = () => {
      // alert('hii');
      this.setState({  hover: true });
      linkStyle5 = {  cursor: 'pointer', backgroundColor: 'gray', borderRadius: 5 }
      return linkStyle;
   }

   hoverNotEvent5 = () => {
      // alert('byee');
      this.setState({  hover: true });
      linkStyle5 = { backgroundColor: 'transparent', borderRadius: 5 }
      return linkStyle;
   }

   hoverEvent6 = () => {
      // alert('hii');
      this.setState({  hover: true });
      linkStyle6 = {  cursor: 'pointer', backgroundColor: 'gray', borderRadius: 5 }
      return linkStyle;
   }

   hoverNotEvent6 = () => {
      // alert('byee');
      this.setState({  hover: true });
      linkStyle6 = { backgroundColor: 'transparent', borderRadius: 5 }
      return linkStyle;
   }

   hoverEvent7 = () => {
      // alert('hii');
      this.setState({  hover: true });
      linkStyle7 = {  cursor: 'pointer', backgroundColor: 'gray',  borderWidth: 1, borderRadius: 5, borderColor: 'white'  }
      return linkStyle;
   }

   hoverNotEvent7 = () => {
      // alert('byee');
      this.setState({  hover: true });
      linkStyle7 = { backgroundColor: 'transparent', borderWidth: 1, borderRadius: 5, borderColor: 'white' }
      return linkStyle;
   }

   pushToLogin = () => {
      console.log('hhhhhhh')
      return <Redirect to='/login' />
   }

   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var occupation = this.props.data.occupation;
         var description = this.props.data.description;
         var city = this.props.data.address.city;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current" style={{ marginBottom: 10 }}><a className="smoothscroll" style={linkStyle} onMouseEnter={this.hoverEvent} onMouseLeave={this.hoverNotEvent} href="#home">Home</a></li>
                  {/* <li><a className="smoothscroll" href="#resume">Resume</a></li> */}
                  <li><a className="smoothscroll" style={linkStyle3} onMouseEnter={this.hoverEvent3} onMouseLeave={this.hoverNotEvent3} href="#about">Finance</a></li>
                  <li><a className="smoothscroll" style={linkStyle4} onMouseEnter={this.hoverEvent4} onMouseLeave={this.hoverNotEvent4} href="#testimonials">Clients</a></li>
                  <li><a className="smoothscroll" style={linkStyle2} onMouseEnter={this.hoverEvent2} onMouseLeave={this.hoverNotEvent2} href="#portfolio">About</a></li>
                  <li><a className="smoothscroll" style={linkStyle5} onMouseEnter={this.hoverEvent5} onMouseLeave={this.hoverNotEvent5} href="#contact">Contact</a></li>
                  {/* <li><a className="smoothscroll" style={linkStyle6} onMouseEnter={this.hoverEvent6} onMouseLeave={this.hoverNotEvent6} href="">Login</a></li> */}
                  {/* <li><a className="smoothscroll" href="">Apply Now</a></li> */}
                  <li style={{ marginLeft: 10 }}>
                     <a href="/login" class=" has-child no-link">Login</a>
                     <ul class="list-unstyled child-navigation">
                        <li><a  style={{ borderStyle: 'solid', borderRadius: 5, borderWidth: 1, borderColor: 'white', backgroundColor: 'transparent' }} href="index.html">Apply Now</a></li>
                        
                     </ul>
                  </li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">We Do Finance.</h1>
                  <h3>If your customer has a specific working capital requirement, we have the right credit solution for them. Choose from a wide range of quick, hassle-free loans, tailored to the varying needs of Indian SMEs across different industries</h3>
                  <hr />
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
