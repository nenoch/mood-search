import React from 'react';

class MoodBar extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <p>{this.props.percentage}</p>
    );
  }
}

export default MoodBar;
