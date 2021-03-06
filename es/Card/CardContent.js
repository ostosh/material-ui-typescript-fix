import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    '&:last-child': {
      paddingBottom: theme.spacing.unit * 3
    }
  })
});

function CardContent(props) {
  const { classes, className, component: Component } = props,
        other = _objectWithoutProperties(props, ['classes', 'className', 'component']);

  return React.createElement(Component, _extends({ className: classNames(classes.root, className) }, other));
}

CardContent.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
} : {};

CardContent.defaultProps = {
  component: 'div'
};

export default withStyles(styles, { name: 'MuiCardContent' })(CardContent);