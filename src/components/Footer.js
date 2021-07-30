import React from 'react';
import classes from './Footer.module.css';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
	return (
		<div className={classes.footer}>
			<div className={classes.copyright}>{new Date().getFullYear()} Luci Technologies LLC. All Rights Reserved</div>
			<div className={classes.icons}>
				<span>
					<a href='https://www.linkedin.com/company/luci-tech/' target='_blank' rel='noreferrer'>
						<AiFillLinkedin size={44} color='#4b176a' />
					</a>
				</span>
				<span>
					<a href='https://www.instagram.com/luci.tech/' target='_blank' rel='noreferrer'>
						<AiFillInstagram size={44} color='#4b176a' />
					</a>
				</span>
				<span>
					<a href='https://www.facebook.com/luci.technologies' target='_blank' rel='noreferrer'>
						<AiFillFacebook size={44} color='#4b176a' />
					</a>
				</span>
			</div>
		</div>
	);
}

export default Footer;
