import React from "react";
import {Image, Grid, Col, Row} from 'react-bootstrap';
import mypicture from '../Images/mypicture.jpg';
import csharp from '../Images/Csharp.png';
import java from '../Images/java.png';
import php from '../Images/php.png';
import angularjs from '../Images/angularjs.png';
import mysql from '../Images/mysql.png';
import unity from '../Images/unity.png';
import wp from '../Images/wp.png';
import reacticon from '../Images/react.svg';
import git from '../Images/git.png';


export default class Content extends React.Component{
	render(){

		return (
			<div className="first_content">
				<div className="text_content">
					<h2 className = "content_header">Hieman tietoa minusta</h2>
					 
					<div id="tietoa">
						<Grid>
	    				<Row>
					      <Col xs={12} md={6}>
					       <Image src={mypicture} alt={mypicture} className="Mypicture" thumbnail  />
					      </Col>
					      <Col>
					      	<h4>Yleistä</h4>

					      	<p>Olen 24-vuotias ohjelmistotekniikan opiskelija Hämeenkyröstä. Nykyään asun ja opiskelen Jyväskylässä.
										Luonteeltani olen sosiaalinen, oma-aloitteinen ja tulen hyvin ihmisten kanssa toimeen. Minulla on laaja kokemus asiakaspalvelusta. Työntekijänä olen ahkera, motivoitunut ja innokas kehittämään omaa osaamistani kaikilla osa-alueilla.</p>
					      	
					      	<h4>Koulutus</h4>

					      	<p>	Kirjoitin ylioppilaaksi vuonna 2012 F.E. Sillanpään lukiosta, jonka jälkeen suoritin varusmiespalveluksen Niinisalon tykistöprikaatissa.
											Aloitin opintoni Jyväskylän ammattikorkeakoulussa syksyllä 2013.
									</p>
									<p> Olen suorittanut lähes kaikki tutkintooni kuuluvat perusopinnot sekä ammatilliset opinnot. Tutkinnostani puuttuu siis lähinnä enää opinnäytetyö,
			 							jota olen tekemässä aiheesta Applying game therory in the development of artificial intelligence. Otsikko saattaa toki vielä muuttua.
			 						</p>
					      </Col>
							</Row>
						</Grid> 
					</div>
					
				</div>
				<div className="teknologies_content">
					<h2 className="content_header">Teknologiota joitten parissa olen työskennellyt</h2>
						<div>
						<Grid>
	    				<Row>
					      <Col xs={12} md={4}>
					      <Row>
					       <Image src={csharp} alt={csharp} className="languageicons"  />
					       </Row>
					       <Row>
					       <Image src={java} alt={java} className="languageicons"   />
					       </Row>
					        <Row>
					       <Image src={php} alt={php} className="languageicons"   />
					       </Row>
			     
					      </Col>
					      <Col xs={12} md={4}>
					     		<Row>
					       		<Image src={angularjs} alt={angularjs} className="languageicons"  />
					       	</Row>
					       	<Row>
					       		<a href="https//google.com">
					       			<Image src={reacticon} alt={reacticon}  className="languageicons"   />
					       		</a>
					       	</Row>
					     		<Row>
					       		<Image src={mysql} alt={mysql} className="languageicons"  />
					       	</Row>		
					      </Col>
					      <Col xs={12} md={4}>
					    	<Row>
					       <Image src={unity} alt={unity} className="languageicons"  />
					       </Row>		
					       	<Row>
					       		<Image src={wp} alt={wp} className="languageicons"  />
					       	</Row>	
					       	<Row>
					       		<Image src={git} alt={git} className="languageicons"  />
					       	</Row>					     
					      </Col>  
							</Row>
						</Grid> 
					</div>
				</div>
			</div>
		);
	}
}