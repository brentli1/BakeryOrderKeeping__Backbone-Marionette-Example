/*
  This requires all gulp tasks that are contained within the gulp/tasks folder
*/

var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });
