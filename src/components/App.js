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
      var regex = '\\b' + word + '\\b';
      var pos = text.indexOf(regex);

      while(pos > -1){
        ++count;
        pos = text.indexOf(regex, ++pos);
      }

      console.log(count);

      happyTot += count;
    });

    return happyTot;
  }

  sadAnalysis(text){
    var sadTot = 0;

    this.props.keywords.sad.forEach((word) => {
      var count = 0;
      var pos = text.indexOf(word);

      while(pos > -1){
        ++count;
        pos = text.indexOf(word, ++pos);
      }

      sadTot += count;
    });

    return sadTot;
  }

  onInputSubmit(){
    var happyWords = this.happyAnalysis(this.state.text);
    var sadWords = this.sadAnalysis(this.state.text);
    var total = happyWords + sadWords;
    var happyPerc = (happyWords/total) * 100;
    var sadPerc = (sadWords/total) * 100;

    if (happyPerc > sadPerc) {
      this.setState({mood: "HAPPY!", percentage: happyPerc});
    }
    else if (happyPerc < sadPerc) {
      this.setState({mood: "SAD...", percentage: sadPerc});
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
      <div className='app'>
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
