// Create web server

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const comments = [
    { username: 'Tam', content: 'Hello' },
    { username: 'Teo', content: 'Hi' },
    { username: 'Ti', content: 'Hey' },
];

app.get('/comments', (req, res) => res.send(comments));

app.post('/comments', (req, res) => {
    const { username, content } = req.body;
    const newComment = { username, content };
    comments.push(newComment);
    res.send(newComment);
});

app.listen(port, () => console.log(`Server start with port ${port}`));