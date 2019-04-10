'use strict';

const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();

app.use(cors());

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
});

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  res.json({
    "name": req.file.originalname,
    "type": req.file.mimetype,
    "size": req.file.size
  });
});

app.use((req, res) => res.status(404).send('Something went wrong...'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Node.js listening ...');
});