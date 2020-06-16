'use strict'
module.exports = function pdfform() {
    const pdfformJS = require('pdfform.js/pdfform');
    // we are only supporting basic pdf
    const minipdf = require('pdfform.js/minipdf');
    return pdfformJS(minipdf);
}
