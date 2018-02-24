import React from 'react';
import classNames from 'classnames';

class Cell extends React.Component {
  render() {
    return (
      <div className={classNames('cell', {'cell--responsive': responsive} )}></div>
    )
  }
}

export default Cell;