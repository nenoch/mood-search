import React from 'react';
import { ProgressBar } from 'react-bootstrap';


class MoodBar extends React.Component {
  render(){
    var perc = this.props.percentage;

    if (perc == null) {
      return null;
    }
    return (
      <ProgressBar active now={perc} label={`${perc}%`} />
    );
  }
}

export default MoodBar;
