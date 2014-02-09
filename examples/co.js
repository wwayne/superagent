
var co = require('co');
var request = require('..');

var url = 'https://gist.github.com/visionmedia/9fff5b23c1bf1791c349/raw/3e588e0c4f762f15538cdaf9882df06b3f5b3db6/works.js';

co(function *(){
  try {
    var res = yield request.get(url).end();
    console.log(res);
  } catch (e) {
    console.log('error? %s', e.message);
  }
})();
