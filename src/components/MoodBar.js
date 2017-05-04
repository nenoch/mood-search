import React from 'react';
import { ProgressBar } from 'react-bootstrap';


class MoodBar extends React.Component {
  render(){
    return <ProgressBar active now={this.props.percentage} />
  }
}

export default MoodBar;
