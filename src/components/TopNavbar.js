import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './TopNavbar.module.css';
import Logo from '../assets/logo_crop.png';
function TopNavbar() {
	return (
		<div className={classes.NavbarContainer}>
			<Navbar collapseOnSelect expand='lg' bg='white'>
				<Navbar.Brand>
					<Link className={classes.logo} to='/'>
						<img src={Logo} alt='logo' />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'></Nav>
					{/* <Nav>
						<Link className={classes.link} to='/team'>
							<h4>Team</h4>
						</Link>
						<Link className={classes.link} to='/about'>
							<h4>About</h4>
						</Link>
					</Nav> */}
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default TopNavbar;
