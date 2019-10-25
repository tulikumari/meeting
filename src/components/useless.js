import React, { Component } from 'react';
import './css/style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Button } from 'react-bootstrap';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';


const meetingbtn1={backgroundColor:'#EA6320', borderColor:'#EA6320',color:'white'}
const agendabtn1={backgroundColor:'white', borderColor:'white'}
const panelbtn1={backgroundColor:'white', borderColor:'white'}
const resuorcesbtn1={backgroundColor:'white', borderColor:'white'}

class useless extends Component {
	state = {valueSingle: '3',valueMultiple: ['3', '5'],};
	handleOpenMenu = () => {this.setState({ openMenu: true,});}
	handleOnRequestChange = (value) => {this.setState({openMenu: value,});}

	render() {
	   return (
  <div className="container-fluid">
   <div className="row background-images"> 
    <div className="col-sm-12 col-md-12 ">
		  <h3 className="home_headingsec">Global Neurosience Forum</h3>
    </div>
	<div className="col-sm-12 col-md-12">
		 <p className="home_contant">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>
      incididunt ut labore et dolore magna alique . Ut enim ad minim veniam, quis nostrud<br/>
      exercitiation ullamco laboris nisi ut aliquip ex ea commodo consequat .Duis aute iraute<br/>
            dolor in reprehenderit in voluptate velit esse cillum dolore en fugiat nulla pariatur<br/>
            Excepteur sint occaecat cupidatat non proident,sunt in cupla qui officia deserunt mollit<br/>
            anim id est laburom
		 </p>	   
		 <p className="home_contant_second">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br/>
			ut labore et dolore magna alique . Ut enim ad minim veniam, quis nostrud exercitiation <br/> 
			ullamco laboris nisi ut aliquip ex ea commodo consequat .Duis aute iraute dolor in <br/>
			reprehenderit in voluptate velit esse cillum dolore en fugiat nulla pariatur Excepteur sint <br/>
			occaecat cupidatat non proident,sunt in cupla qui officia deserunt mollit anim id est<br/>
			laburom<br/><br/><br/>
		 </p>
	</div>
	<div className="col-md-12">
	<div className="row ">
	 <div className="col-md-12 col-sm-12" >
	  <table className="tableimages">
		<tr>
		  <td>
			<img src={["./images/intro/Layer 4.jpg"]} className="images" alt="employee one" width="140px"/>	
		  </td>  
		  <td>
			<img src={["./images/intro/Layer 5.jpg"]} className="images" alt="employee one" width="140px"/>	
		  </td>  
		  <td>
			<img src={["./images/intro/Layer 6.jpg"]} className="images" alt="employee one" width="140px"/>	
		  </td>  
		</tr>
		<tr>
		  <td>
		  <b className="define_name">&nbsp;Sed do eiusmod </b>
		   <p className="define_name1">&nbsp;Duis aute irure dolor</p>   
		  </td> 
		  <td>
		  <b className="define_name">&nbsp;Sed do eiusmod </b>
		   <p className="define_name1">&nbsp;Duis aute irure dolor</p>   
		  </td> 
		  <td>
		  <b className="define_name">&nbsp;Sed do eiusmod </b>
		   <p className="define_name1">&nbsp;Duis aute irure dolor</p>   
		  </td>  
		</tr>	  
	  </table>	  
     </div>
		 
	</div>
	</div>
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
							<button className="joinsessionbtn">Join session&nbsp;&nbsp;<i class="fa fa-plus joinsessionbtn_plus"></i></button>
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
	 </div>	
	 <div>
	 
		</div>
	</div>	
  );
 }
}

export default useless;





