import React from 'react';
import SearchText from './SearchText';
import MoodResponse from './MoodResponse';
import MoodBar from './MoodBar';
import { get } from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      text: "",
      happyWs: null,
      sadWs: null,
      mood: null,
      percentage: null
    }

    this.handleTextInput = this.handleTextInput.bind(this);
    this.onInputSubmit = this.onInputSubmit.bind(this);
  }

  wordsAnalysis(array, text){
    var total = 0;

    console.log(array);

    array.forEach((word) => {
      var count = 0;
      var regex = new RegExp('\\b'+word+'\\b', 'gi')
      var matching = text.match(regex);

      if (matching !== null) {
        count += text.match(regex).length;
      }

      total += count;
    });
    return total;
  }

  componentDidMount() {
  get(`http://localhost:3000/api`)
    .then(({data}) => {
      const {happyWs, sadWs} = data;
      this.setState({ happyWs, sadWs });
    });
}

  onInputSubmit(){
    var happyWords = this.wordsAnalysis(this.state.happyWs, this.state.text);
    var sadWords = this.wordsAnalysis(this.state.sadWs, this.state.text);
    var total = happyWords + sadWords;

    if (happyWords > sadWords) {
      this.setState({mood: "HAPPY!", percentage: (happyWords/total) * 100});
    }
    else if (happyWords < sadWords) {
      this.setState({mood: "SAD...", percentage: (sadWords/total) * 100});
    }
    else {
      this.setState({mood: "Unknown :-|", percentage: null});
    }
  }

  handleTextInput(text){
    this.setState({ text });
  }

  render(){
    return (
      <div className='col-md-12 text-center'>
        <h1>Mood Search!</h1>
        <h3>Type in some text and find out how you feel today.</h3>
        <SearchText text={this.state.text} onTextInput={this.handleTextInput} onSubmit={this.onInputSubmit}/>
        <MoodResponse mood={this.state.mood} />
        <MoodBar percentage={this.state.percentage} />
      </div>
    );
  }
}

export default App;
