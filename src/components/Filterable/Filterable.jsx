import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';

import {
  FILTER_BY_LIKES,
  FILTER_BY_OLDER,
  FILTER_BY_YOUNGER,
} from '../../actions/types';

import { filterBy } from '../../actions/filterBy';

class Filterable extends React.Component {
  state = { filter: FILTER_BY_OLDER };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
    this.props.dispatch(filterBy(e.target.value));
  };

  render() {
    const { classes } = this.props;

    return (
      <FormControl
        component="fieldset"
        required
        className={classes.formControl}
      >
        <FormLabel component="legend">Filter by:</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          className={classes.group}
          value={this.state.filter}
          onChange={this.changeFilter}
        >
          <FormControlLabel
            value={FILTER_BY_OLDER}
            control={<Radio />}
            label="Older"
          />
          <FormControlLabel
            value={FILTER_BY_YOUNGER}
            control={<Radio />}
            label="Younger"
          />
          <FormControlLabel
            value={FILTER_BY_LIKES}
            control={<Radio />}
            label="Likes"
          />
        </RadioGroup>
      </FormControl>
    );
  }
}

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    display: 'flex',
    flexDirection: 'row',
  },
});

Filterable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Filterable);
