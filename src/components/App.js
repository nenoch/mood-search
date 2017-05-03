import React from 'react';
import SearchText from './SearchText';
import MoodBar from './MoodBar';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      text: "",
      happiness: 0,
      sadness: 0
    }

    this.handleTextInput = this.handleTextInput.bind(this);
    this.onInputSubmit = this.onInputSubmit.bind(this);

  }

  happyAnalysis(text){
    var happyTot = 0;

    this.props.keywords.happy.forEach((word) => {
      var count = 0;
      var pos = text.indexOf(word);

      while(pos > -1){
        ++count;
        pos = text.indexOf(word, ++pos);
      }

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
    this.setState({happiness: happyPerc, sadness: sadPerc});
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
        <h2>Happiness</h2>
        <MoodBar percentage={this.state.happiness} />
        <h2>Sadness</h2>
        <MoodBar percentage={this.state.sadness} />
      </div>
    );
  }
}

export default App;
