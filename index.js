const fs = require('fs/promises');
const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const { v4: uuid } = require('uuid');

const app = express();
const port = 3000;

app.get('/token', (req, res) => {
	res.send('<h1>token</h1>');
});

app.listen(port, () => console.log(`The SYS-TokenGenerator server runs on port ${port}`));
