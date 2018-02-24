import React from 'react';
import classNames from 'classnames';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.getContainerElements = this.getContainerElements.bind(this);
  }

  getContainerElements(elements) {
    return (
      elements.length ?
        elements.map((element, index) =>
          <div className='cell' key={index}>{element}</div>)
        :
        elements
    )
  }

  render() {
    const {elements, fluid} = this.props;
    return (
      <div className={classNames('container', {'container--fluid': fluid} )}>
        <div className="row">
          {this.getContainerElements(elements)}
        </div>
      </div>
    )
  }
}

export default Container;