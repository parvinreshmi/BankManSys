import React from 'react';
import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner';


const Header = () => {
  return (
    <>
      <div className="header_section">
        <div className="header_left">
          <Menu />
          <Banner />
        </div>
        <div className="header_right">
          <img src="images/banner-img.png" className="banner_img" />
        </div>
      </div>
    </>
  );
}
export default Header;