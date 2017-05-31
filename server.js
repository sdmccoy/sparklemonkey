'use strict';

// REQUIRES //

const express = require('express');

// INSTANTIATION //

const app = express();

// SET-UP //

const PORT = process.env.PORT || 3000;
app.use(express.static('./public'));

// ROUTES //

app.get('/googlemap/src', function(req, res) { res.redirect(`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLEMAP_KEY}&v=3.exp&libraries=visualization`) })

// START SERVER //

app.listen(PORT, function() {
  console.log('Now serving on port', PORT);
});
