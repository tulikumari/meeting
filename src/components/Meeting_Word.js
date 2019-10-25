import React, { Component } from 'react';
import './css/style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Button } from 'react-bootstrap';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const meetingbtn1 = { backgroundColor: 'white', borderColor: 'white', color: 'black', }
const agendabtn1 = {  backgroundColor: 'white', borderColor: 'white', color: 'black', }
const panelbtn1 = { backgroundColor: 'white', borderColor: 'white', color:'black',}
const resuorcesbtn1 = { backgroundColor: 'white', borderColor: 'white' }

class Meeting_Word extends Component {
	state = {
		valueSingle: '3',
		valueMultiple: ['3', '5'],
	  };
	
	  handleOpenMenu = () => {
		this.setState({
		  openMenu: true,
		});
	  }
	
	  handleOnRequestChange = (value) => {
		this.setState({
		  openMenu: value,
		});
	  }

    state = {
        checked: false,
      }
    
      updateCheck() {
        this.setState((oldState) => {
          return {
            checked: !oldState.checked,
          };
        });
      }

	render() {
	   return (
  <div className="container-fluid fluid">
   <div className="row meeting_background_images "> 
	 <div className="col-sm-12 col-md-12 col-xs-12">
						<h3 className="home_headingsec session_heading">Global Neurosience Forum</h3>
		 </div>
		 <div className="col-sm-12 col-md-12 col-xs-12">
				<h4 className="Agenda">Meeting word cloud</h4>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
				<br/><br/><br/>
  	 </div>
	 </div>	
	 <div className="footerspaces"></div>     
	 <div className="row">
   <div className="container-fluied footer_position">
	 <div id="menu-outer row" >
		<div class="table">
			<ul id="horizontal-list">
				<li><Button bsStyle="primary" style={meetingbtn1} bsSize="small" className="meetingbtn"  onClick={() => {this.props.history.push({pathname: '/',})}}>Meeting overview</Button>&nbsp;&nbsp;</li>
				<li><Button bsSize="small" style={agendabtn1} className="agendabtn"  onClick={() => {this.props.history.push({pathname: '/agenda',})}}>Agenda</Button>&nbsp;&nbsp;</li>
				<li><Button bsSize="small" style={panelbtn1} className="panelbtn"  onClick={() => {this.props.history.push({pathname: '/panel',})}}>Panel</Button>&nbsp;&nbsp;</li>
				<li><Button bsSize="small" style={resuorcesbtn1} className="resourcesbtn"  onClick={() => {this.props.history.push({pathname: '/resources',})}}>Resources</Button>&nbsp;&nbsp;</li>
				<li>	
			 <MuiThemeProvider>  
              <IconMenu
						 iconButtonElement=
						 { 
							<button className="joinsessionbtn_joinsession">Join session&nbsp;&nbsp;<i class="fa fa-plus joinsessionbtn_plus"></i></button>
			       }
             open={this.state.openMenu}
             onRequestChange={this.handleOnRequestChange}
            >
           <MenuItem value="1" primaryText="Session" onClick={() => {this.props.history.push({pathname: '/session',})}} />
           <MenuItem value="2" primaryText="Session result" onClick={() => {this.props.history.push({pathname: '/session_result',})}} />
           <MenuItem value="3" primaryText="Session question type"  onClick={() => {this.props.history.push({pathname: '/session_question',})}} />
		       <MenuItem value="5" primaryText="Meeting word cloud" onClick={() => {this.props.history.push({pathname: '/meeting_word',})}} />
		       <MenuItem value="6" primaryText="Live Session" onClick={() => {this.props.history.push({pathname: '/live_session',})}} />
           </IconMenu>
          </MuiThemeProvider> 
				</li>
		 	</ul>
		  </div>
	   </div> 
	  <div className="row">
	    <div className="col-md-4 col-sm-4 footer_logo">
	     <img src={["images/intro/abbvie.png"]} className="logo_images" alt="abbvie_images" width="220px" height="50px"  /><br/> 
      </div>
	   <div className="col-md-8 col-sm-8 minfooter">
	   <ul id="horizontal-list" className="footer_logo2"> 
	   <li><a href="" className="ab abfirst">Privacy Policy</a>&nbsp;&nbsp;</li>
	   <li><a href="" className="ab">Terms of Use</a>&nbsp;&nbsp;</li>
	   <li><a href="" className="ab">Contact</a>&nbsp;&nbsp;</li>
	   <img src="./images/intro/Layer 3.png" className="footer_logo1" alt="abbvie_images" width="200px"  />
	   </ul>
	 </div>
	 </div>
	</div>	
	</div>
   </div>
  );
 }
}

export default Meeting_Word;



