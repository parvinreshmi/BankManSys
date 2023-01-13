import React from 'react';
import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner';


const Header=()=>{
    return(
        <>
        <div class="header_section">
    <div class="header_left">
      <Menu/>
      <Banner/>
    </div>
    <div class="header_right">
      <img src="images/banner-img.png" class="banner_img"/>
    </div>
  </div>
        </>
    );
}
export default Header;