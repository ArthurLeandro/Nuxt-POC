const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors())

//videos route
const Videos = require('../routes/Video')
app.use('/videos', Videos)

app.listen(5000, () => {
  console.log('listening on Port 5000')
})