import React from 'react';
import FontAwesome from 'react-fontawesome';


class MoodResponse extends React.Component {
  render(){

    if (this.props.mood == "happy") {
      return (
        <div>
          <h2>HAPPY DAYS!</h2>
          <FontAwesome
          name='hand-peace-o'
          size='5x'
          />
        </div>
      );
    }
    else if (this.props.mood == "sad") {
      return (
        <div>
          <h2>SAD..</h2>
          <FontAwesome
          name='thumbs-o-down'
          size='5x'
          />
        </div>
      );
    }
    else if (this.props.mood == "unknown") {
      return (
        <div>
          <h2>Unknown</h2>
          <FontAwesome
          name='user-secret'
          size='5x'
          />
        </div>
      );
    }
    else {
      return null;
    }
  }
}

export default MoodResponse;
