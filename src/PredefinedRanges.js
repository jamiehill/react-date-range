import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import parseInput from './utils/parseInput.js';
import { defaultClasses } from './styles.js';

class PredefinedRanges extends Component {

  constructor(props, context) {
    super(props, context);

    this.styles = this.props.theme;
  }

  handleSelect(name, event) {
    event.preventDefault();

    const range = this.props.ranges[name];

    this.props.onSelect({
      startDate : parseInput(range['startDate'], null, 'startOf'),
      endDate   : parseInput(range['endDate'], null, 'endOf')
    }, PredefinedRanges);
  }

  renderRangeList(classes) {
    const { ranges, range } = this.props;
    const { styles } = this;

    return Object.keys(ranges).map(name => {
      const active = (
        parseInput(ranges[name].startDate, null, 'startOf').isSame(parseInput(range.startDate, null, 'startOf')) &&
        parseInput(ranges[name].endDate, null, 'endOf').isSame(parseInput(range.endDate, null, 'endOf'))
      );

      const style = {
        ...styles['PredefinedRangesItem'],
        ...(active ? styles['PredefinedRangesItemActive'] : {}),
      };

      return (
        <a
          href='#'
          key={'range-' + name}
          className={classes.predefinedRangesItem + (active ? ' active' : '')}
          style={ style }
          onClick={this.handleSelect.bind(this, name)}
        >
          {name}
        </a>
      );
    }.bind(this));
  }

  render() {
    const { style, onlyClasses, classNames } = this.props;
    const { styles } = this;

    const classes = { ...defaultClasses, ...classNames };

    return (
      <div
        style={onlyClasses ? undefined : { ...styles['PredefinedRanges'], ...style }}
        className={ classes.predefinedRanges }
      >
        { this.renderRangeList(classes) }
      </div>
    );
  }
}

PredefinedRanges.defaultProps = {
  onlyClasses : false,
  classNames  : {}
};

PredefinedRanges.propTypes = {
  ranges      : PropTypes.object.isRequired,
  onlyClasses : PropTypes.bool,
  classNames  : PropTypes.object
}

export default PredefinedRanges;
