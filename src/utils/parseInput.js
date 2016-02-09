import moment from 'moment';

export default function parseInput(input, format, period) {
  let output = null;

  if (typeof input === 'undefined' ||  typeof input === 'null' || !input || input === '') {
    output = moment()[period]('day');
  } else if (typeof input === 'string') {
    output = moment(input, format)[period]('day');
  } else if (typeof input === 'function') {
    output = parseInput( input(moment()[period]('day')) , format, period);
  } else if (input._isAMomentObject) {
    output = input[period]('day').clone();
  }

  return output;
}
