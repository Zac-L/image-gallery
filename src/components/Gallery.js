import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Gallery extends PureComponent {

    static propTypes = {
      bunnies: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    constructor(){
      super();
    }

    render() {
      const bunny = this.props.bunnies[this.props.current];

      return (
        <div className="gallery">
          <img src={bunny.url} alt={bunny.title}/>
          <h4>{bunny.title}</h4>
        </div>
      );
    }
}