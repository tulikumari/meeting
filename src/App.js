import React, { Component } from 'react';
import {HashRouter , Route} from 'react-router-dom';
import 'react-dom';
import Home from './components/Home';
import './App.css';
import Panel from './components/Panel';
import Agenda from './components/Agenda';
import Resources from './components/Resources';
import Session from './components/Session';
import session_result from './components/Session_Result';
import session_question from './components/Session_Question';
import meeting_word from './components/Meeting_Word';
import Live_Session from './components/Live_Session';
import footer from './components/footer';
// import BottomNavigationExampleSimple from './components/Home';

class App extends Component {
  render() {
    return (
      <HashRouter>
       <div>
        <Route exact path="/" component = {Home} />
        <Route exact path="/panel" component = {Panel} />
        <Route exact path="/agenda" component = {Agenda} />
        <Route exact path="/resources" component = {Resources} /> 
        <Route exact path="/session" component = {Session} />
        <Route exact path="/session_result" component = {session_result} />
        <Route exact path="/session_question" component = {session_question} />
        <Route exact path="/meeting_word" component = {meeting_word} />
        <Route exact path="/live_session" component = {Live_Session} />
        <Route exact path="/footer" component = {footer} />
       </div>
      </HashRouter>
    );
  }
}

export default App;
