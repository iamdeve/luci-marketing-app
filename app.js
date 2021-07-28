const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
	res.json({ message: 'Server is running' });
});
app.post('/api/subscribe', async (req, res) => {
	if (Object.keys(req.body).length === 0) {
		res.status(400).json({
			error: 'Please fill all required fiedls',
		});
	}
	console.log(req.body);

	const { email, firstname, lastname } = req.body;
	const mcData = {
		members: [
			{
				email_address: email,
				merge_fields: {
					FNAME: firstname,
					LNAME: lastname,
				},
				status: 'subscribed',
			},
		],
	};
	const mcDataPost = JSON.stringify(mcData);
	const options = {
		url: 'https://us6.api.mailchimp.com/3.0/lists/5a9843b768/',
		method: 'POST',
		headers: {
			Authorization: 'auth 1f8a24d2f0614bc9ffc1e7465d97b76c-us6',
		},
		body: mcDataPost,
	};

	request(options, (err, response, body) => {
		if (err) {
			console.log(err);
			res.status(400).json({
				error: "Your request can't proccess at the moment. Please try again later",
			});
		} else {
			console.log(response);
			console.log(body);
			res.status(200).json({
				message: 'Subscription Successfull!',
			});
		}
	});
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`application running on prot => ${PORT}`);
});
