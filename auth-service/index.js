const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

const users = [{ id: 1, username: 'user', password: 'pass' }];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});
