import React from 'react';

class MoodBar extends React.Component {
  render(){
    return (
      <p>{this.props.percentage}</p>
    );
  }
}

export default MoodBar;
