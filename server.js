'use strict';

// REQUIRES //

const express = require('express');

// INSTANTIATION //

const app = express();

// SET-UP //

const PORT = process.env.PORT || 3000;
app.use(express.static('./public'));

// ROUTES //


// START SERVER //

app.listen(PORT, function() {
  console.log('Now serving on port', PORT);
});
