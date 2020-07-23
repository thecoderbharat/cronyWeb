import React, { Component } from 'react';
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
// import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
// import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
// import 'react-awesome-slider/dist/styles.css';


// const AutoplaySlider = withAutoplay(AwesomeSlider);


class Login extends Component {
   render() {

      if (this.props.data) {

      }

      return (

         <section class="login-container">

            <section class="login-left-side">
               <img class="img" src="images/fi.jpg" />
            </section>
            <section class="login-right-side">
               <div class="logo"> <img src="images/fLogo.png" /> </div>
               <div class="form-cont login--signin" id="login">
                  <div class="login-sign_in login_signin">
                     <h1>Sign in</h1>
                     <p>To keep connected with us please login with your user name and password.</p>
                     <form class="form" action="https://www.google.com/" id="login_form" method="post">
                        <div class="wrap-input validate-input m-b-23">
                           <input class="login_input" type="text" name="username" id="username" placeholder="Enter your email/ Phone Number" value="" />
                           <span class="focus-input mail" data-symbol="&#xf206;"></span> </div>
                        <span class="error"></span>
                        <div class="wrap-input validate-input">
                           <input class="login_input" type="password" name="password" id="password" value="" placeholder="Enter your password" />
                           <span class="focus-input lock" data-symbol="&#xf190;"></span> </div>
                        <span class="error"></span>
                        <div class="row login_extra">
                           <div class="col">
                              <label class="checkbox-cont mr-5"> Remember me
                       <input type="checkbox" name="remember" id="remember" />
                                 <span class="checkmark"></span>
                                 <input type="hidden" name="remember_me" id="remember_me" />
                              </label>
                           </div>
                           {/* <div class="col pull-right"><a href="javascript:;" id="login_forgot" class="login_link">Forget your Password ?</a> </div> */}
                        </div>
                        <div class="login_actions">
                           <input type="submit" id="" name="login_signin" class="btn btn-brand btn-elevate login_btn-primary" value="Sign In" />
                        </div>
                        {/* <div class="alreadyHave">Don't have an account? <a href="javascript:clrAllInput()" id="signUp" class="login_link">Sign up here</a></div> */}
                     </form>
                  </div>


               </div>
            </section>
         </section>


      );
   }
}

export default Login;
