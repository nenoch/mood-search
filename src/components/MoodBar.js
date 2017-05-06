import React from 'react';
import style from '../../css/main.css';
import { ProgressBar } from 'react-bootstrap';


class MoodBar extends React.Component {
  render(){
    var perc = this.props.percentage;

    if (perc == null) {
      return null;
    }
    return (
      <ProgressBar className={style.mood_bar} active now={perc} label={`${perc}%`} />
    );
  }
}

export default MoodBar;
