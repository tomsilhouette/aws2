import express from 'express';

const app = express();

app.listen(3000, () => console.log('my app is running on 3000'))

app.get('/', (req, res) => res.json("YAYYYYYYYYYYY"))