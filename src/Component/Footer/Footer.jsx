import React from "react";

const Footer=()=>{
    return(
        <>
        <div class="footer_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <h4 class="about_text">About Financial</h4>
          <div class="location_text"><img src="images/map-icon.png"/><span class="padding_left_15">Locations</span></div>
          <div class="location_text"><img src="images/call-icon.png"/><span class="padding_left_15">+01 9876543210</span>
          </div>
          <div class="location_text"><img src="images/mail-icon.png"/><span class="padding_left_15">demo@gmail.com</span>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <h4 class="about_text">About Financial</h4>
          <p class="dolor_text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        </div>
        <div class="col-lg-3 col-sm-6">
          <h4 class="about_text">Instagram</h4>
          <div class="footer_images">
            <div class="footer_images_left">
              <div class="image_12"><img src="images/img-12.png"/></div>
              <div class="image_12"><img src="images/img-12.png"/></div>
              <div class="image_12"><img src="images/img-12.png"/></div>
            </div>
            <div class="footer_images_right">
              <div class="image_12"><img src="images/img-12.png"/></div>
              <div class="image_12"><img src="images/img-12.png"/></div>
              <div class="image_12"><img src="images/img-12.png"/></div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <h4 class="about_text">Newsletter</h4>
          <input type="text" class="mail_text" placeholder="Enter your email" name="Enter your email"/>
          <div class="subscribe_bt"><a href="#">Subscribe</a></div>
          <div class="footer_social_icon">
            <ul>
              <li><a href="#"><img src="images/fb-icon1.png"/></a></li>
              <li><a href="#"><img src="images/twitter-icon1.png"/></a></li>
              <li><a href="#"><img src="images/linkedin-icon1.png"/></a></li>
              <li><a href="#"><img src="images/youtub-icon1.png"/></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyright_section">
        <div class="copyright_text">Copyright 2019 All Right Reserved By <a href="https://html.design">Free html
            Templates</a></div>
      </div>
    </div>
  </div>
        </>

    );
}
export default Footer;