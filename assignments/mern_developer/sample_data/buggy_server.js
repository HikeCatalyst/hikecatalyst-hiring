// Small notes API. Contains deliberate bugs for review.
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const SECRET = 'secret123';
const users = [];            // { id, email, password }
const notes = [];            // { id, userId, text }

app.post('/register', (req, res) => {
  const { email, password } = req.body;
  users.push({ id: users.length + 1, email, password });
  res.json({ ok: true });
});

app.post('/login', (req, res) => {
  const user = users.find(u => u.email == req.body.email && u.password == req.body.password);
  if (!user) return res.status(401).json({ error: 'bad login' });
  res.json({ token: jwt.sign({ id: user.id }, SECRET) });
});

function auth(req, res, next) {
  const token = req.headers.authorization;
  req.user = jwt.decode(token);
  next();
}

app.get('/notes', auth, (req, res) => {
  res.json(notes.filter(n => n.userId == req.user.id));
});

app.post('/notes', auth, (req, res) => {
  const note = { id: notes.length + 1, userId: req.user.id, text: req.body.text };
  notes.push(note);
  res.json(note);
});

app.delete('/notes/:id', auth, (req, res) => {
  const i = notes.findIndex(n => n.id == req.params.id);
  notes.splice(i, 1);
  res.json({ ok: true });
});

app.get('/search', (req, res) => {
  res.json(eval('notes.filter(n => n.text.includes("' + req.query.q + '"))'));
});

app.listen(3000);
