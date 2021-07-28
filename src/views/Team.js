import React from 'react';
import classes from './Team.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Profile from '../assets/teams.jpeg';
function Team() {
	const [teams, setTeams] = React.useState([]);
	React.useEffect(() => {
		setTeams([
			{
				name: 'John Doe',
				bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis ad est, sed veniam doloribus ut deleniti aliquid dolore at porro sit dicta labore commodi dolorum consectetur ipsa voluptatem asperiores deserunt.',
				img: Profile,
			},
			{
				name: 'John Doe',
				bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis ad est, sed veniam doloribus ut deleniti aliquid dolore at porro sit dicta labore commodi dolorum consectetur ipsa voluptatem asperiores deserunt.',
				img: Profile,
			},
			{
				name: 'John Doe',
				bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis ad est, sed veniam doloribus ut deleniti aliquid dolore at porro sit dicta labore commodi dolorum consectetur ipsa voluptatem asperiores deserunt.',
				img: Profile,
			},
		]);
	}, []);
	return (
		<Container>
			<div className={classes.teamBoxContainer}>
				{teams.map((team, id) => (
					<div key={id} className={classes.teamContainer}>
						<Row>
							<Col lg={4} sm={4} xs={4}>
								<div className={classes.teamProfile}>
									<img src={team.img} alt={team.name} />
								</div>
							</Col>
							<Col lg={8} sm={8} xs={8}>
								<div className={classes.description}>
									<h4>{team.name}</h4>
									<p>{team.bio}</p>
								</div>
							</Col>
						</Row>
					</div>
				))}
			</div>
		</Container>
	);
}

export default Team;
