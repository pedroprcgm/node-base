const express = require('express'),
    app = express(),
    consign = require('consign'),
    path = require('path');

consign()
    .include('routes')
    .then('infra')
    .then('api')
    .into(app);

module.exports = app;