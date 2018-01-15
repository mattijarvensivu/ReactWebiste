import React from "react";
import {Image, Grid, Col, Row} from 'react-bootstrap';
import fb from '../Images/fb.png';
import twitter from '../Images/twitter.png';
import github from '../Images/github.svg';

export default class Footer extends React.Component{
	render(){
		return (
			<div className="footer">
			
			
					<h1>Ota yhteyttä</h1>
						<div>
						<Grid>
	    				<Row>
					      <Col xs={12} md={6}>
					      <Row>
					     	<p>Puhelin:  <a href="tel:+358407420615">+358407420615</a></p>
					       </Row>
					       <Row>
					      <p> Sähköposti: <a href="email:matti.jarvensivu93@gmail.com">matti.jarvensivu93@gmail.com</a></p>
					       </Row>
						    	     
					      </Col>
					      <Col xs={12} md={6}>
					     		<Row>

					      	<a href="https://facebook.com/matti.jarvensivu" target="_blank"><Image src={fb} alt={fb} className="icons"  /></a>
					       	</Row>
					       	<Row>
					       		<a href="https://twitter.com/matt_lakeside" target="blank_"> <Image src={twitter} alt={twitter} className="icons"  /></a>
					       	</Row>
					       		<Row>
					       <a href="https://github.com/mattijarvensivu" target ="_blank">	<Image src={github} alt={github} className="icons"  /></a>
					       	</Row>	
		
					      </Col>
					      
							</Row>
						</Grid> 
					</div>
				</div>
			
			);
	}
}