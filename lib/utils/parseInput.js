'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = parseInput;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function parseInput(input, format, period) {
  var output = null;

  if (typeof input === 'undefined' || typeof input === 'null' || !input || input === '') {
    output = (0, _moment2['default'])()[period]('day');
  } else if (typeof input === 'string') {
    output = (0, _moment2['default'])(input, format)[period]('day');
  } else if (typeof input === 'function') {

    //var blah = input(moment());
    ///
    //output = parseInput(blah, format, period);

    output = parseInput(input((0, _moment2['default'])()), format, period);

    //output = parseInput(input(moment()[period]('day')) , format, period);
  } else if (input._isAMomentObject) {
      output = input[period]('day').clone();
    }

  return output;
}

module.exports = exports['default'];