const express = require('express'),
    app = express(),
    consign = require('consign'),
    path = require('path');

consign('routes', { cwd: 'app' })
    .then('infra')
    .then('api')
    .into(app);

module.exports = app;