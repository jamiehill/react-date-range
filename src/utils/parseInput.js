import moment from 'moment';

export default function parseInput(input, format, period) {
  let output = null;

  if (typeof input === 'undefined' ||  typeof input === 'null' || !input || input === '') {
    output = moment()[period]('day');
  } else if (typeof input === 'string') {
    output = moment(input, format)[period]('day');
  } else if (typeof input === 'function') {

    var mmnt = moment()[period]('day');
    var inpt = input(mmnt);

    output = parseInput(inpt, format, period);

  } else if (input._isAMomentObject) {
    output = input[period]('day').clone();
  }

  return output;
}
