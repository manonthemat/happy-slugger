'use strict';

module.exports = function(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
};
