import React from "react";

const Banner = () => {
  return (
    <>
      <div className="banner_main">
        <h1 className="banner_taital">financial <br />Service</h1>
        <p className="banner_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever </p>
        <div className="btn_main">
          <div className="more_bt"><a href="#">Read More </a></div>
          <div className="contact_bt"><a href="#">Contact Us</a></div>
        </div>
      </div>
    </>
  );
}
export default Banner;