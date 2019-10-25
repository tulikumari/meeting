import React, { Component } from 'react';
import './css/style.css';

class footer extends Component {
    render() {
        return (
      <div class="container-fluied">      
        <div className="col-md-12 footer_position">
	     <div className="row">
	      <div className="col-md-4 col-sm-4 footer_logo">
	     <img src={["images/intro/abbvie.png"]} className="logo_images" alt="abbvie_images" width="220px" height="50px"  /><br/> 
        </div>
	   <div className="col-md-8 col-sm-8 minfooter">
	   <ul id="horizontal-list" className="footer_logo2"> 
	   <li><a href="" className="ab abfirst">Privacy Policy</a>&nbsp;&nbsp;</li>
	   <li><a href="" className="ab">Terms of Use</a>&nbsp;&nbsp;</li>
	   <li><a href="" className="ab">Contact</a>&nbsp;&nbsp;</li>
	   <img src="./images/intro/Layer 3.png" className="footer_logo1" alt="abbvie_images" width="200px" height="70px;" />
	   </ul>
	 </div>
	</div>	
	</div>
    </div>
   );
 }
}
export default footer;