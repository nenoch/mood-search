import React from 'react';
import SearchText from './SearchText';
import MoodResponse from './MoodResponse';
import MoodBar from './MoodBar';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      text: "",
      mood: null,
      percentage: null
    }

    this.handleTextInput = this.handleTextInput.bind(this);
    this.onInputSubmit = this.onInputSubmit.bind(this);
  }

  happyAnalysis(text){
    var happyTot = 0;

    this.props.keywords.happy.forEach((word) => {
      var count = 0;
      var regex = new RegExp('\\b'+word+'\\b', 'gi')
      var matching = text.match(regex);

      if (matching !== null) {
        count += text.match(regex).length;
      }

      happyTot += count;
    });
    return happyTot;
  }

  sadAnalysis(text){
    var sadTot = 0;

    this.props.keywords.sad.forEach((word) => {
      var count = 0;
      var regex = new RegExp('\\b'+word+'\\b', 'gi')
      var matching = text.match(regex);

      if (matching !== null) {
        count += text.match(regex).length;
      }

      sadTot += count;
    });
    return sadTot;
  }

  onInputSubmit(){
    var happyWords = this.happyAnalysis(this.state.text);
    var sadWords = this.sadAnalysis(this.state.text);
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

  handleTextInput(newText){
    this.setState({ text: newText });
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
