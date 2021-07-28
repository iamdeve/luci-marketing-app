import React from 'react';
import classes from './About.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import AboutImg from '../assets/contactus_body_image.png';
function About() {
	const [aboutData, setAboutData] = React.useState([]);

	React.useEffect(() => {
		setAboutData([
			{
				details:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolores nulla sunt excepturi, dolor praesentium reiciendis eveniet tenetur repudiandae harum quasi cum accusantium dolorem quis placeat nostrum sapiente dolore! Asperiores.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolores nulla sunt excepturi, dolor praesentium reiciendis eveniet tenetur repudiandae harum quasi cum accusantium dolorem quis placeat nostrum sapiente dolore! Asperiores.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolores nulla sunt excepturi, dolor praesentium reiciendis eveniet tenetur repudiandae harum quasi cum accusantium dolorem quis placeat nostrum sapiente dolore! Asperiores.',
				image: AboutImg,
				right: true,
			},
			{
				details:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolores nulla sunt excepturi, dolor praesentium reiciendis eveniet tenetur repudiandae harum quasi cum accusantium dolorem quis placeat nostrum sapiente dolore! Asperiores.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolores nulla sunt excepturi, dolor praesentium reiciendis eveniet tenetur repudiandae harum quasi cum accusantium dolorem quis placeat nostrum sapiente dolore! Asperiores.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolores nulla sunt excepturi, dolor praesentium reiciendis eveniet tenetur repudiandae harum quasi cum accusantium dolorem quis placeat nostrum sapiente dolore! Asperiores.',
				image: AboutImg,
				right: false,
			},
			{
				details:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolores nulla sunt excepturi, dolor praesentium reiciendis eveniet tenetur repudiandae harum quasi cum accusantium dolorem quis placeat nostrum sapiente dolore! Asperiores.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolores nulla sunt excepturi, dolor praesentium reiciendis eveniet tenetur repudiandae harum quasi cum accusantium dolorem quis placeat nostrum sapiente dolore! Asperiores.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolores nulla sunt excepturi, dolor praesentium reiciendis eveniet tenetur repudiandae harum quasi cum accusantium dolorem quis placeat nostrum sapiente dolore! Asperiores.',
				image: AboutImg,
				right: true,
			},
			{
				details:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolores nulla sunt excepturi, dolor praesentium reiciendis eveniet tenetur repudiandae harum quasi cum accusantium dolorem quis placeat nostrum sapiente dolore! Asperiores.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolores nulla sunt excepturi, dolor praesentium reiciendis eveniet tenetur repudiandae harum quasi cum accusantium dolorem quis placeat nostrum sapiente dolore! Asperiores.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus dolores nulla sunt excepturi, dolor praesentium reiciendis eveniet tenetur repudiandae harum quasi cum accusantium dolorem quis placeat nostrum sapiente dolore! Asperiores.',
			},
		]);
	}, []);
	return (
		<Container>
			<div className={[classes.aboutBoxContainer, 'about-container'].join(' ')}>
				{aboutData.map((about, id) => (
					<div key={id} className={[classes.aboutContainer].join(' ')}>
						{about.right ? (
							<Row>
								<Col lg={6} sm={6} xs={12}>
									<div className={classes.aboutImage}>
										<img src={about.image} alt={`about-${id}`} />
									</div>
								</Col>
								<Col lg={6} sm={6} xs={12}>
									<div className={classes.details}>
										<p>{about.details}</p>
									</div>
								</Col>
							</Row>
						) : about.image ? (
							<Row>
								<Col lg={6} sm={6} xs={12}>
									<div className={classes.details}>
										<p>{about.details}</p>
									</div>
								</Col>
								<Col lg={6} sm={6} xs={12}>
									<div className={classes.aboutImage}>
										<img src={about.image} alt={`about-${id}`} />
									</div>
								</Col>
							</Row>
						) : (
							<Row>
								<Col lg={12} sm={12} xs={12}>
									<div className={classes.details}>
										<p>{about.details}</p>
									</div>
								</Col>
							</Row>
						)}
					</div>
				))}
			</div>
		</Container>
	);
}

export default About;
