'use strict';

// REQUIRES //

const express = require('express');
const requestProxy = require('express-request-proxy');

// INSTANTIATION //

const app = express();

// SET-UP //

const PORT = process.env.PORT || 3000;
app.use(express.static('./public'));

function proxyTicketMaster(req, res) {
  (requestProxy({
    url: `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.TICKETM_KEY}`,
  }))(req, res);
}

// ROUTES //

app.get('/googlemaps/src',function(req, res) {
  res.redirect(`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLEMAP_KEY}&v=3.exp&libraries=visualization`)
});

app.get('/ticketmaster/concerts', proxyTicketMaster);

app.get('/*', function(req, res) { res.sendFile('index.html', { root: './public' }); });

// START SERVER //

app.listen(PORT, function() {
  console.log('Now serving on port', PORT);
});
