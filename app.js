const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors);

// use url encoded
app.use(express.urlencoded({ extended: true }));

// use express.json
app.use(express.json());

// express static path join uploads folder
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.json({ message: 'Hello World.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on port ' + PORT));
