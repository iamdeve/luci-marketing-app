import React from 'react';
import classes from './Home.module.css';
import { Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';
import Img1 from '../assets/1.png';
import Img2 from '../assets/2.jpg';
import Img3 from '../assets/3.jpg';
import Img4 from '../assets/4.jpg';
import Img5 from '../assets/5.jpg';

function SubscriptionModal(props) {
	const [state, setState] = React.useState({
		fullname: '',
		email: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setState({
			[name]: value,
		});
	};

	const subscribeNow = async () => {};
	return (
		<Modal {...props} size='sm' aria-labelledby='subscriptionModal' centered>
			<Modal.Header closeButton>
				<Modal.Title id='subscriptionModal'>Subscribe Now</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Fill the Form</h4>
				<Form>
					<Form.Label>Full name</Form.Label>
					<Form.Control type='text' name='fullname' onChange={handleChange} placeholder='Enter Fullname' />
					<Form.Label>Email</Form.Label>
					<Form.Control type='email' name='email' onChange={handleChange} placeholder='Enter email' />
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button className={classes.customBtn} disabled={state.fullname === '' || state.email === ''} onClick={subscribeNow}>
					Subscribe Now
				</Button>
				<Button className={classes.customBtn} onClick={props.onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

function Home() {
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<Container>
			<div className={classes.homeContainer}>
				<div className={classes.imgContainer}></div>
				<div className={classes.subscriptionButtonContainer}>
					<Button className={classes.joinNow} onClick={() => setModalShow(true)}>
						Join Now
					</Button>
				</div>
				<div className={classes.landingBody}>
					<div className={classes.items}>
						<h1 className={classes.itemsHeading}>Increase Profits with a Proven Real Estate Investment Tool</h1>
						<p className={classes.itemSupportText}>Join intelligent small business real estate investors and get crystal-clear answers to your market research questions with Luci Tech software.</p>
					</div>
					<Row className={classes.Row}>
						<Col>
							<div className={classes.itemSubheading}>
								<h1>Reduce the Time You Spend on Market Research</h1>
								<p className={classes.itemSubheadingSupportText}>
									Identifying the perfect market for your next investment is a power move. Luci Tech provides you with the insights you need based on the absolute best real estate data available. Our market research software absorbs data from virtually any type of investment
									property including multifamily properties to short-term rentals and single-family homes. You’ll get access to actionable insights in the shortest amount of time possible. No more spending hours trying to analyze the market. Simply let Luci Tech do it for you.
								</p>
							</div>
						</Col>
						<Col>
							<div className={classes.itemImg}>
								<img src={Img1} alt='item 1' />
							</div>
						</Col>
					</Row>

					<Row className={classes.Row}>
						<Col>
							<div className={classes.itemImg}>
								<img src={Img2} alt='item 2' />
							</div>
						</Col>
						<Col>
							<div className={classes.itemSubheading}>
								<h1>Future-Proof Your Strategic Plan with Proven Investment Modeling Software</h1>
								<p className={classes.itemSubheadingSupportText}>
									Your investments are only as good as the model they’re based on. With Luci Tech in your corner, you can plan, analyze, and forecast your way to a future-proof strategic investment. Make an informed decision with information that ensures you gain a competitive
									advantage and capitalize on opportunities. Our software delivers data that helps you create a strategic plan that factors risk management and performance forecasts into the equation. Rise above your competition and make better decisions with reliable data and
									create a model for any real estate deal you encounter.
								</p>
							</div>
						</Col>
					</Row>
					<Row className={classes.Row}>
						<Col>
							<div className={classes.itemSubheading}>
								<h1>Organize Your Team</h1>
								<p className={classes.itemSubheadingSupportText}>
									Smart real estate investment requires a team of seasoned professionals to get it right. Keeping your team on the same page is anything but easy, however. But with the right software, it can be. Luci Tech provides a simple-to-use platform that simplifies team
									building. Instead of managing multiple email threads or using software designed for employees, utilize a tool that allows you to easily connect with your team members in one place. Help your team create and execute actions all in a single location, with Luci Tech.
								</p>
							</div>
						</Col>
						<Col>
							<div className={classes.itemImg}>
								<img src={Img3} alt='item 3' />
							</div>
						</Col>
					</Row>
					<Row className={classes.Row}>
						<Col>
							<div className={classes.itemImg}>
								<img src={Img4} alt='item 4' />
							</div>
						</Col>
						<Col>
							<div className={classes.itemSubheading}>
								<h1>Turn Market Research into Your Competitive Advantage, With Luci Tech</h1>
								<p className={classes.itemSubheadingSupportText}>
									Data matters. Smart data is even more important. Luci Tech delivers a competitive advantage that you cannot enjoy with any other tool. When you sign up for Luci Tech, you’ll get access to the following competitive advantages:
								</p>
								<ul>
									<li>Make timely and accurate investment decisions</li>
									<li>Track your real estate investment progress easily</li>
									<li>Identify and locate the best on-market properties</li>
									<li>Produce customizable reports to share with potential lenders & partners</li>
								</ul>
							</div>
						</Col>
					</Row>

					<Row className={classes.Row}>
						<Col>
							<div className={classes.itemSubheading}>
								<h1>Upcoming Luci Tech Features!</h1>
								<h2>The future of Luci Tech is exciting!</h2>
								<p className={classes.itemSubheadingSupportText}>Here’s what you can look forward to as we release our industry-leading software to investors like you!</p>
								<ul>
									<li>New and improved research tools </li>
									<li>Locate off-market properties</li>
									<li>Identify new investment strategies</li>
									<li>Easier ways to manage collaborations and listings</li>
								</ul>
							</div>
						</Col>
						<Col>
							<div className={classes.itemImg}>
								<img src={Img5} alt='item 5' />
							</div>
						</Col>
					</Row>

					<div className={classes.callToAction}>
						<h1>Signup to Get The Latest News About Luci Tech</h1>
						<p>Don’t miss your chance to be among the first investors to utilize Luci Tech’s incredible competitive advantages. Enter your email below to sign up for the latest information about Luci Tech’s product launch and be the first to leverage the industry’s best-kept secret. </p>
						<div className={classes.callToAction}>
							<Button className={classes.signUPNow}>Signup Now</Button>
						</div>
					</div>
				</div>
			</div>
			<SubscriptionModal show={modalShow} onHide={() => setModalShow(false)} />
		</Container>
	);
}

export default Home;
