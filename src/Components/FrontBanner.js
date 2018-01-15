import React from "react";
import Rotatingtext from 'react-rotating-text';
import Navigation from './Navigation/Navigation';
import {Jumbotron, Button} from 'react-bootstrap';

export default class FrontBanner extends React.Component{
	render(){
		return (
			<div>
			<Navigation/>
			<Jumbotron className="App-header">
   <h1 className="Bannertext">
      Mitä lähdetään tekemään? <br/><b> <Rotatingtext   items={['React','AngularJS', 'PHP', 'C#', 'Java', 'MySQL']} /></b> </h1>
   
    
  </Jumbotron>
			
			</div>
			);
	}
}