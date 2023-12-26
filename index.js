const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const SYS_SendMail_Port = 3003;

app.use(express.json());
app.use(cors());

app.post('', (req, res) => {
	const content = req.body;
	console.log(content);

	fetch(`http://localhost:${SYS_SendMail_Port}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: req.body.email,
			token: 'hfse9f839r82r-ef89wgwgwg-fw9eg9we-3457384579',
		}),
	});
});

app.listen(port, () => console.log(`The SYS-TokenGenerator server runs on port ${port}`));
