const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post('', (req, res) => {
	const content = req.body;
	console.log(content);
});

app.listen(port, () => console.log(`The SYS-TokenGenerator server runs on port ${port}`));
